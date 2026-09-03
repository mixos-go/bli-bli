---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Deprecated API
api_name: fulfillRegularV1
url: "https://seller-api.blibli.com/docs/services/66/operations/fulfillRegularV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:43"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 507
reading_time: 2 min
---



# Fulfill Regular Order V1

### Overview

API Version

POSTCopy

This API is deprecated, so it will no longer supported. Please use **Fulfill Regular Order V2** instead.

Requirement

1. Hit the GET Combine Shipping List V1 to see the eligible items that can be combined into one package. This action is to avoid multiple split packages. You can also refer to this page to see more information about Combine Shipping advantages.
2. Input the order item numbers that are returned from the response of GET Combine Shipping List V1 on the request body inside the combineShipping field.

Expectation

1. You will be able to perform Regular Order fulfillment
2. You also able to combine shipping process with specific Order Item
3. Ideally, for Dropship type (JNE Cashless and JNE JOB only), the order status will be automatically updated once the order item has sent to logistic service. Then your order will be updated to be (PU) . In case your order status is not updated to be (PU) until 12 hours before the autocancel time, then you have to send a request using this API to update the status.

Limitation

5 requests in a day per order item ID/number.

**Next action:**

After the package has been fulfilled, please make sure to hit the GET Order Detail V1 to see the latest value of packageId that might be changed by the system.

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/order/fulfillRegular

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
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
