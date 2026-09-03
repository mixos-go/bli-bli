---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Product
api_name: updateBulkProductV1
url: "https://seller-api.blibli.com/docs/services/66/operations/updateBulkProductV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:30"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 996
reading_time: 4 min
---



# Update Bulk Product V1

### Overview

API Version

POSTCopy

Previously, this API was named as POST Update Product Item Summary V1.

Requirement

1. Require `gdnSku` code
2. All the fields are optional, but make sure that you put the field and its value that is expected to be updated correctly
3. If the seller send the price field, they need to also send the salePrice field, vice versa.
4. For the stock field update, Blibli system using delta stock amount to be calculated with the stock quantity
5. For the exactStock field update, you need to input the exact expected value.
6. The product is neither archived nor in suspended state
7. If you wished to update the wholesale information then you should include the price value in the request body. If you did not send the price value, then you will found your queue without any history.

Expectation

1. Asynchronous API. You can hit this API with high throughput. Compatible to perform bulk data request.
2. Able to update the product item/variant
3. Able to update the product stock using exactStock field by input the exact expected value OR using stock field by input the delta stock value.
4. This API works asynchronously
5. The updated value of displayable will always follow the value of buyable whether the buyable is updated or not.
6. When success = true, it means your request has successfully got into the queue, but not executed yet (it can be checked using API Queue Feed Detail)
7. If these following issues found in all SKUs on the request body, then the system will return an error.: The product is ARCHIVED. The product is being taken down that is caused by faulty image.

Validation

1. Error message will be appeared when there is found duplicate SKU.
2. The product update will be failed if the product is ARCHIVED.
3. User could not update the archived product and product with enableEdit = false . If there is found any product with these conditions, it will return a warning message with specific information.
4. The product update will also be failed if the product is being taken down because the faulty image.
5. If the updated field is only stock (which use a delta stock amount) and it contains value 0 , then system will return a warning message and ignore the update request.
6. If the updated field is stock and also other fields, and found that the value of stock is 0, then system will only process to the other fields and ignore the stock update.
7. Both stock and exactStock fields cannot be sent at the same time, you need to send only one of them.
8. If the product is included on Blibli Promo (Campaign) or Flash Sale and the campaign status is REGISTERED or REVIEW_SKU, then Seller can only update the Product Price as long as the price changes following min-max allowed price range.

Campaign (REGULAR)/Flash Sale Price Update Validation

Blibli Promo has 2 types of promo. It could be Campaign (REGULAR) or Flash Sale. Below are the validation when updating the product`s price that is registered in Blibli Promo based on Promo timeline:

1. Product Registration During Product registration period, there is a difference when registering the product to the promo: Campaign (REGULAR): When the updated price is out of the current promo price range, then the update will succeed but the system will return a warning message. This action will make the product`s excluded from campaign (REGULAR) and in order to re-join the Campaign the product`s price need to be revised according to the campaign (REGULAR) price range. Flash Sale: When the updated price is out of the current promo price range, then the update will be failed.
2. Product Review When the product is on review for Campaign (REGULAR)/Flash Sale that has not started yet. The price can only be updated within the eligible promo price range.
3. Campaign (REGULAR)/Flash Sale is Live No price update is allowed when the product Campaign (REGULAR)/Flash Sale review has been finished and either it`s waiting the promo to be started or currently going.

The eligible promo price range can be find by using the GET Blibli Promo Detail V1 API .

Limitation

- Limited to 25 requests per minute per store.
- Limited to 100 gdnSkus for each request.

Learn more about updating bulk product flow on [Update Bulk Product Flow](https://blib.li/api-flow-update-bulk-product).

Next action:

- Check the updated product using GET Queue List V1 or GET Queue Detail V1
- You can also refer to Update Product Summary Flow

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/product/updateProduct

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
