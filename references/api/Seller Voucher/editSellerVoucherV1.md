---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Seller Voucher
api_name: editSellerVoucherV1
url: "https://seller-api.blibli.com/docs/services/66/operations/editSellerVoucherV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:37"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 598
reading_time: 2 min
---



# Edit Seller Voucher V1

### Overview

API Version

PUTCopy

Requirement

Requires a valid voucher code in the path parameter.

Expectation

1. Users only need to send the fields that they want to edit, the fields that are not sent or have null value will not be edited.
2. Sellers are able to edit the available fields on the request body when the voucher status is PENDING.
3. But if the voucher status is ACTIVE, then the Sellers are only allowed to edit quota , and endDate with larger value than the current one.
4. You can either send the `blibliSku` OR `products` in the request body.

Validation

1. This API can only be accessed by active Seller.
2. If the voucher is applied fo all Blibli SKU, and Sellers edit the blibliSkus field, then the request will be failed, and system will return a 400 error response.
3. If Sellers want to add the blibliSku into the specified voucher, make sure to input the valid Blibli SKU. If there is any invalid Blibli SKU on the request body, then system will return a warning message. If all the inputed Blibli SKUs are invalid then system will return a 422 error response.
4. When using the `products` field, products.pickupPointCode field is not mandatory, but if the pickup point code does not included in the request body, then the system will run the following validation: If the product has only one pickup point, then the system will continue the update process. If the product has more than 1 pickup points (multi pickup point), then the system will return an error. To avoid the error, user should send the pickup point code too.

Limitation

5 requests per minute per voucher code.

API raw string
PUT\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/promos/vouchers/MV-123456

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
| voucher-code | string | MV-123456 | Yes | Voucher code that owned by a Seller. |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
