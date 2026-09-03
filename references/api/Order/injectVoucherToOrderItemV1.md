---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Order
api_name: injectVoucherToOrderItemV1
url: "https://seller-api.blibli.com/docs/services/66/operations/injectVoucherToOrderItemV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:34"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 561
reading_time: 2 min
---



# Inject Voucher to Order Item V1

### Overview

API Version

PUTCopy

Requirement

1. Requires a valid order item ID on the path parameter.
2. User need to send the voucher code in the request body as many as total of product quantity for each order item ID.
3. Only for BIG PRODUCT and BOPIS type.
4. Order status must be FP, BP, D.

Expectation

1. Able to inject an eligible voucher to an order item ID and the customer will be noticed through the order detail page in customer site.
2. The specified order item status will consider as done but the status will remain as BP once the voucher has successfully injected until the order got confirmed by the customer or automatically updated by Blibli`s system after two days passed.
3. The orders with status (D) still able to be injected with vouchers if only it has not been injected with any voucher before.

Validation

1. This API can be retried using the same order item ID and vouchers if the voucher has not injected yet
2. Once the voucher has been successfully injected to specified order item ID, it cannot be retried using different vouchers.
3. The voucher Terms and Conditions and Instruction cannot contained any of these characters: % * : !
4. The allowed special characters to use in Voucher code are only `-` (dash symbol) and `_` (underscore symbol).
5. REGULAR product type is not allowed.

Limitation

Limited to 5 requests per day per order item number.

Voucher sample:

API raw string
PUT\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/order-items/25000025943/vouchers

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Basic bXRhLWFwaS10b3EtMTUxMzAtNGU1NGU6bXRhL= | Yes | Basic {Encoded basic auth} |  |
| Accept | string | application/json | Yes | Defines the message format that is expected by the client |  |
| Content-Type | string | application/json | No | Content type on header. Defines the message format of the request body that is sent by the client. |  |
| Api-Seller-Key | string | FABC9D185ACAC239C2DE08B40FBDE475FE86539545E9A11A8BC8F35FCC664695 | Yes | Generated from MTA by Seller |  |
| Signature | string | Nswu+xOcVwT/T9Fb3CJJXUKzUJlIDxL+ef0DMIuHWc0= | No | This is an additional security layer. When the user set Signature Key in the Blibli Seller Center , then this field and Signature-Time header parameter will became mandatory. Read more about signature here . |  |

### Parameter

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| order-item-id | string | 25000025999 | Yes | Order item number (ID) |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
