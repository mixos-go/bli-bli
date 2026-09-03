// AUTO-GENERATED from Blibli Seller API reference docs (references/api/Product).
// Do not edit by hand; run `npm run generate` in sdk/.

import { BlibliClient } from '../../client'
import { BlibliRequestOptions } from '../../types'

export interface CategoryAttributesV2Request {
  /** This is path parameter . The value of this category code can be obtained by requesting the GET Category Tree V1 and select the lowest level of category code. By requesting this category code then you will get the detail of this category code on the response body.  */
  "category-code": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type CategoryAttributesV2Response = unknown

export interface CategoryV1Request {
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info  */
  "businessPartnerCode": string,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type CategoryV1Response = unknown

export interface AddImageActiveProductV1Body {
  "data"?: string,
  "variants"?: Array<{
    "blibliSku"?: string,
    "mainImage"?: boolean,
  }>,
  "allVariants"?: {
    "mainImage"?: boolean,
  },
}

export interface AddImageActiveProductV1Request {
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

export type AddImageActiveProductV1Response = unknown

export interface ArchiveProductV2Request {
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

export type ArchiveProductV2Response = unknown

export interface BrandListV2Request {
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

export type BrandListV2Response = unknown

export interface CreateProductV3Request {
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

export type CreateProductV3Response = unknown

export interface DeleteImageActiveProductV1Body {
  "path"?: string,
  "blibliSkus"?: Array<string>,
  "allVariants"?: boolean,
}

export interface DeleteImageActiveProductV1Request {
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

export type DeleteImageActiveProductV1Response = unknown

export interface ProductDetailV2Request {
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

export type ProductDetailV2Response = unknown

export interface ProductHistoryV2Request {
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

export type ProductHistoryV2Response = unknown

export interface ProductListV3Request {
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

export type ProductListV3Response = unknown

export interface ProductVariantPickupPointListV1Request {
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

export type ProductVariantPickupPointListV1Response = unknown

export interface ReviseProductSubmissionV2Request {
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

export type ReviseProductSubmissionV2Response = unknown

export interface SellerLogisticsV1Request {
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

export type SellerLogisticsV1Response = unknown

export interface SellerSkuLogisticsV1Request {
  /** The unique ID that generated by Blibli system that defines Product item or variant which owned by specific Seller. Pattern ID is xxx-xxxxx-xxxxx-xxxxx. The combination first and second section define the seller code. Combination first, second, and third section define the Product Code. The combination all four sections define blibliSku unique code. TOQ-15130-00001 is your product code for Phone X TOQ-15130-00001-00001 is for Phone X Black TOQ-15130-00001-00002 for Phone X Red Note: Use this blibliSku/itemSku for any operation purpose, such as update, find detail, etc.  */
  "blibli-sku": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type SellerSkuLogisticsV1Response = unknown

export interface UnarchiveProductV2Request {
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

export type UnarchiveProductV2Response = unknown

export interface UpdateBulkProductV1Request {
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
}

export type UpdateBulkProductV1Response = unknown

export interface UpdateImageActiveProductV1Request {
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

export type UpdateImageActiveProductV1Response = unknown

export interface UpdateProductDetailByProductSkuV2Request {
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

export type UpdateProductDetailByProductSkuV2Response = unknown

export interface UpdateProductStockByExactValueV1Request {
  /** The unique ID that generated by Blibli system that defines Product item or variant which owned by specific Seller. Pattern ID is xxx-xxxxx-xxxxx-xxxxx. The combination first and second section define the seller code. Combination first, second, and third section define the Product Code. The combination all four sections define blibliSku unique code. TOQ-15130-00001 is your product code for Phone X TOQ-15130-00001-00001 is for Phone X Black TOQ-15130-00001-00002 for Phone X Red Note: Use this blibliSku/itemSku for any operation purpose, such as update, find detail, etc.  */
  "blibli-sku": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
}

export type UpdateProductStockByExactValueV1Response = unknown

export interface UpdateProductVariantV1Request {
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

export type UpdateProductVariantV1Response = unknown

export interface UpdateSingleProductV2Request {
  /** The unique ID that generated by Blibli system that defines Product item or variant which owned by specific Seller. Pattern ID is xxx-xxxxx-xxxxx-xxxxx. The combination first and second section define the seller code. Combination first, second, and third section define the Product Code. The combination all four sections define blibliSku unique code. TOQ-15130-00001 is your product code for Phone X TOQ-15130-00001-00001 is for Phone X Black TOQ-15130-00001-00002 for Phone X Red Note: Use this blibliSku/itemSku for any operation purpose, such as update, find detail, etc.  */
  "blibli-sku": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
  /** Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name.  */
  "channelId": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
}

export type UpdateSingleProductV2Response = unknown

export interface WholesaleMinimumDiscountV1Request {
  /** Category Code  */
  "category-code": string,
  /** Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/.  */
  "requestId": string,
  /** Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info  */
  "storeCode": string,
  /** Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center  */
  "username": string,
  /** Store ID. This is the fixed value for Store ID managed by Blibli.  */
  "storeId": number,
}

export type WholesaleMinimumDiscountV1Response = unknown

export class BlibliProductApi {
  constructor(private client: BlibliClient) {}

