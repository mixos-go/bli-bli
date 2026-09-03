---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Order
api_name: settleBigProductOrderV2
url: "https://seller-api.blibli.com/docs/services/66/operations/settleBigProductOrderV2"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:34"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 486
reading_time: 2 min
---



# Settle Big Product Order V2

### Overview

API Version

POSTCopy

Requirement

Require a valid packageId on the path parameter that has been obtained after you hit POST Create Package V1 .

Expectation

By using this API, sellers are able to confirm when the package is delivered and handed to the customer. But the order status (D) will be updated after the customer confirm the order through their account or after two days since the delivery day have passed.

Validation

1. There should be at least 1 item that has BP Status
2. Order type of the related packageId should be Big Product
3. Delivered Date of the related order should be after the order creation date

Limitation

5 requests in a day per Package ID.

This API will help you to settle the Big Product order. We highly suggest you to subscribe Webhook Order Status - Delivered so that you can be notified if there is any order has been confirmed by the customer and the status updated to be Delivered (D). Learn more on Big Product Fulfillment Flow page.

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/orders/shipping-by-seller/10025702/mark-as-delivered

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
| package-id | number | 10025702 | Yes | Unique package ID |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
