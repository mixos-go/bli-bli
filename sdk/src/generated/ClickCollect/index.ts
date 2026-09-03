// AUTO-GENERATED from Blibli Seller API reference docs (references/api/Click & Collect).
// Do not edit by hand; run `npm run generate` in sdk/.

import { BlibliClient } from '../../client'
import { BlibliRequestOptions } from '../../types'

export interface AcceptCNCOrdersV1Request {
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

export type AcceptCNCOrdersV1Response = unknown

export class BlibliClickCollectApi {
  constructor(private client: BlibliClient) {}

  /**
   * acceptCNCOrdersV1
   * /seller/v1/orders/cnc/10025702/accept (POST)
   */
  async acceptCNCOrdersV1(params: AcceptCNCOrdersV1Request, opts?: BlibliRequestOptions): Promise<AcceptCNCOrdersV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/orders/cnc/10025702/accept","query":["package-id","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }
}
