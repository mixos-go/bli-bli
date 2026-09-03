// AUTO-GENERATED from Blibli Seller API reference docs (references/api/Order Return).
// Do not edit by hand; run `npm run generate` in sdk/.

import { BlibliClient } from '../../client'
import { BlibliRequestOptions } from '../../types'

export interface ReturnedOrderDetailV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Input of returnId from Returned Order List API  */
  "rmaId": number,
  /** Specified order number  */
  "orderNo": number,
  /** Specified order item number  */
  "orderItemNo": number,
}

export type ReturnedOrderDetailV1Response = unknown

export interface ReturnedOrderListV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
  /** Filter response by order number or order item number.  */
  "orderIdOrItemId"?: number,
  /** Filter response by return creation date.  */
  "returDate"?: number,
}

export type ReturnedOrderListV1Response = unknown

export class BlibliOrderReturnApi {
  constructor(private client: BlibliClient) {}

  /**
   * returnedOrderDetailV1
   * /mtaapi/api/businesspartner/v1/order/getReturnedOrderDetail (GET)
   */
  async returnedOrderDetailV1(params: ReturnedOrderDetailV1Request, opts?: BlibliRequestOptions): Promise<ReturnedOrderDetailV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/order/getReturnedOrderDetail","query":["requestId","businessPartnerCode","rmaId","orderNo","orderItemNo"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * returnedOrderListV1
   * /mtaapi/api/businesspartner/v1/order/getReturnedOrderSummary (GET)
   */
  async returnedOrderListV1(params: ReturnedOrderListV1Request, opts?: BlibliRequestOptions): Promise<ReturnedOrderListV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/order/getReturnedOrderSummary","query":["requestId","businessPartnerCode","channelId","orderIdOrItemId","returDate"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }
}
