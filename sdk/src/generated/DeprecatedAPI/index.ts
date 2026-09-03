// AUTO-GENERATED from Blibli Seller API reference docs (references/api/Deprecated API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { BlibliClient } from '../../client'
import { BlibliRequestOptions } from '../../types'

export interface AirwayBillInformationV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Specified order item number  */
  "orderItemId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type AirwayBillInformationV1Response = unknown

export interface CategoryAttributeListV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Parameter field of category code. This is a unique code for specific category.  */
  "categoryCode": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type CategoryAttributeListV1Response = unknown

export interface CreateProductV2Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type CreateProductV2Response = unknown

export interface DownloadShippingLabelV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Specified order item number  */
  "orderItemId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type DownloadShippingLabelV1Response = unknown

export interface FulfillRegularV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type FulfillRegularV1Response = unknown

export interface OrderDetailV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Specified order number  */
  "orderNo": number,
  /** Specified order item number  */
  "orderItemNo": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type OrderDetailV1Response = unknown

export interface OrderListV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
  /** OPTIONAL. 1: Regular / 2: Big Product / 3: BOPIS. Filter result by product handling type  */
  "productTypeCode"?: number,
}

export type OrderListV1Response = unknown

export interface PartialFulfillV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type PartialFulfillV1Response = unknown

export interface PickupPointDetailV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
  /** Filter for response page number, not mandatory with default value = 0  */
  "page"?: number,
  /** Filter for response size, not mandatory with default value = 10. Max size value is 25.  */
  "size"?: number,
}

export type PickupPointDetailV1Response = unknown

export interface PickupPointListV1Request {
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
  /** Filter for response page number, not mandatory with default value = 0  */
  "page"?: number,
  /** Filter for response size, not mandatory with default value = 10. Max size value is 25.  */
  "size"?: number,
}

export type PickupPointListV1Response = unknown

export interface ProductDetailV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Unique ID that generated by Blibli’s system that defines Product item or variant which owned by specific Seller. Pattern ID is xxx-xxxxx-xxxxx-xxxxx, the fourth section is a unique number for the item or variant of the Product. For example TOQ-15130-00001 is your product ID for Phone X, then TOQ-15130-00001-00001 is for Phone X Black and TOQ-15130-00001-00002 for Phone X Red. Note: Use gdnSku/itemSku for Seller operation through product, like update and so on.  */
  "gdnSku": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type ProductDetailV1Response = unknown

export interface ProductHistoryV1Request {
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

export type ProductHistoryV1Response = unknown

export interface ProductListV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
  /** Unique ID that generated by Bliblis system that defines product item or variant which owned by specific Seller. Pattern ID is xxx-xxxxx-xxxxx-xxxxx, the fourth section is a unique number for the item or variant of the Product. Example: TOQ-15130-00001 is your product ID for Phone X TOQ-15130-00001-00001 is for Phone X Black TOQ-15130-00001-00002 is for Phone X Red Note: Use gdnSku/itemSku for Seller operation through product, like update and so on.  */
  "gdnSku"?: string,
}

export type ProductListV1Response = unknown

export interface ProductListV2Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type ProductListV2Response = unknown

export interface QueueStatusV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type QueueStatusV1Response = unknown

export interface RejectedProductListByMerchantSkuV2Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Parameter field that contains a unique value of merchantSku  */
  "merchantSku": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type RejectedProductListByMerchantSkuV2Response = unknown

export interface RejectedProductListV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
  /** Filter for response page number, not mandatory with default value = 0  */
  "page"?: number,
  /** Filter for response size, not mandatory with default value = 10. Max size value is 100.  */
  "size"?: number,
}

export type RejectedProductListV1Response = unknown

export interface ReviseProductSubmissionV1Request {
  /** Product code  */
  "product-code": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type ReviseProductSubmissionV1Response = unknown

export interface SettleOrderV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type SettleOrderV1Response = unknown

export interface UnarchiveProductV1Request {
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

export type UnarchiveProductV1Response = unknown

export interface UpdateDropshipAwbV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
  /** Specified order number  */
  "orderNo": number,
}

export type UpdateDropshipAwbV1Response = unknown

export interface UpdateProductByBlibliSkuV1Request {
  /** The unique ID that generated by Blibli system that defines Product item or variant which owned by specific Seller. Pattern ID is xxx-xxxxx-xxxxx-xxxxx. The combination first and second section define the seller code. Combination first, second, and third section define the Product Code. The combination all four sections define blibliSku unique code. TOQ-15130-00001 is your product code for Phone X TOQ-15130-00001-00001 is for Phone X Black TOQ-15130-00001-00002 for Phone X Red Note: Use this blibliSku/itemSku for any operation purpose, such as update, find detail, etc.  */
  "blibli-sku": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type UpdateProductByBlibliSkuV1Response = unknown

export interface UpdateProductItemDetailV1Request {
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type UpdateProductItemDetailV1Response = unknown

export class BlibliDeprecatedAPIApi {
  constructor(private client: BlibliClient) {}

