import path = require('path')
import type { Plugin } from 'rollup'

import type { FoundryOptions } from './foundry'
import { forgeOptionsValidator, getFoundryConfig } from './foundry'

export default function envTsPluginRollup(
  options: FoundryOptions = {},
): Plugin {
  const foundryOptions = forgeOptionsValidator.parse(options)
  const foundryConfig = getFoundryConfig(foundryOptions)
  const artifactsDir = path.join(foundryOptions.projectRoot, foundryConfig.out)
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
