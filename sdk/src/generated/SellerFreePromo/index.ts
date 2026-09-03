// AUTO-GENERATED from Blibli Seller API reference docs (references/api/Seller Free Promo).
// Do not edit by hand; run `npm run generate` in sdk/.

import { BlibliClient } from '../../client'
import { BlibliRequestOptions } from '../../types'

export interface CreateFreePromoV1Request {
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

export type CreateFreePromoV1Response = unknown

export class BlibliSellerFreePromoApi {
  constructor(private client: BlibliClient) {}

  /**
   * createFreePromoV1
   * /seller/v1/promos/free-promos/ (POST)
   */
  async createFreePromoV1(params: CreateFreePromoV1Request, opts?: BlibliRequestOptions): Promise<CreateFreePromoV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/promos/free-promos/","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }
}