  /**
   * airwayBillInformationV1
   * /mtaapi/api/businesspartner/v1/order/getAirwayBill (GET)
   */
  async airwayBillInformationV1(params: AirwayBillInformationV1Request, opts?: BlibliRequestOptions): Promise<AirwayBillInformationV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/order/getAirwayBill","query":["requestId","storeId","orderItemId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * categoryAttributeListV1
   * /mtaapi/api/businesspartner/v1/product/getCategoryAttributes (GET)
   */
  async categoryAttributeListV1(params: CategoryAttributeListV1Request, opts?: BlibliRequestOptions): Promise<CategoryAttributeListV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/product/getCategoryAttributes","query":["requestId","businessPartnerCode","categoryCode","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * createProductV2
   * /mtaapi/api/businesspartner/v2/product/createProduct (POST)
   */
  async createProductV2(params: CreateProductV2Request, opts?: BlibliRequestOptions): Promise<CreateProductV2Response> {
    return this.client.request({"method":"POST","path":"/mtaapi/api/businesspartner/v2/product/createProduct","query":["requestId","username","businessPartnerCode","channelId","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * downloadShippingLabelV1
   * /mtaapi/api/businesspartner/v1/order/downloadShippingLabel (GET)
   */
  async downloadShippingLabelV1(params: DownloadShippingLabelV1Request, opts?: BlibliRequestOptions): Promise<DownloadShippingLabelV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/order/downloadShippingLabel","query":["requestId","storeId","orderItemId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * fulfillRegularV1
   * /mtaapi/api/businesspartner/v1/order/fulfillRegular (POST)
   */
  async fulfillRegularV1(params: FulfillRegularV1Request, opts?: BlibliRequestOptions): Promise<FulfillRegularV1Response> {
    return this.client.request({"method":"POST","path":"/mtaapi/api/businesspartner/v1/order/fulfillRegular","query":["requestId","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * orderDetailV1
   * /mtaapi/api/businesspartner/v1/order/orderDetail (GET)
   */
  async orderDetailV1(params: OrderDetailV1Request, opts?: BlibliRequestOptions): Promise<OrderDetailV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/order/orderDetail","query":["requestId","storeId","orderNo","orderItemNo","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * orderListV1
   * /mtaapi/api/businesspartner/v1/order/orderList (GET)
   */
  async orderListV1(params: OrderListV1Request, opts?: BlibliRequestOptions): Promise<OrderListV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/order/orderList","query":["requestId","storeId","businessPartnerCode","channelId","productTypeCode"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * partialFulfillV1
   * /mtaapi/api/businesspartner/v1/order/partialFulfill (POST)
   */
  async partialFulfillV1(params: PartialFulfillV1Request, opts?: BlibliRequestOptions): Promise<PartialFulfillV1Response> {
    return this.client.request({"method":"POST","path":"/mtaapi/api/businesspartner/v1/order/partialFulfill","query":["requestId","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * pickupPointDetailV1
   * /mtaapi/api/businesspartner/v1/product/getPickupPointDetail (GET)
   */
  async pickupPointDetailV1(params: PickupPointDetailV1Request, opts?: BlibliRequestOptions): Promise<PickupPointDetailV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/product/getPickupPointDetail","query":["requestId","businessPartnerCode","channelId","page","size"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * pickupPointListV1
   * /mtaapi/api/businesspartner/v1/product/getPickupPoint (GET)
   */
  async pickupPointListV1(params: PickupPointListV1Request, opts?: BlibliRequestOptions): Promise<PickupPointListV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/product/getPickupPoint","query":["businessPartnerCode","channelId","page","size"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * productDetailV1
   * /mtaapi/api/businesspartner/v1/product/detailProduct (GET)
   */
  async productDetailV1(params: ProductDetailV1Request, opts?: BlibliRequestOptions): Promise<ProductDetailV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/product/detailProduct","query":["requestId","businessPartnerCode","gdnSku","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * productHistoryV1
   * /mtaapi/api/businesspartner/v1/product/history (GET)
   */
  async productHistoryV1(params: ProductHistoryV1Request, opts?: BlibliRequestOptions): Promise<ProductHistoryV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/product/history","query":["requestId","businessPartnerCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * productListV1
   * /mtaapi/api/businesspartner/v1/product/getProductSummary (GET)
   */
  async productListV1(params: ProductListV1Request, opts?: BlibliRequestOptions): Promise<ProductListV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/product/getProductSummary","query":["requestId","businessPartnerCode","storeId","channelId","gdnSku"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * productListV2
   * /mtaapi/api/businesspartner/v2/product/getProductList (POST)
   */
  async productListV2(params: ProductListV2Request, opts?: BlibliRequestOptions): Promise<ProductListV2Response> {
    return this.client.request({"method":"POST","path":"/mtaapi/api/businesspartner/v2/product/getProductList","query":["requestId","businessPartnerCode","username","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * queueStatusV1
   * /mtaapi/api/businesspartner/v1/feed/status (GET)
   */
  async queueStatusV1(params: QueueStatusV1Request, opts?: BlibliRequestOptions): Promise<QueueStatusV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/feed/status","query":["requestId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * rejectedProductListByMerchantSkuV2
   * /mtaapi/api/businesspartner/v2/product/rejectedProductByMerchantSku (GET)
   */
  async rejectedProductListByMerchantSkuV2(params: RejectedProductListByMerchantSkuV2Request, opts?: BlibliRequestOptions): Promise<RejectedProductListByMerchantSkuV2Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v2/product/rejectedProductByMerchantSku","query":["requestId","businessPartnerCode","merchantSku","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * rejectedProductListV1
   * /mtaapi/api/businesspartner/v1/product/rejectedProduct (GET)
   */
  async rejectedProductListV1(params: RejectedProductListV1Request, opts?: BlibliRequestOptions): Promise<RejectedProductListV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/product/rejectedProduct","query":["requestId","businessPartnerCode","channelId","page","size"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * reviseProductSubmissionV1
   * /seller/v1/product-submissions/MTA-0309773 (POST)
   */
  async reviseProductSubmissionV1(params: ReviseProductSubmissionV1Request, opts?: BlibliRequestOptions): Promise<ReviseProductSubmissionV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/product-submissions/MTA-0309773","query":["product-code","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * settleOrderV1
   * /mtaapi/api/businesspartner/v1/order/settleOrder (POST)
   */
  async settleOrderV1(params: SettleOrderV1Request, opts?: BlibliRequestOptions): Promise<SettleOrderV1Response> {
    return this.client.request({"method":"POST","path":"/mtaapi/api/businesspartner/v1/order/settleOrder","query":["requestId","storeId","businessPartnerCode","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * unarchiveProductV1
   * /mtaapi/api/businesspartner/v1/product/unarchive (POST)
   */
  async unarchiveProductV1(params: UnarchiveProductV1Request, opts?: BlibliRequestOptions): Promise<UnarchiveProductV1Response> {
    return this.client.request({"method":"POST","path":"/mtaapi/api/businesspartner/v1/product/unarchive","query":["requestId","businessPartnerCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updateDropshipAwbV1
   * /mtaapi/api/businesspartner/v1/order/updateDropshipAwb (GET)
   */
  async updateDropshipAwbV1(params: UpdateDropshipAwbV1Request, opts?: BlibliRequestOptions): Promise<UpdateDropshipAwbV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/order/updateDropshipAwb","query":["requestId","storeId","businessPartnerCode","channelId","orderNo"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updateProductByBlibliSkuV1
   * /mtaapi/api/businesspartner/v1/products/TOQ-15130-00001-00001 (PATCH)
   */
  async updateProductByBlibliSkuV1(params: UpdateProductByBlibliSkuV1Request, opts?: BlibliRequestOptions): Promise<UpdateProductByBlibliSkuV1Response> {
    return this.client.request({"method":"PATCH","path":"/mtaapi/api/businesspartner/v1/products/TOQ-15130-00001-00001","query":["blibli-sku","requestId","businessPartnerCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updateProductItemDetailV1
   * /mtaapi/api/businesspartner/v1/product/updateDetailProduct (POST)
   */
  async updateProductItemDetailV1(params: UpdateProductItemDetailV1Request, opts?: BlibliRequestOptions): Promise<UpdateProductItemDetailV1Response> {
    return this.client.request({"method":"POST","path":"/mtaapi/api/businesspartner/v1/product/updateDetailProduct","query":["channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }
}
