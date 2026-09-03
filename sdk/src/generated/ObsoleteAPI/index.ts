// AUTO-GENERATED from Blibli Seller API reference docs (references/api/Obsolete API).
// Do not edit by hand; run `npm run generate` in sdk/.

import { BlibliClient } from '../../client'
import { BlibliRequestOptions } from '../../types'

export interface CreateProductDiscussionAnswerV1Request {
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

export type CreateProductDiscussionAnswerV1Response = unknown

export interface GetProductDiscussionAnswerV1Request {
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

export type GetProductDiscussionAnswerV1Response = unknown

export interface ProductQuestionListV1Request {
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

export type ProductQuestionListV1Response = unknown

export interface ProductSubmissionDetailV1Request {
  /** Path variable of Product SKU. A unique code that used to identify a Blibli product level 3.  */
  "product-sku": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type ProductSubmissionDetailV1Response = unknown

export interface ProductSubmissionListV1Request {
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

export type ProductSubmissionListV1Response = unknown

export class BlibliObsoleteAPIApi {
  constructor(private client: BlibliClient) {}

  /**
   * createProductDiscussionAnswerV1
   * /mtaapi/api/businesspartner/v1/product/discussion/answers/DE742E417172904495CA25B2C595A0E89E4877D30B98A0CEB2BBD38E054FC5BF (POST)
   */
  async createProductDiscussionAnswerV1(params: CreateProductDiscussionAnswerV1Request, opts?: BlibliRequestOptions): Promise<CreateProductDiscussionAnswerV1Response> {
    return this.client.request({"method":"POST","path":"/mtaapi/api/businesspartner/v1/product/discussion/answers/DE742E417172904495CA25B2C595A0E89E4877D30B98A0CEB2BBD38E054FC5BF","query":["questionCode","requestId","businessPartnerCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * getProductDiscussionAnswerV1
   * /mtaapi/api/businesspartner/v1/product/discussion/answers/DE742E417172904495CA25B2C595A0E89E4877D30B98A0CEB2BBD38E054FC5BF (GET)
   */
  async getProductDiscussionAnswerV1(params: GetProductDiscussionAnswerV1Request, opts?: BlibliRequestOptions): Promise<GetProductDiscussionAnswerV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/product/discussion/answers/DE742E417172904495CA25B2C595A0E89E4877D30B98A0CEB2BBD38E054FC5BF","query":["questionCode","requestId","businessPartnerCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * productQuestionListV1
   * /mtaapi/api/businesspartner/v1/product/discussion/questions (GET)
   */
  async productQuestionListV1(params: ProductQuestionListV1Request, opts?: BlibliRequestOptions): Promise<ProductQuestionListV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/product/discussion/questions","query":["requestId","businessPartnerCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * productSubmissionDetailV1
   * /seller/v1/product-submissions/TOQ-15130-00001 (GET)
   */
  async productSubmissionDetailV1(params: ProductSubmissionDetailV1Request, opts?: BlibliRequestOptions): Promise<ProductSubmissionDetailV1Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/product-submissions/TOQ-15130-00001","query":["product-sku","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * productSubmissionListV1
   * /seller/v1/product-submissions/filter (POST)
   */
  async productSubmissionListV1(params: ProductSubmissionListV1Request, opts?: BlibliRequestOptions): Promise<ProductSubmissionListV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/product-submissions/filter","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }
}
