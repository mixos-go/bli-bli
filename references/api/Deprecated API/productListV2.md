---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Deprecated API
api_name: productListV2
url: "https://seller-api.blibli.com/docs/services/66/operations/productListV2"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:43"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 750
reading_time: 3 min
---



# Product List V2

### Overview

API Version

POSTCopy

As per 14 Feb 2023 this API is deprecated and will become obsolete in the near future. For the substitution, we currently have **POST Product List V3**.

Requirement

1. Maximum value for `merchantSkus` is 50
2. Maximum value for `size` is 100

Expectation

1. Get list of active products for each variant by a specific merchantSkus
2. The product data contains several layers, for example: L1 is master data product, using product code as identifier. Ex: MTA-7153826. L2 is master data product variant, using product item code as identifier. Ex: MTA-0420409-00001. L3 is master data product that owned by the Store, using product SKU as identifier. Ex: TOQ-60526-00001. L4 is master data product variant that owned the Store, using Blibli SKU as identifier. Ex: TOQ-60526-00001-00001 L1 and L2 needs to be saved for product submission and revision process. L3 and L4 is for operational purposes after the product is live, such as update stock, update price, etc. So, Sellers do not need to save the L1 and L2 identifier once the product has gone live.

Validation for faulty image

1. Image should not contains: pornography, pornography, blurry part, text, and watermarks.
2. If the image is suspected of containing any of those aforementioned, then it will be considered as a faulty image and will be taken down temporarily.
3. When a product is being taken down because of the faulty image, it means the product is being reviewed by internal team and it will not able to be updated, archived, or unarchived.
4. When the product is being reviewed, it will not be buyable and displayable until the review has done.
5. If the product is Approved after the review has been finished, then the buyable and displayable status will be back to the latest status before it was on review.
6. If the product is Rejected after the review, then it will be removed.
7. To get the notification about these status updates, it is highly suggested to implement the Webhook Service for Product Item Updates. Please contact Blibli Seller API team to use this feature.

This API will help you to get the product list before you edit the product using the [POST Update Bulk Product V1](https://blib.li/sl-api-upd-bulk-prod-v1) or [POST Update Product Item Detail V1](https://blib.li/sl-api-upd-prod-item-det-v1), you can learn more about this on [Update Bulk Product Flow](https://blib.li/api-flow-update-bulk-product) or [Update Product Detail Flow](https://blib.li/api-flow-product-detail).
Also to help you check the product whether it has already activated or not, you can learn more about the flow of create product through [POST Create Product V3](https://seller-api.blibli.com/docs/services/66/operations/createProductV3) page.

The listed product can be found through the [Product List](https://seller.blibli.com/external/product/active/all) page.
Related page![image](https://www.static-src.com/siva/asset//09_2022/SI-ProdList.png)

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v2/product/getProductList

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Basic bXRhLWFwaS10b3EtMTUxMzAtNGU1NGU6bXRhL= | Yes | Basic {Encoded basic auth} |  |
| Accept | string | application/json | Yes | Defines the message format that is expected by the client |  |
| Content-Type | string | application/json | Yes | Content type on header. Defines the message format of the request body that is sent by the client. |  |
| Api-Seller-Key | string | FABC9D185ACAC239C2DE08B40FBDE475FE86539545E9A11A8BC8F35FCC664695 | Yes | Generated from MTA by Seller |  |
| Signature | string | Nswu+xOcVwT/T9Fb3CJJXUKzUJlIDxL+ef0DMIuHWc0= | No | This is an additional security layer. When the user set Signature Key in the Blibli Seller Center , then this field and Signature-Time header parameter will became mandatory. Read more about signature here . |  |

### Parameter

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| businessPartnerCode | string | TOQ-15126 | Yes | Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
