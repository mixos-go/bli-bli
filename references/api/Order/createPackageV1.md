---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Order
api_name: createPackageV1
url: "https://seller-api.blibli.com/docs/services/66/operations/createPackageV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:33"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 564
reading_time: 2 min
---



# Create Package V1

### Overview

API Version

POSTCopy

Requirement

1. Hit the GET Combine Shipping List V1 to see the multiple eligible items that can be combined into one package. This action is to avoid the split package.
2. Order that are able to be combined are the orders that bought by the same Customer with the same delivery address
3. This API will work when the current Order Status is FP, then you can hit Create Package API with several `orderItemNo` which obtained from Get Combine Shipping API
4. This API is used only for Regular and Big Product API

Expectation

1. Synchronous API. This API is not intended to handle high throughput. Not compatible to perform bulk data request.
2. Able to create package for Big Product type, at least input 1 order item that obtained from GET Combine Shipping List V1
3. Seller must send all the eligible order items (from GET Combine Shipping List V1 ) into one package. Otherwise, the order will be splitted and it will cost more for delivery. Especially for Big Product order type, this one cannot be splitted.
4. Following is the flow of create package:

Limitation

7200 requests in a day per Business Partner Code (Store code).

This API will help you to fulfill the Regular and Big Product Order. Learn more about this on Regular Order Fulfillment Flow and Big Product Fulfillment Flow page.

Next action: Once you got the packageId, then you need to fulfill the regular order using Fulfill Regular Order V2 .

To create package through the site, click Create Package button:

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/order/createPackage

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
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
| businessPartnerCode | string | TOQ-15126 | Yes | Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
