// AUTO-GENERATED from Blibli Seller API reference docs (references/api/Order).
// Do not edit by hand; run `npm run generate` in sdk/.

import { BlibliClient } from '../../client'
import { BlibliRequestOptions } from '../../types'

export interface CancelPartialOrderV2Request {
  /** Order item number (ID)  */
  "order-item-id": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type CancelPartialOrderV2Response = unknown

export interface CancellationReasonV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type CancellationReasonV1Response = unknown

export interface CombineShippingListV1Request {
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Specified order item number  */
  "orderItemNo": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type CombineShippingListV1Response = unknown

export interface CreatePackageV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type CreatePackageV1Response = unknown

export interface DelayFulfillmentBulkV1Request {
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

export type DelayFulfillmentBulkV1Response = unknown

export interface DelayFulfillmentV1Request {
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

export type DelayFulfillmentV1Response = unknown

export interface DownloadAirwayBillV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Specified order item number  */
  "orderItemNo": number,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type DownloadAirwayBillV1Response = unknown

export interface DownloadShippingLabelV2Request {
  /** Unique package ID  */
  "package-id": number,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
}

export type DownloadShippingLabelV2Response = unknown

export interface FulfillBigProductV2Request {
  /** Unique package ID  */
  "package-id": number,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type FulfillBigProductV2Response = unknown

export interface FulfillBopisV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type FulfillBopisV1Response = unknown

export interface FulfillRegularV2Request {
  /** Unique package ID  */
  "package-id": number,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
}

export type FulfillRegularV2Response = unknown

export interface InjectVoucherToOrderItemV1Request {
  /** Order item number (ID)  */
  "order-item-id": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
}

export type InjectVoucherToOrderItemV1Response = unknown

export interface OrderDetailV2Request {
  /** Order item number (ID)  */
  "order-item-id": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
}

export type OrderDetailV2Response = unknown

export interface OrderListV2Request {
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type OrderListV2Response = unknown

export interface SettleBigProductOrderV2Request {
  /** Unique package ID  */
  "package-id": number,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type SettleBigProductOrderV2Response = unknown

export interface SettleBopisOrderV2Request {
  /** Unique package ID  */
  "package-id": number,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type SettleBopisOrderV2Response = unknown

export interface UpdateDropshipAwbV2Body {
  "awbNo"?: string,
}

export interface UpdateDropshipAwbV2Request {
  /** Unique package ID  */
  "package-id": number,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
}

export type UpdateDropshipAwbV2Response = unknown

export class BlibliOrderApi {
  constructor(private client: BlibliClient) {}

