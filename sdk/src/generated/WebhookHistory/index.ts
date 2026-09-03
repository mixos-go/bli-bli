// AUTO-GENERATED from Blibli Seller API reference docs (references/api/Webhook History).
// Do not edit by hand; run `npm run generate` in sdk/.

import { BlibliClient } from '../../client'
import { BlibliRequestOptions } from '../../types'

export interface FailedHistoryRequest {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type FailedHistoryResponse = unknown

export interface SuccessHistoryRequest {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type SuccessHistoryResponse = unknown

export class BlibliWebhookHistoryApi {
  constructor(private client: BlibliClient) {}

  /**
   * failed history
   * /seller/v1/webhook/failed-histories (GET)
   */
  async failedHistory(params: FailedHistoryRequest, opts?: BlibliRequestOptions): Promise<FailedHistoryResponse> {
    return this.client.request({"method":"GET","path":"/seller/v1/webhook/failed-histories","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * success history
   * /seller/v1/webhook/success-histories (GET)
   */
  async successHistory(params: SuccessHistoryRequest, opts?: BlibliRequestOptions): Promise<SuccessHistoryResponse> {
    return this.client.request({"method":"GET","path":"/seller/v1/webhook/success-histories","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }
}
