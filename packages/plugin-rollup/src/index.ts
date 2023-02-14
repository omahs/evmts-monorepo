import type { Plugin } from 'rollup'
import { z } from 'zod'

const optionsValidator = z.object({
  forgeExecutable: z.string().optional(),
})

type Options = z.infer<typeof optionsValidator>

export default function envTsPluginRollup(options: Options = {}): Plugin {
  optionsValidator.parse(options)
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
    },
  }
}
