// AUTO-GENERATED from Blibli Seller API reference docs (references/api/Settlement).
// Do not edit by hand; run `npm run generate` in sdk/.

import { BlibliClient } from '../../client'
import { BlibliRequestOptions } from '../../types'

export interface DownloadSettlementV1Request {
  /** Unique settlement ID that's requested to be downloaded by putting it on path variable. This value can be obtained by using GET Settlement List API.  */
  "settlementId": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type DownloadSettlementV1Response = unknown

export interface SettlementDetailAdjustmentV1Request {
  /** Unique settlement ID that's requested to be downloaded by putting it on path variable. This value can be obtained by using GET Settlement List API.  */
  "settlementId": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type SettlementDetailAdjustmentV1Response = unknown

export interface SettlementDetailOrderItemsV1Request {
  /** Unique settlement ID that's requested to be downloaded by putting it on path variable. This value can be obtained by using GET Settlement List API.  */
  "settlementId": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type SettlementDetailOrderItemsV1Response = unknown

export interface SettlementDetailV1Request {
  /** Unique settlement ID that's requested to be downloaded by putting it on path variable. This value can be obtained by using GET Settlement List API.  */
  "settlementId": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type SettlementDetailV1Response = unknown

export interface SettlementListV1Request {
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

export type SettlementListV1Response = unknown

export class BlibliSettlementApi {
  constructor(private client: BlibliClient) {}

  /**
   * downloadSettlementV1
   * /seller/v1/settlements/da192ae9-c780-4856-b9ea-1d5161bfc160/download (GET)
   */
  async downloadSettlementV1(params: DownloadSettlementV1Request, opts?: BlibliRequestOptions): Promise<DownloadSettlementV1Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/settlements/da192ae9-c780-4856-b9ea-1d5161bfc160/download","query":["settlementId","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * settlementDetailAdjustmentV1
   * /seller/v1/settlements/da192ae9-c780-4856-b9ea-1d5161bfc160/adjustments (GET)
   */
  async settlementDetailAdjustmentV1(params: SettlementDetailAdjustmentV1Request, opts?: BlibliRequestOptions): Promise<SettlementDetailAdjustmentV1Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/settlements/da192ae9-c780-4856-b9ea-1d5161bfc160/adjustments","query":["settlementId","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * settlementDetailOrderItemsV1
   * /seller/v1/settlements/da192ae9-c780-4856-b9ea-1d5161bfc160/orderItems (GET)
   */
  async settlementDetailOrderItemsV1(params: SettlementDetailOrderItemsV1Request, opts?: BlibliRequestOptions): Promise<SettlementDetailOrderItemsV1Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/settlements/da192ae9-c780-4856-b9ea-1d5161bfc160/orderItems","query":["settlementId","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * settlementDetailV1
   * /seller/v1/settlements/da192ae9-c780-4856-b9ea-1d5161bfc160 (GET)
   */
  async settlementDetailV1(params: SettlementDetailV1Request, opts?: BlibliRequestOptions): Promise<SettlementDetailV1Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/settlements/da192ae9-c780-4856-b9ea-1d5161bfc160","query":["settlementId","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * settlementListV1
   * /seller/v1/settlements/filter (GET)
   */
  async settlementListV1(params: SettlementListV1Request, opts?: BlibliRequestOptions): Promise<SettlementListV1Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/settlements/filter","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }
}