  /**
   * cancelPartialOrderV2
   * /seller/v1/orders/items/25000025943/cancellations (POST)
   */
  async cancelPartialOrderV2(params: CancelPartialOrderV2Request, opts?: BlibliRequestOptions): Promise<CancelPartialOrderV2Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/orders/items/25000025943/cancellations","query":["order-item-id","storeCode","username","requestId","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * cancellationReasonV1
   * /seller/v1/orders/items/cancellations/reasons (GET)
   */
  async cancellationReasonV1(params: CancellationReasonV1Request, opts?: BlibliRequestOptions): Promise<CancellationReasonV1Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/orders/items/cancellations/reasons","query":["requestId","username","storeId","storeCode","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * combineShippingListV1
   * /mtaapi/api/businesspartner/v1/order/getCombineShipping (GET)
   */
  async combineShippingListV1(params: CombineShippingListV1Request, opts?: BlibliRequestOptions): Promise<CombineShippingListV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/order/getCombineShipping","query":["businessPartnerCode","requestId","storeId","orderItemNo","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * createPackageV1
   * /mtaapi/api/businesspartner/v1/order/createPackage (POST)
   */
  async createPackageV1(params: CreatePackageV1Request, opts?: BlibliRequestOptions): Promise<CreatePackageV1Response> {
    return this.client.request({"method":"POST","path":"/mtaapi/api/businesspartner/v1/order/createPackage","query":["requestId","storeId","businessPartnerCode","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * delayFulfillmentBulkV1
   * /proxy/seller/v1/orders/delay-fulfillment/bulk (POST)
   */
  async delayFulfillmentBulkV1(params: DelayFulfillmentBulkV1Request, opts?: BlibliRequestOptions): Promise<DelayFulfillmentBulkV1Response> {
    return this.client.request({"method":"POST","path":"/proxy/seller/v1/orders/delay-fulfillment/bulk","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * delayFulfillmentV1
   * /proxy/seller/v1/orders/delay-fulfillment (POST)
   */
  async delayFulfillmentV1(params: DelayFulfillmentV1Request, opts?: BlibliRequestOptions): Promise<DelayFulfillmentV1Response> {
    return this.client.request({"method":"POST","path":"/proxy/seller/v1/orders/delay-fulfillment","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * downloadAirwayBillV1
   * /mtaapi/api/businesspartner/v1/order/downloadAirwayBill (GET)
   */
  async downloadAirwayBillV1(params: DownloadAirwayBillV1Request, opts?: BlibliRequestOptions): Promise<DownloadAirwayBillV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/order/downloadAirwayBill","query":["requestId","storeId","orderItemNo","businessPartnerCode","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * downloadShippingLabelV2
   * /seller/v1/orders/10025702/shippingLabel (GET)
   */
  async downloadShippingLabelV2(params: DownloadShippingLabelV2Request, opts?: BlibliRequestOptions): Promise<DownloadShippingLabelV2Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/orders/10025702/shippingLabel","query":["package-id","requestId","username","storeId","storeCode"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * fulfillBigProductV2
   * /seller/v1/orders/shipping-by-seller/10025702/ready-to-ship (POST)
   */
  async fulfillBigProductV2(params: FulfillBigProductV2Request, opts?: BlibliRequestOptions): Promise<FulfillBigProductV2Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/orders/shipping-by-seller/10025702/ready-to-ship","query":["package-id","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * fulfillBopisV1
   * /mtaapi/api/businesspartner/v1/order/fulfillBopis (POST)
   */
  async fulfillBopisV1(params: FulfillBopisV1Request, opts?: BlibliRequestOptions): Promise<FulfillBopisV1Response> {
    return this.client.request({"method":"POST","path":"/mtaapi/api/businesspartner/v1/order/fulfillBopis","query":["requestId","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * fulfillRegularV2
   * /seller/v1/orders/regular/10025702/fulfill (POST)
   */
  async fulfillRegularV2(params: FulfillRegularV2Request, opts?: BlibliRequestOptions): Promise<FulfillRegularV2Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/orders/regular/10025702/fulfill","query":["package-id","requestId","storeId","channelId","username"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * injectVoucherToOrderItemV1
   * /seller/v1/order-items/25000025943/vouchers (PUT)
   */
  async injectVoucherToOrderItemV1(params: InjectVoucherToOrderItemV1Request, opts?: BlibliRequestOptions): Promise<InjectVoucherToOrderItemV1Response> {
    return this.client.request({"method":"PUT","path":"/seller/v1/order-items/25000025943/vouchers","query":["order-item-id","requestId","username","storeId","storeCode"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * orderDetailV2
   * /seller/v1/orders/items/25000134053 (GET)
   */
  async orderDetailV2(params: OrderDetailV2Request, opts?: BlibliRequestOptions): Promise<OrderDetailV2Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/orders/items/25000134053","query":["order-item-id","requestId","username","storeId","storeCode"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * orderListV2
   * /seller/v1/orders/packages/filter (POST)
   */
  async orderListV2(params: OrderListV2Request, opts?: BlibliRequestOptions): Promise<OrderListV2Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/orders/packages/filter","query":["storeCode","username","requestId","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * settleBigProductOrderV2
   * /seller/v1/orders/shipping-by-seller/10025702/mark-as-delivered (POST)
   */
  async settleBigProductOrderV2(params: SettleBigProductOrderV2Request, opts?: BlibliRequestOptions): Promise<SettleBigProductOrderV2Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/orders/shipping-by-seller/10025702/mark-as-delivered","query":["package-id","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * settleBopisOrderV2
   * /seller/v1/orders/bopis/10025702/mark-as-delivered (POST)
   */
  async settleBopisOrderV2(params: SettleBopisOrderV2Request, opts?: BlibliRequestOptions): Promise<SettleBopisOrderV2Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/orders/bopis/10025702/mark-as-delivered","query":["package-id","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updateDropshipAwbV2
   * /seller/v1/orders/dropship/10025702 (PUT)
   */
  async updateDropshipAwbV2(params: UpdateDropshipAwbV2Request, body: UpdateDropshipAwbV2Body, opts?: BlibliRequestOptions): Promise<UpdateDropshipAwbV2Response> {
    return this.client.request({"method":"PUT","path":"/seller/v1/orders/dropship/10025702","query":["package-id","requestId","username","storeId","storeCode"],"pathParams":[],"body":["awbNo"]}, { ...(params as unknown as Record<string, unknown>), ...(body as unknown as Record<string, unknown>) }, opts)
  }
}
