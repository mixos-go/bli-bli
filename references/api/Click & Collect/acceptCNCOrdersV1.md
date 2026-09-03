---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Click & Collect
api_name: acceptCNCOrdersV1
url: "https://seller-api.blibli.com/docs/services/66/operations/acceptCNCOrdersV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:41"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 461
reading_time: 2 min
---



# Accept CNC Orders V1

### Overview

API Version

POSTCopy

Requirement:

1. Only for CNC Order
2. Requires a valid Package ID on the path parameter.

Expectation:

1. This API allows Clients to confirm the order that has been received by the store.
2. The order status will become BP and the Customers are welcome to grab the package on the specified store confirmed by showing the Settlement Code to the Cashier.
3. The system will automatically run the auto-accept if the seller did not accept the order in 2 hours.
4. If the system has run the auto accept, then this API will no longer be needed and the seller should immediately prepare the order. On the other hand the customers are allowed to pick up their order at the related store.
5. The Seller are allowed to custom the auto-accept time to Seller Care email (seller.care@blibli.com).

Limitation:
5 requests per day per Package ID.

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/orders/cnc/10025702/accept

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
