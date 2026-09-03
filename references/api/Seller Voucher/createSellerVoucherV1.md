---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Seller Voucher
api_name: createSellerVoucherV1
url: "https://seller-api.blibli.com/docs/services/66/operations/createSellerVoucherV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:37"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 649
reading_time: 3 min
---



# Create Seller Voucher V1

### Overview

API Version

POSTCopy

Expectation

1. Sellers are able to create their own voucher.
2. Regular voucher name will be appeared when the Voucher is ACTIVE.
3. You can either send the `blibliSku` OR `products` in the request body.
4. When you are using the `products` field and did not send the products.pickupPointCode, then the system will run validation no. 6.

Validation

1. This API can only be accessed by active Seller.
2. This is an asynchronous API, if the voucher that wished to be created is for specific Blibli SKU.
3. If the voucher that wished to be created is for all Blibli SKU then this API will run the synchronously.
4. If the voucher is created with no Blibli SKU on the request body, then the voucher will be applied for all Blibli SKU that Seller has.
5. Voucher quota will be deducted every time a Customer checked out the order.
6. When using the `products` field, products.pickupPointCode field is not mandatory, but if the pickup point code does not get included in the request body, then the system will run the following validation: If the product has only one pickup point, then the system will continue the update process. If the product has more than 1 pickup points (multi pickup point), then the system will return an error. To avoid the error, user should send the pickup point code too.

Limitation

5 requests per minute per store code.

**Next action:**

1. Check the newly created voucher using GET Queue List V1 API to see the status. If the status is FINISHED, then it means that your newly created voucher is either successfully created or failed. If the status is IN-PROGRESS, then it means your newly created voucher still waiting to be processed.
2. Check the queue progress using GET Queue Detail V1 API to see the progress of your newly created voucher.

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/promos/vouchers/

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
