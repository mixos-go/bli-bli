---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Order
api_name: fulfillRegularV2
url: "https://seller-api.blibli.com/docs/services/66/operations/fulfillRegularV2"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:33"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 529
reading_time: 2 min
---



# Fulfill Regular Order V2

### Overview

API Version

POSTCopy

Requirement

1. Require `packageId` on path
2. Please make sure the packageId value that inputted is the result of GET Create Package V1 that has been combined by using GET Combine Shipping List V1 .
3. If the Seller is a Dropship Regular seller, then it requires `awbNo` on request body, otherwise you can leave it blank.

Expectation

1. Synchronous API. This API is not intended to handle high throughput. Not compatible to perform bulk data request.
2. You will be able to perform Regular Order fulfillment. Your order is ready to deliver. If your store type is PICKUP, then Blibli courier will come to your pickup location.
3. The regular order you wished to fulfill limited to be 5 requests per day for each Package ID.

Validation

- Seller with DROPSHIP delivery type can only fulfill the order manually using this API within 12 hours before the autocancel time.
- The cashlessHandover and cashlessStatusUpdateSla can be found in the response of GET Order Detail V1 .

Limitation

5 requests in a day per Package ID.

To learn more about the flow of Regular Order fulfillment, you can learn more on Regular Order Fulfillment Flow page.

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/orders/regular/10025702/fulfill

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
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
