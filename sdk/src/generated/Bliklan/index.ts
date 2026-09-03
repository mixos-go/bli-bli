// AUTO-GENERATED from Blibli Seller API reference docs (references/api/Bliklan).
// Do not edit by hand; run `npm run generate` in sdk/.

import { BlibliClient } from '../../client'
import { BlibliRequestOptions } from '../../types'

export interface FilterSellerBliklanCampaignKeywordV1Request {
  /** Path variable of the unique identifier of the Bliklan campaign.  */
  "campaign-id": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type FilterSellerBliklanCampaignKeywordV1Response = unknown

export interface FilterSellerBliklanCampaignOverallV1Request {
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

export type FilterSellerBliklanCampaignOverallV1Response = unknown

export interface FilterSellerBliklanCampaignProductV1Request {
  /** Path variable of the unique identifier of the Bliklan campaign.  */
  "campaign-id": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type FilterSellerBliklanCampaignProductV1Response = unknown

export interface FilterSellerBliklanCampaignV1Body {
  "filter"?: {
    "adTypes"?: Array<string>,
    "bidTypes"?: Array<string>,
    "endDate"?: number,
    "excludeMetaCampaigns"?: boolean,
    "metaSubStatus"?: Array<string>,
    "name"?: string,
    "pageType"?: string,
    "startDate"?: number,
    "status"?: Array<string>,
  },
  "sorting"?: {
    "by"?: string,
    "direction"?: string,
  },
  "paging"?: {
    "page"?: number,
    "size"?: number,
  },
}

export interface FilterSellerBliklanCampaignV1Request {
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

export type FilterSellerBliklanCampaignV1Response = unknown

export interface GetBliklanBalanceV1Request {
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

export type GetBliklanBalanceV1Response = unknown

export class BlibliBliklanApi {
  constructor(private client: BlibliClient) {}

  /**
   * filterSellerBliklanCampaignKeywordV1
   * /seller/v1/bliklan/metrics/campaigns/CEB9266-TC05-1774956988931/keywords (POST)
   */
  async filterSellerBliklanCampaignKeywordV1(params: FilterSellerBliklanCampaignKeywordV1Request, opts?: BlibliRequestOptions): Promise<FilterSellerBliklanCampaignKeywordV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/bliklan/metrics/campaigns/CEB9266-TC05-1774956988931/keywords","query":["campaign-id","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * filterSellerBliklanCampaignOverallV1
   * /seller/v1/bliklan/metrics/campaigns/overall/products (POST)
   */
  async filterSellerBliklanCampaignOverallV1(params: FilterSellerBliklanCampaignOverallV1Request, opts?: BlibliRequestOptions): Promise<FilterSellerBliklanCampaignOverallV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/bliklan/metrics/campaigns/overall/products","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * filterSellerBliklanCampaignProductV1
   * /seller/v1/bliklan/metrics/campaigns/CEB9266-TC05-1774956988931/products (POST)
   */
  async filterSellerBliklanCampaignProductV1(params: FilterSellerBliklanCampaignProductV1Request, opts?: BlibliRequestOptions): Promise<FilterSellerBliklanCampaignProductV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/bliklan/metrics/campaigns/CEB9266-TC05-1774956988931/products","query":["campaign-id","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * filterSellerBliklanCampaignV1
   * /seller/v1/bliklan/metrics/campaigns/filter (POST)
   */
  async filterSellerBliklanCampaignV1(params: FilterSellerBliklanCampaignV1Request, body: FilterSellerBliklanCampaignV1Body, opts?: BlibliRequestOptions): Promise<FilterSellerBliklanCampaignV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/bliklan/metrics/campaigns/filter","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":["filter","sorting","paging"]}, { ...(params as unknown as Record<string, unknown>), ...(body as unknown as Record<string, unknown>) }, opts)
  }

  /**
   * getBliklanBalanceV1
   * /seller/v1/bliklan/balance (GET)
   */
  async getBliklanBalanceV1(params: GetBliklanBalanceV1Request, opts?: BlibliRequestOptions): Promise<GetBliklanBalanceV1Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/bliklan/balance","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }
}
