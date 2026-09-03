---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Order
api_name: delayFulfillmentV1
url: "https://seller-api.blibli.com/docs/services/66/operations/delayFulfillmentV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:34"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 528
reading_time: 2 min
---



# Delay Fulfillment V1

### Overview

API Version

POSTCopy

Requirement

1. Require packageId in the request body. The package ID can be obtained from POST Create Package V1 or GET Order Detail V2 .
2. Require pickupPointCode in the request body. The pickup point code must belong to your store.
3. Require reason in the request body with valid values: High traffic order Weather conditions

Expectation

1. Synchronous API. This API is not intended to handle high throughput. Not compatible to perform bulk data request.
2. You will be able to delay the fulfillment of your order due to external conditions like traffic or weather.
3. Each delayed package gets +15 minutes extension to the fulfillment time.
4. Each packageId can only be delayed once. After being delayed, it cannot be delayed again.
5. The response will provide updated bookingTimestamp and autoCancelTimestamp along with remainingDelayCount .
6. If status is FAILED , then bookingTimestamp and autoCancelTimestamp will be null.

Validation

- This API can only be accessed by active Seller.
- The packageId must belong to your store.
- The pickupPointCode must belong to your store.

Limitation

15 delay triggers per day per store (shared limit with bulk delay functionality).

API raw string
POST\n\n\nTue Apr 07 10:30:00 WIB 2026\n/proxy/seller/v1/orders/delay-fulfillment

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
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