  /**
   * CategoryAttributesV2
   * /seller/v1/categories/WA-M036969/attributes (GET)
   */
  async categoryAttributesV2(params: CategoryAttributesV2Request, opts?: BlibliRequestOptions): Promise<CategoryAttributesV2Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/categories/WA-M036969/attributes","query":["category-code","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * CategoryV1
   * /mtaapi/api/businesspartner/v1/product/getCategory (GET)
   */
  async categoryV1(params: CategoryV1Request, opts?: BlibliRequestOptions): Promise<CategoryV1Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v1/product/getCategory","query":["requestId","businessPartnerCode","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * addImageActiveProductV1
   * /seller/v1/products/TOK-60526-00061/images (POST)
   */
  async addImageActiveProductV1(params: AddImageActiveProductV1Request, body: AddImageActiveProductV1Body, opts?: BlibliRequestOptions): Promise<AddImageActiveProductV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/products/TOK-60526-00061/images","query":["product-sku","requestId","storeCode","username","storeId"],"pathParams":[],"body":["data","variants","allVariants"]}, { ...(params as unknown as Record<string, unknown>), ...(body as unknown as Record<string, unknown>) }, opts)
  }

  /**
   * archiveProductV2
   * /seller/v1/products/statuses/archive (POST)
   */
  async archiveProductV2(params: ArchiveProductV2Request, opts?: BlibliRequestOptions): Promise<ArchiveProductV2Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/products/statuses/archive","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * brandListV2
   * /mtaapi/api/businesspartner/v2/product/getBrands (GET)
   */
  async brandListV2(params: BrandListV2Request, opts?: BlibliRequestOptions): Promise<BrandListV2Response> {
    return this.client.request({"method":"GET","path":"/mtaapi/api/businesspartner/v2/product/getBrands","query":["requestId","businessPartnerCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * createProductV3
   * /seller/v1/products/async (POST)
   */
  async createProductV3(params: CreateProductV3Request, opts?: BlibliRequestOptions): Promise<CreateProductV3Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/products/async","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * deleteImageActiveProductV1
   * /seller/v1/products/TOK-60526-00061/images (DELETE)
   */
  async deleteImageActiveProductV1(params: DeleteImageActiveProductV1Request, body: DeleteImageActiveProductV1Body, opts?: BlibliRequestOptions): Promise<DeleteImageActiveProductV1Response> {
    return this.client.request({"method":"DELETE","path":"/seller/v1/products/TOK-60526-00061/images","query":["product-sku","requestId","storeCode","username","storeId"],"pathParams":[],"body":["path","blibliSkus","allVariants"]}, { ...(params as unknown as Record<string, unknown>), ...(body as unknown as Record<string, unknown>) }, opts)
  }

  /**
   * productDetailV2
   * /seller/v1/products/TOQ-15126-00411 (GET)
   */
  async productDetailV2(params: ProductDetailV2Request, opts?: BlibliRequestOptions): Promise<ProductDetailV2Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/products/TOQ-15126-00411","query":["product-sku","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * productHistoryV2
   * /seller/v1/products/TOQ-15126-00411/histories/filter (POST)
   */
  async productHistoryV2(params: ProductHistoryV2Request, opts?: BlibliRequestOptions): Promise<ProductHistoryV2Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/products/TOQ-15126-00411/histories/filter","query":["product-sku","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * productListV3
   * /seller/v1/products/filter** (POST)
   */
  async productListV3(params: ProductListV3Request, opts?: BlibliRequestOptions): Promise<ProductListV3Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/products/filter**","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * productVariantPickupPointListV1
   * /seller/v1/products/TOQ-15126-00411/variants/filter (POST)
   */
  async productVariantPickupPointListV1(params: ProductVariantPickupPointListV1Request, opts?: BlibliRequestOptions): Promise<ProductVariantPickupPointListV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/products/TOQ-15126-00411/variants/filter","query":["product-sku","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * reviseProductSubmissionV2
   * /seller/v1/products/TOK-60526-00061/revision (POST)
   */
  async reviseProductSubmissionV2(params: ReviseProductSubmissionV2Request, opts?: BlibliRequestOptions): Promise<ReviseProductSubmissionV2Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/products/TOK-60526-00061/revision","query":["product-sku","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * sellerLogisticsV1
   * /seller/v1/logistics (GET)
   */
  async sellerLogisticsV1(params: SellerLogisticsV1Request, opts?: BlibliRequestOptions): Promise<SellerLogisticsV1Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/logistics","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * sellerSkuLogisticsV1
   * /seller/v1/products/TOQ-15131-00564-00001/logistics (GET)
   */
  async sellerSkuLogisticsV1(params: SellerSkuLogisticsV1Request, opts?: BlibliRequestOptions): Promise<SellerSkuLogisticsV1Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/products/TOQ-15131-00564-00001/logistics","query":["blibli-sku","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * unarchiveProductV2
   * /seller/v1/products/statuses/unarchive (POST)
   */
  async unarchiveProductV2(params: UnarchiveProductV2Request, opts?: BlibliRequestOptions): Promise<UnarchiveProductV2Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/products/statuses/unarchive","query":["requestId","storeCode","username","storeId","channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updateBulkProductV1
   * /mtaapi/api/businesspartner/v1/product/updateProduct (POST)
   */
  async updateBulkProductV1(params: UpdateBulkProductV1Request, opts?: BlibliRequestOptions): Promise<UpdateBulkProductV1Response> {
    return this.client.request({"method":"POST","path":"/mtaapi/api/businesspartner/v1/product/updateProduct","query":["channelId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updateImageActiveProductV1
   * /seller/v1/products/TOK-60526-00061/images (PUT)
   */
  async updateImageActiveProductV1(params: UpdateImageActiveProductV1Request, opts?: BlibliRequestOptions): Promise<UpdateImageActiveProductV1Response> {
    return this.client.request({"method":"PUT","path":"/seller/v1/products/TOK-60526-00061/images","query":["product-sku","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updateProductDetailByProductSkuV2
   * /seller/v1/TOQ-15126-00411/detail (PUT)
   */
  async updateProductDetailByProductSkuV2(params: UpdateProductDetailByProductSkuV2Request, opts?: BlibliRequestOptions): Promise<UpdateProductDetailByProductSkuV2Response> {
    return this.client.request({"method":"PUT","path":"/seller/v1/TOQ-15126-00411/detail","query":["product-sku","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updateProductStockByExactValueV1
   * /seller/v1/products/TOQ-15130-00001-00001/stock (PUT)
   */
  async updateProductStockByExactValueV1(params: UpdateProductStockByExactValueV1Request, opts?: BlibliRequestOptions): Promise<UpdateProductStockByExactValueV1Response> {
    return this.client.request({"method":"PUT","path":"/seller/v1/products/TOQ-15130-00001-00001/stock","query":["blibli-sku","requestId","storeId","channelId","username"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updateProductVariantV1
   * /seller/v1/products/TOQ-15126-00411/variants (POST)
   */
  async updateProductVariantV1(params: UpdateProductVariantV1Request, opts?: BlibliRequestOptions): Promise<UpdateProductVariantV1Response> {
    return this.client.request({"method":"POST","path":"/seller/v1/products/TOQ-15126-00411/variants","query":["product-sku","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * updateSingleProductV2
   * /seller/v1/products/TOQ-15130-00001-00001 (PUT)
   */
  async updateSingleProductV2(params: UpdateSingleProductV2Request, opts?: BlibliRequestOptions): Promise<UpdateSingleProductV2Response> {
    return this.client.request({"method":"PUT","path":"/seller/v1/products/TOQ-15130-00001-00001","query":["blibli-sku","requestId","storeId","channelId","username"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }

  /**
   * wholesaleMinimumDiscountV1
   * /seller/v1/wholesale/PH-00003/minimum-discounts (GET)
   */
  async wholesaleMinimumDiscountV1(params: WholesaleMinimumDiscountV1Request, opts?: BlibliRequestOptions): Promise<WholesaleMinimumDiscountV1Response> {
    return this.client.request({"method":"GET","path":"/seller/v1/wholesale/PH-00003/minimum-discounts","query":["category-code","requestId","storeCode","username","storeId"],"pathParams":[],"body":[]}, params as unknown as Record<string, unknown>, opts)
  }
}
