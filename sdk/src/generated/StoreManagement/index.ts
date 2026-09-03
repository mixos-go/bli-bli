// AUTO-GENERATED from Blibli Seller API reference docs (references/api/Store Management).
// Do not edit by hand; run `npm run generate` in sdk/.

import { BlibliClient } from '../../client'
import { BlibliRequestOptions } from '../../types'

export interface BindRequestV1Request {
  /** Store code that is expected to be bound with API client system.  */
  "store-code": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type BindRequestV1Response = unknown

export interface CloseStoreListV1Body {
  "filter"?: {
    "status"?: string,
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

export interface CloseStoreListV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type CloseStoreListV1Response = unknown

export interface CreateCloseStoreV1Body {
  "acceptOrder"?: boolean,
  "reason"?: string,
  "endDate"?: number,
  "closeNow"?: boolean,
  "startDate"?: number,
}

export interface CreateCloseStoreV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type CreateCloseStoreV1Response = unknown

export interface CreatePickupPointV1Request {
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

export type CreatePickupPointV1Response = unknown

export interface OpenEarlyStoreV1Request {
  /** This is a path parameter for close store ID value can be obtained by using the Close Store List V1 API.  */
  "id": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type OpenEarlyStoreV1Response = unknown

export interface PickupPointCoverageV1Request {
  /** Pickup Point Code path variable. Check your Pickup Points by using Pickup Point List API  */
  "code": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type PickupPointCoverageV1Response = unknown

export interface PickupPointListV2Request {
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

export type PickupPointListV2Response = unknown

export interface StoreDetailV1Request {
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

export type StoreDetailV1Response = unknown

export interface UpdatePickupPointHourV1Request {
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

export type UpdatePickupPointHourV1Response = unknown

export interface UpdatePickupPointV1Request {
  /** Pickup Point Code path variable. Check your Pickup Points by using Pickup Point List API  */
  "code": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type UpdatePickupPointV1Response = unknown

export class BlibliStoreManagementApi {
  constructor(private client: BlibliClient) {}

  /**
   * bindRequestV1
   * /clients/v1/binds/TOQ-15126 (POST)
   */
  async bindRequestV1(params: BindRequestV1Request, opts?: BlibliRequestOptions): Promise<BindRequestV1Response> {
    return this.client.request({"method":"POST","path":"/clients/v1/binds/TOQ-15126","query":["store-code","requestId","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * closeStoreListV1
   * /seller/v1/stores/closing/filter (POST)
   */
  async closeStoreListV1(params: CloseStoreListV1Request, body: CloseStoreListV1Body, opts?: BlibliRequestOptions): Promise<CloseStoreListV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/stores/closing/filter","query":["requestId","businessPartnerCode","username","storeId","channelId"],"pathParams":[],"body":["filter","sorting","paging"]}, { ...(params as unknown as Record<string, unknown>), ...(body as unknown as Record<string, unknown>) }, opts)
  }

  /**
   * createCloseStoreV1
   * /seller/v1/stores/closing (POST)
   */
  async createCloseStoreV1(params: CreateCloseStoreV1Request, body: CreateCloseStoreV1Body, opts?: BlibliRequestOptions): Promise<CreateCloseStoreV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/stores/closing","query":["requestId","businessPartnerCode","username","storeId","channelId"],"pathParams":[],"body":["acceptOrder","reason","endDate","closeNow","startDate"]}, { ...(params as unknown as Record<string, unknown>), ...(body as unknown as Record<string, unknown>) }, opts)
  }

  /**
   * createPickupPointV1
   * /seller/v1/stores/pickup-points (POST)
   */
  async createPickupPointV1(params: CreatePickupPointV1Request, opts?: BlibliRequestOptions): Promise<CreatePickupPointV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/stores/pickup-points","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * openEarlyStoreV1
   * /seller/v1/stores/closing/5b9749b482ced3d8e03f65a2/open-early (PUT)
   */
  async openEarlyStoreV1(params: OpenEarlyStoreV1Request, opts?: BlibliRequestOptions): Promise<OpenEarlyStoreV1Response> {
    return this.client.request({"method":"PUT","path":"/seller/v1/stores/closing/5b9749b482ced3d8e03f65a2/open-early","query":["id","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * pickupPointCoverageV1
   * /seller/v1/stores/pickup-points/PP-12345/coverage (GET)
   */
  async pickupPointCoverageV1(params: PickupPointCoverageV1Request, opts?: BlibliRequestOptions): Promise<PickupPointCoverageV1Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/stores/pickup-points/PP-12345/coverage","query":["code","requestId","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * pickupPointListV2
   * /seller/v1/stores/pickup-points/filter (POST)
   */
  async pickupPointListV2(params: PickupPointListV2Request, opts?: BlibliRequestOptions): Promise<PickupPointListV2Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/stores/pickup-points/filter","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * storeDetailV1
   * /seller/v1/stores (GET)
   */
  async storeDetailV1(params: StoreDetailV1Request, opts?: BlibliRequestOptions): Promise<StoreDetailV1Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/stores","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updatePickupPointHourV1
   * /seller/v1/stores/pickup-points/bulk-update (POST)
   */
  async updatePickupPointHourV1(params: UpdatePickupPointHourV1Request, opts?: BlibliRequestOptions): Promise<UpdatePickupPointHourV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/stores/pickup-points/bulk-update","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updatePickupPointV1
   * /seller/v1/stores/pickup-points/PP-12345 (PUT)
   */
  async updatePickupPointV1(params: UpdatePickupPointV1Request, opts?: BlibliRequestOptions): Promise<UpdatePickupPointV1Response> {
    return this.client.request({"method":"PUT","path":"/seller/v1/stores/pickup-points/PP-12345","query":["code","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }
}
