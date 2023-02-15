import path = require('path')
import { execa } from 'execa'
import * as fse from 'fs-extra'
import { globby } from 'globby'
import { basename, extname } from 'pathe'
import type { Plugin } from 'rollup'
import { z } from 'zod'

import type { FoundryOptions } from './foundry'
import { forgeOptionsValidator, getFoundryConfig } from './foundry'

function getContractName(artifactPath: string) {
  const filename = basename(artifactPath)
  const extension = extname(artifactPath)
  return filename.replace(extension, '')
}

/**
 * Expected shape of the forge artifacts
 */
export const forgeArtifactsValidator = z.object({
  abi: z.array(
    z.object({
      inputs: z.array(
        z.object({
          internalType: z.string(),
          name: z.string(),
          type: z.string(),
        }),
      ),
      name: z.string(),
      outputs: z.array(
        z.object({
          internalType: z.string(),
          name: z.string(),
          type: z.string(),
        }),
      ),
      stateMutability: z.string(),
      type: z.string(),
    }),
  ),
  bytecode: z.object({
    object: z.string(),
    sourceMap: z.string(),
  }),
})

async function getContract(
  artifactPath: string,
  deployments: Record<string, string>,
) {
  const artifact = forgeArtifactsValidator.parse(
    await fse.readJSON(artifactPath),
  )
  return {
    name: getContractName(artifactPath),
    artifactPath,
    ...artifact,
    address: deployments[getContractName(artifactPath)],
  }
}
export default function envTsPluginRollup(
  options: FoundryOptions = {},
): Plugin {
  const foundryOptions = forgeOptionsValidator.parse(options)
  const foundryConfig = getFoundryConfig(foundryOptions)
  const artifactsDir = path.join(foundryOptions.projectRoot, foundryConfig.out)

  const contracts: Record<string, Awaited<ReturnType<typeof getContract>>> = {}

  /**
   * @see wagmis implementation as reference https://github.com/wagmi-dev/wagmi/blob/main/packages/cli/src/plugins/foundry.ts
   */
  const include = ['*.json']
  const defaultExcludes = [
    'Common.sol/**',
    'Components.sol/**',
    'Script.sol/**',
    'StdAssertions.sol/**',
    'StdError.sol/**',
    'StdCheats.sol/**',
    'StdMath.sol/**',
    'StdJson.sol/**',
    'StdStorage.sol/**',
    'StdUtils.sol/**',
    'Vm.sol/**',
    'console.sol/**',
    'console2.sol/**',
    'test.sol/**',
    '**.s.sol/*.json',
    '**.t.sol/*.json',
  ]
  const getArtifactPaths = async (artifactsDirectory: string) => {
    return globby([
      ...include.map((x) => `${artifactsDirectory}/**/${x}`),
      ...defaultExcludes.map((x) => `!${artifactsDirectory}/**/${x}`),
    ])
  }

  return {
    name: '@evmts/plugin-rollup',
    buildStart: async () => {
      await execa(foundryOptions.forgeExecutable, [
        'build',
        '--root',
        foundryOptions.projectRoot,
      ])

      if (!fse.existsSync(artifactsDir)) {
        throw new Error('artifacts directory does not exist')
      }
      const artifactsPaths = await getArtifactPaths(artifactsDir)
      for (const artifactsPath of artifactsPaths) {
        const contract = await getContract(
          artifactsPath,
          foundryOptions.deployments,
        )
        if (!contract.abi?.length) continue
        contracts[artifactsPath] = contract
      }
    },
    resolveId(id, importer) {
      if (!id.endsWith('.sol')) {
        return
      }
      console.log('new solidity file', { id, importer })
    },
    load(id) {
      if (!id.endsWith('.sol')) {
        return
      }
      console.log('loading solidity file', { id })

      const contract = contracts[id]

      return `
        export default ${JSON.stringify(contract)}
      `
    },
  }
}
