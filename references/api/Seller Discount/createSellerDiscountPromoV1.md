---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Seller Discount
api_name: createSellerDiscountPromoV1
url: "https://seller-api.blibli.com/docs/services/66/operations/createSellerDiscountPromoV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:36"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 581
reading_time: 2 min
---



# Create Seller Discount Promo V1

### Overview

API Version

POSTCopy

Expectation

- Allow Sellers to create their own Seller Discount.
- When all of the products in a certain seller discount are removed before the discount starts, the discount status will be changed to EXPIRED.

Validation

1. This API can only be accessed by active Seller.
2. During promo period, the selling price cannot be edited once the promo is activated. So, we suggest the Seller to input the valid selling price for this discount.
3. To edit the regular price of product, remove the product from the related promo.
4. If the product has been registed to other promo, then the latest request product registration to promo will be rejected.
5. When using the `products` field, products.pickupPointCode field is not mandatory, but if the pickup point code does not included in the request body, then the system will run the following validation: If in the products field have 1 pickup point, then the system will continue the update process. If in the products field have more than 1 pickup point (multi pickup point), then the system will return an error. To avoid the error, user should send the pickup point code too.

Limitation

- 10 requests per minute per store code.
- Each request contains a maximum of 25 products. If the seller wants to add more products to the seller discount promo that has just been successfully created, they can edit it by using Edit Seller Discount Promo V1 API

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/promos/discounts

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
