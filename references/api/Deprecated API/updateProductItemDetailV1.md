---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Deprecated API
api_name: updateProductItemDetailV1
url: "https://seller-api.blibli.com/docs/services/66/operations/updateProductItemDetailV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:43"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 661
reading_time: 3 min
---



# Update Product Item Detail V1

### Overview

API Version

POSTCopy

This API is deprecated, so it will no longer supported. Please use **Update Product Detail by Product SKU V2** instead.

Requirement

1. All the updatable items should be included on request body once it has any changes. Otherwise, then you can exclude from the request body. Except for merchantCode , itemSku , and productSku , those fields are mandatory and should be always included on request body.
2. The product is neither archived nor in suspended state
3. If Seller update the video URL with the invalid value, then its value will become a blank string after submit and the update of video URL will be failed. The blank string value of video URL will appeared when trying to get Product Detail or Product Submission.

Expectation

1. Asynchronous API. You can hit this API with high throughput. Not compatible to perform bulk data request.
2. This API make you able to have a single update of a product item/variant detail on the first index of productDetailRequest[0].items[0] , the updatable fields are: Product story Product item dimension without shipping weight Product pickup point merchantSku for current product item Product item buyable status
3. These fields will be updated to all variants if the Seller update the value of: Product name Product type Description Unique Selling Point Product dimension (length, width, height, weight) Item URL Descriptive attributes
4. If you are expecting to update other fields than all the mentioned above, you can use POST Update Bulk Product V1 API.
5. When success = true, it means your request has successfully got into the queue, but not executed yet (it can be checked using API Queue Feed Detail)
6. If the Seller update these following fields using this API, then the product will be reviewed by the internal team: Product Name. The product name is not updatable if current product has at least an order. Product description USP or Unique Selling Point Attributes, except for Brand and special attributes. The changes will be treated differently according to these two behaviors: For PRELIVE product will become inactive until the review has passed or rejected. For POSTLIVE product will keep active, unless the Blibli reviewer team reject the product. But the active order which made by the Customer before the update will keep processed by the system. More information about the PRELIVE and POSTLIVE product can be seen on the Terminologies page.

Limitation

25 requests per minute per store.

**Next action:**
Check the updated product using [GET Queue List V1](https://blib.li/sl-api-queue-list-v1) or [GET Queue Detail V1](https://blib.li/sl-api-queue-det-v1)

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/product/updateDetailProduct

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
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
