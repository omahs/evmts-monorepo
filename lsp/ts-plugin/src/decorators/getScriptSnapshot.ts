import { createDecorator } from '../factories'
import { isSolidity } from '../utils'
import { getArtifactPathSync } from '../utils/getArtifactPathSync'
import { solcModules } from '@evmts/bundler'
import { existsSync } from 'fs'

/**
 * Decorate `LangaugeServerHost.getScriptSnapshot` to return generated `.d.ts` file for `.sol` files
 * This will allow the language server to provide intellisense for `.sol` files
 * @see https://github.com/wagmi-dev/wagmi/blob/main/packages/cli/src/plugins/foundry.ts
 * TODO replace with modules for code reuse
 */
export const getScriptSnapshotDecorator = createDecorator(
	({ languageServiceHost }, ts, logger, config) => {
		return {
			getScriptSnapshot: (filePath) => {
				if (!isSolidity(filePath) || !existsSync(filePath)) {
					return languageServiceHost.getScriptSnapshot(filePath)
				}

				try {
					const plugin = solcModules(
						{
							out: config.out,
							project: config.project,
						},
						logger as any,
					)
					const snapshot = plugin.resolveDtsSync(filePath, process.cwd())
					return ts.ScriptSnapshot.fromString(snapshot)
				} catch (e) {
					logger.error(
						`@evmts/ts-plugin: getScriptSnapshotDecorator was unable to resolve dts for ${filePath}`,
					)
					logger.error(e as any)
					return ts.ScriptSnapshot.fromString('export {}')
				}
			},
		}
	},
)
