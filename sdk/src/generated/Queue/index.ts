// AUTO-GENERATED from Blibli Seller API reference docs (references/api/Queue).
// Do not edit by hand; run `npm run generate` in sdk/.

import { BlibliClient } from '../../client'
import { BlibliRequestOptions } from '../../types'

export interface QueueDetailV1Request {
  /** Parameter field containing queue ID that can be obtained by using Queue List API or by using value of requestId from the response body after performing Create Product, Update Product, Revise Product, Archive and Unarchive Product. Sample of 26 char queueId: 01HQHSC752CZSM5Q2AS3DDGXBZ  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
  /** This field parameter will be only used to retrieve the queue histories for queue that contains 26 characters of queue ID . Field parameter to set the response page number in queue history. This field is not mandatory. If the value is null, then the default value is 0.  */
  "page"?: number,
  /** Field parameter to set the queue histories response size. This field parameter will be only used to retrieve the queue histories for queue that contains 26 characters of queue ID . If the value is null, the system will return all the queue histories. If the value is 0, the system will return the response body without queueHistory. We recommend you to use this if you do not need the queueHistory. This will make the system send the response faster. Max size value is 100.  */
  "size"?: number,
}

export type QueueDetailV1Response = unknown

export interface QueueListV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Filter queue feed by exact date  */
  "queueDate": string,
  /** Filter queue feed by queue feed action for following actions: createProduct, createProductV2, updateProduct, updateDetailProduct.  */
  "queueAction"?: string,
  /** Field parameter to filter the status of queue. IN_PROGRESS means the queue ID of the related action is still waiting in the queue. FINISHED means the action is already eligible to be reviewed by the Blibli Internal Team.  */
  "status"?: string,
}

export type QueueListV1Response = unknown

export class BlibliQueueApi {
  constructor(private client: BlibliClient) {}

  /**
   * queueDetailV1
   * /mtaapi/api/businesspartner/v1/feed/detail (GET)
   */
  async queueDetailV1(params: QueueDetailV1Request, opts?: BlibliRequestOptions): Promise<QueueDetailV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/feed/detail","query":["requestId","businessPartnerCode","channelId","page","size"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * queueListV1
   * /mtaapi/api/businesspartner/v1/feed/list (GET)
   */
  async queueListV1(params: QueueListV1Request, opts?: BlibliRequestOptions): Promise<QueueListV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/feed/list","query":["requestId","businessPartnerCode","queueDate","queueAction","status"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }
}
