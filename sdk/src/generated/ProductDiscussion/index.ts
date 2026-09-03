// AUTO-GENERATED from Blibli Seller API reference docs (references/api/Product Discussion).
// Do not edit by hand; run `npm run generate` in sdk/.

import { BlibliClient } from '../../client'
import { BlibliRequestOptions } from '../../types'

export interface ReportProductQuestionV1Request {
  /** Unique code which define the specific question  */
  "questionCode": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type ReportProductQuestionV1Response = unknown

export class BlibliProductDiscussionApi {
  constructor(private client: BlibliClient) {}

  /**
   * reportProductQuestionV1
   * /mtaapi/api/businesspartner/v1/product/discussion/questions/DE742E417172904495CA25B2C595A0E89E4877D30B98A0CEB2BBD38E054FC5BF (PUT)
   */
  async reportProductQuestionV1(params: ReportProductQuestionV1Request, opts?: BlibliRequestOptions): Promise<ReportProductQuestionV1Response> {
    return this.client.request({"method":"PUT","path":"/mtaapi/api/businesspartner/v1/product/discussion/questions/DE742E417172904495CA25B2C595A0E89E4877D30B98A0CEB2BBD38E054FC5BF","query":["questionCode","requestId","businessPartnerCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }
}
