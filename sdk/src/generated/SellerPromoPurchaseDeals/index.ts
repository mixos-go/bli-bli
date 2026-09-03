// AUTO-GENERATED from Blibli Seller API reference docs (references/api/Seller Promo Purchase Deals).
// Do not edit by hand; run `npm run generate` in sdk/.

import { BlibliClient } from '../../client'
import { BlibliRequestOptions } from '../../types'

export interface CreateSellerPromoPurchaseDealV1Request {
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

export type CreateSellerPromoPurchaseDealV1Response = unknown

export interface FilterSellerPromoPurchaseDealMainProductItemsV1Request {
  /** This is path parameter for Purchase Deal Promo code value. Purchase Deal Promo Code value can be obtained by hitting POST Filter Purchase Deal Promo List V1 API. (path) */
  "promo-code": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type FilterSellerPromoPurchaseDealMainProductItemsV1Response = unknown

export interface FilterSellerPromoPurchaseDealMainProductsV1Request {
  /** This is path parameter for Purchase Deal Promo code value. Purchase Deal Promo Code value can be obtained by hitting POST Filter Purchase Deal Promo List V1 API. (path) */
  "promo-code": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type FilterSellerPromoPurchaseDealMainProductsV1Response = unknown

export interface FilterSellerPromoPurchaseDealV1Body {
  "filter"?: {
    "endDate"?: number,
    "keyword"?: string,
    "startDate"?: number,
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

export interface FilterSellerPromoPurchaseDealV1Request {
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

export type FilterSellerPromoPurchaseDealV1Response = unknown

export interface SellerPromoPurchaseDealDiscountedProductItemListV1Request {
  /** This is path parameter for Purchase Deal Promo code value. Purchase Deal Promo Code value can be obtained by hitting POST Filter Purchase Deal Promo List V1 API. (path) */
  "promo-code": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type SellerPromoPurchaseDealDiscountedProductItemListV1Response = unknown

export interface SellerPromoPurchaseDealDiscountedProductListV1Request {
  /** This is path parameter for Purchase Deal Promo code value. Purchase Deal Promo Code value can be obtained by hitting POST Filter Purchase Deal Promo List V1 API. (path) */
  "promo-code": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type SellerPromoPurchaseDealDiscountedProductListV1Response = unknown

export interface StopSellerPromoPurchaseDealV1Request {
  /** This is path parameter for Purchase Deal Promo code value. Purchase Deal Promo Code value can be obtained by hitting POST Filter Purchase Deal Promo List V1 API.  */
  "promo-code": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type StopSellerPromoPurchaseDealV1Response = unknown

export interface UpdateSellerPromoPurchaseDealV1Request {
  /** This is path parameter for Purchase Deal Promo code value. Purchase Deal Promo Code value can be obtained by hitting POST Filter Purchase Deal Promo List V1 API. (path) */
  "promo-code": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type UpdateSellerPromoPurchaseDealV1Response = unknown

export interface UpsertSellerPromoPurchaseDealDiscountedProductsV1Request {
  /** This is path parameter for Purchase Deal Promo code value. Purchase Deal Promo Code value can be obtained by hitting POST Filter Purchase Deal Promo List V1 API. (path) */
  "promo-code": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type UpsertSellerPromoPurchaseDealDiscountedProductsV1Response = unknown

export interface UpsertSellerPromoPurchaseDealMainProductsV1Request {
  /** This is path parameter for Purchase Deal Promo code value. Purchase Deal Promo Code value can be obtained by hitting POST Filter Purchase Deal Promo List V1 API. (path) */
  "promo-code": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type UpsertSellerPromoPurchaseDealMainProductsV1Response = unknown

export class BlibliSellerPromoPurchaseDealsApi {
  constructor(private client: BlibliClient) {}

  /**
   * createSellerPromoPurchaseDealV1
   * /seller/v1/promos/purchase-deals (POST)
   */
  async createSellerPromoPurchaseDealV1(params: CreateSellerPromoPurchaseDealV1Request, opts?: BlibliRequestOptions): Promise<CreateSellerPromoPurchaseDealV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/promos/purchase-deals","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * filterSellerPromoPurchaseDealMainProductItemsV1
   * /seller/v1/promos/purchase-deals/{promoCode}/products/main/items/filter (POST)
   */
  async filterSellerPromoPurchaseDealMainProductItemsV1(params: FilterSellerPromoPurchaseDealMainProductItemsV1Request, opts?: BlibliRequestOptions): Promise<FilterSellerPromoPurchaseDealMainProductItemsV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/promos/purchase-deals/{promoCode}/products/main/items/filter","query":["requestId","storeCode","username","storeId"],"pathParams":[["promoCode","promo-code"]],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * filterSellerPromoPurchaseDealMainProductsV1
   * /seller/v1/promos/purchase-deals/{promoCode}/products/main/filter (POST)
   */
  async filterSellerPromoPurchaseDealMainProductsV1(params: FilterSellerPromoPurchaseDealMainProductsV1Request, opts?: BlibliRequestOptions): Promise<FilterSellerPromoPurchaseDealMainProductsV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/promos/purchase-deals/{promoCode}/products/main/filter","query":["requestId","storeCode","username","storeId"],"pathParams":[["promoCode","promo-code"]],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * filterSellerPromoPurchaseDealV1
   * /seller/v1/promos/purchase-deals/filter (POST)
   */
  async filterSellerPromoPurchaseDealV1(params: FilterSellerPromoPurchaseDealV1Request, body: FilterSellerPromoPurchaseDealV1Body, opts?: BlibliRequestOptions): Promise<FilterSellerPromoPurchaseDealV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/promos/purchase-deals/filter","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":["filter","sorting","paging"]}, { ...(params as unknown as Record<string, unknown>), ...(body as unknown as Record<string, unknown>) }, opts)
  }

  /**
   * sellerPromoPurchaseDealDiscountedProductItemListV1
   * /seller/v1/promos/purchase-deals/{promoCode}/products/discounted/items/filter (POST)
   */
  async sellerPromoPurchaseDealDiscountedProductItemListV1(params: SellerPromoPurchaseDealDiscountedProductItemListV1Request, opts?: BlibliRequestOptions): Promise<SellerPromoPurchaseDealDiscountedProductItemListV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/promos/purchase-deals/{promoCode}/products/discounted/items/filter","query":["requestId","storeCode","username","storeId"],"pathParams":[["promoCode","promo-code"]],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * sellerPromoPurchaseDealDiscountedProductListV1
   * /seller/v1/promos/purchase-deals/{promoCode}/products/discounted/filter (GET)
   */
  async sellerPromoPurchaseDealDiscountedProductListV1(params: SellerPromoPurchaseDealDiscountedProductListV1Request, opts?: BlibliRequestOptions): Promise<SellerPromoPurchaseDealDiscountedProductListV1Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/promos/purchase-deals/{promoCode}/products/discounted/filter","query":["requestId","storeCode","username","storeId"],"pathParams":[["promoCode","promo-code"]],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * stopSellerPromoPurchaseDealV1
   * /seller/v1/promos/purchase-deals/PCD-10000000001/stop (PUT)
   */
  async stopSellerPromoPurchaseDealV1(params: StopSellerPromoPurchaseDealV1Request, opts?: BlibliRequestOptions): Promise<StopSellerPromoPurchaseDealV1Response> {
    return this.client.request({"method":"PUT","path":"/seller/v1/promos/purchase-deals/PCD-10000000001/stop","query":["promo-code","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updateSellerPromoPurchaseDealV1
   * /seller/v1/promos/purchase-deals/{promoCode} (PUT)
   */
  async updateSellerPromoPurchaseDealV1(params: UpdateSellerPromoPurchaseDealV1Request, opts?: BlibliRequestOptions): Promise<UpdateSellerPromoPurchaseDealV1Response> {
    return this.client.request({"method":"PUT","path":"/seller/v1/promos/purchase-deals/{promoCode}","query":["requestId","storeCode","username","storeId"],"pathParams":[["promoCode","promo-code"]],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * upsertSellerPromoPurchaseDealDiscountedProductsV1
   * /seller/v1/promos/purchase-deals/{promoCode}/products/discounted (PUT)
   */
  async upsertSellerPromoPurchaseDealDiscountedProductsV1(params: UpsertSellerPromoPurchaseDealDiscountedProductsV1Request, opts?: BlibliRequestOptions): Promise<UpsertSellerPromoPurchaseDealDiscountedProductsV1Response> {
    return this.client.request({"method":"PUT","path":"/seller/v1/promos/purchase-deals/{promoCode}/products/discounted","query":["requestId","storeCode","username","storeId"],"pathParams":[["promoCode","promo-code"]],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * upsertSellerPromoPurchaseDealMainProductsV1
   * /seller/v1/promos/purchase-deals/{promoCode}/products/main (PUT)
   */
  async upsertSellerPromoPurchaseDealMainProductsV1(params: UpsertSellerPromoPurchaseDealMainProductsV1Request, opts?: BlibliRequestOptions): Promise<UpsertSellerPromoPurchaseDealMainProductsV1Response> {
    return this.client.request({"method":"PUT","path":"/seller/v1/promos/purchase-deals/{promoCode}/products/main","query":["requestId","storeCode","username","storeId"],"pathParams":[["promoCode","promo-code"]],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }
}
