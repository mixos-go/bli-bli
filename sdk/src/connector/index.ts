export type { TokenSet, BlibliConnectorConfig } from './types'
export type { TokenStore } from './token-store'
export { InMemoryTokenStore } from './token-store'
export { BlibliConnector } from './connector'
import type { BlibliConnectorConfig } from './types'
import { BlibliConnector } from './connector'

/** Factory: buat BlibliConnector untuk satu kredensial app. */
export function createBlibliConnector(config: BlibliConnectorConfig): BlibliConnector {
  return new BlibliConnector(config)
}