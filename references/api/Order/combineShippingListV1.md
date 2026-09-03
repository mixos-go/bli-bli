---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Order
api_name: combineShippingListV1
url: "https://seller-api.blibli.com/docs/services/66/operations/combineShippingListV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:33"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 547
reading_time: 2 min
---



# Combine Shipping List V1

### Overview

API Version

GETCopy

Expectation

1. Give you some order items that eligible to be combined into 1 package. The result contains order items that have same Customer, Delivery Address and same Seller. For some cases, the order items cannot be combined due to special category (dangerous goods) or if the items comes from different Blibli warehouse (for consignment seller). The policy might be modified in the future, so for the baseline please refer to any items that returned by this API to be combined into 1 package.
2. Able to GET Combine Shipping list for Big Product.

Limitation

5 requests in a day per order item ID/number.

This API will help you to to fulfill the Regular Order and Big Product Order. Learn more about the fulfillment flow on Regular Order Fulfillment Flow and Big Product Fulfillment Flow page.

**Next action:**
The order item numbers that are returned on the response of this API can be used for:

- To support the POST Fulfill Regular Order V1 . The returned order item numbers of this API can be used to fulfill the order by input the order items into combineShipping field. So the package will contained all the eligible combined order items.
- To support the POST Fulfill Regular Order V2 to input the Package ID that contained order items that combined using POST Create Package V1 .

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/order/getCombineShipping

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
| businessPartnerCode | string | TOQ-15126 | Yes | Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
| orderItemNo | number | 25000109944 | Yes | Specified order item number |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
