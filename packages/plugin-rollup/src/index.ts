import { execaCommandSync } from 'execa'
import type { Plugin } from 'rollup'
import { z } from 'zod'

const foundryConfigValidator = z.object({
  out: z.string().default('out'),
  src: z.string().default('src'),
})

const optionsValidator = z.object({
  forgeExecutable: z
    .string()
    .optional()
    .default('forge')
    .describe('path to forge executable'),
  projectRoot: z
    .string()
    .optional()
    .default(process.cwd())
    .describe('path to project root'),
})

type Options = Partial<z.infer<typeof optionsValidator>>

export default function envTsPluginRollup(options: Options = {}): Plugin {
  const { forgeExecutable, projectRoot } = optionsValidator.parse(options)
  const config = foundryConfigValidator.parse(
    JSON.parse(
      execaCommandSync(`${forgeExecutable} config --json --root ${projectRoot}`)
        .stdout,
    ),
  )
  return {
    name: '@evmts/plugin-rollup',
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

      return `
        export const abi = ${JSON.stringify(abi)}
        export const bytecode = ${JSON.stringify(bytecode)}
      `
    },
  }
}
