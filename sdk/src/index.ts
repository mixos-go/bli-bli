import { BlibliClient } from './client'
import { BlibliCredentials, BlibliEnvironment, BlibliError } from './types'
import * as generated from './generated'

export * from './types'
export * from './client'
export { BlibliClient } from './client'
export { generated }

// Re-export every category client class.
export {
  BlibliBlibliPromoApi,
  BlibliBliklanApi,
  BlibliClickCollectApi,
  BlibliDeprecatedAPIApi,
  BlibliObsoleteAPIApi,
  BlibliOrderApi,
  BlibliOrderReturnApi,
  BlibliProductApi,
  BlibliProductDiscussionApi,
  BlibliQueueApi,
  BlibliSellerDiscountApi,
  BlibliSellerFreePromoApi,
  BlibliSellerPromoPurchaseDealsApi,
  BlibliSellerVoucherApi,
  BlibliSettlementApi,
  BlibliStoreManagementApi,
  BlibliWebhookHistoryApi,
} from './generated'
import {
  BlibliBlibliPromoApi,
  BlibliBliklanApi,
  BlibliClickCollectApi,
  BlibliDeprecatedAPIApi,
  BlibliObsoleteAPIApi,
  BlibliOrderApi,
  BlibliOrderReturnApi,
  BlibliProductApi,
  BlibliProductDiscussionApi,
  BlibliQueueApi,
  BlibliSellerDiscountApi,
  BlibliSellerFreePromoApi,
  BlibliSellerPromoPurchaseDealsApi,
  BlibliSellerVoucherApi,
  BlibliSettlementApi,
  BlibliStoreManagementApi,
  BlibliWebhookHistoryApi,
} from './generated'

export interface BlibliOptions {
  credentials: BlibliCredentials
  /** Default environment. Defaults to `production`. */
  environment?: BlibliEnvironment
  /** Node 18+ native fetch is used by default; override for custom transport. */
  fetch?: typeof fetch
}

/**
 * `Blibli` is the main entry point. It wires a low-level `BlibliClient` to all
 * 17 generated category APIs (131 callable endpoints) under typed sub-clients.
 *
 * @example
 * import { Blibli } from './index'
 *
 * const blibli = new Blibli({
 *   credentials: {
 *     clientKey: 'YOUR_CLIENT_KEY',
 *     clientSecret: 'YOUR_CLIENT_SECRET',
 *     apiSellerKey: 'YOUR_API_SELLER_KEY',
 *     signatureKey: 'OPTIONAL_SIGNATURE_KEY',
 *   },
 *   environment: 'production',
 * })
 *
 * const res = await blibli.order.cancellationReasonV1({
 *   requestId: '440f22b8-...',
 *   storeId: 10001,
 * })
 */
export class Blibli {
  /** Low-level client (auth headers, optional signing, request). */
  readonly client: BlibliClient
  readonly options: BlibliOptions

  readonly blibliPromo: BlibliBlibliPromoApi
  readonly bliklan: BlibliBliklanApi
  readonly clickCollect: BlibliClickCollectApi
  readonly deprecated: BlibliDeprecatedAPIApi
  readonly obsolete: BlibliObsoleteAPIApi
  readonly order: BlibliOrderApi
  readonly orderReturn: BlibliOrderReturnApi
  readonly product: BlibliProductApi
  readonly productDiscussion: BlibliProductDiscussionApi
  readonly queue: BlibliQueueApi
  readonly sellerDiscount: BlibliSellerDiscountApi
  readonly sellerFreePromo: BlibliSellerFreePromoApi
  readonly sellerPromoPurchaseDeals: BlibliSellerPromoPurchaseDealsApi
  readonly sellerVoucher: BlibliSellerVoucherApi
  readonly settlement: BlibliSettlementApi
  readonly storeManagement: BlibliStoreManagementApi
  readonly webhookHistory: BlibliWebhookHistoryApi

  constructor(options: BlibliOptions) {
    this.options = options
    const client = new BlibliClient({
      credentials: options.credentials,
      environment: options.environment,
      fetch: options.fetch,
    })
    this.client = client

    this.blibliPromo = new BlibliBlibliPromoApi(client)
    this.bliklan = new BlibliBliklanApi(client)
    this.clickCollect = new BlibliClickCollectApi(client)
    this.deprecated = new BlibliDeprecatedAPIApi(client)
    this.obsolete = new BlibliObsoleteAPIApi(client)
    this.order = new BlibliOrderApi(client)
    this.orderReturn = new BlibliOrderReturnApi(client)
    this.product = new BlibliProductApi(client)
    this.productDiscussion = new BlibliProductDiscussionApi(client)
    this.queue = new BlibliQueueApi(client)
    this.sellerDiscount = new BlibliSellerDiscountApi(client)
    this.sellerFreePromo = new BlibliSellerFreePromoApi(client)
    this.sellerPromoPurchaseDeals = new BlibliSellerPromoPurchaseDealsApi(client)
    this.sellerVoucher = new BlibliSellerVoucherApi(client)
    this.settlement = new BlibliSettlementApi(client)
    this.storeManagement = new BlibliStoreManagementApi(client)
    this.webhookHistory = new BlibliWebhookHistoryApi(client)
  }
}

export { BlibliError }
