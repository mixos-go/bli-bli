---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Blibli Promo
api_name: blibliPromoCategoryCriteriasV1
url: "https://seller-api.blibli.com/docs/services/66/operations/blibliPromoCategoryCriteriasV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:35"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 553
reading_time: 2 min
---



# Blibli Promo Category Criteria V1

### Overview

API Version

GETCopy

Requirement

1. Requires Promo Code on the path parameter.
2. In order to get the Promo Code, User is required to hit the GET Blibli Promo List V1 API.
3. Requires to hit the GET Blibli Promo Detail V1 API and consider to the following fields:

Expectation

1. Give you a list of product categories that are eligible to be assigned into a Blibli Promo.
2. Value of maxDiscount, minDiscount, and minFinalPrice are used as a reference for Seller to assign the price when they are registering their product into a Blibli Promo (To register the product, use POST Register Product to Blibli Promo V1 API).
3. The listed categories on this API response are the Level 1 (C1) and 2 (C2) categories. If the criteria is configured in C2, then the C1 will not contain any value for minDiscount, maxDiscount, and minFinalPrice. When implementing this API, User will also need to map these categories to the related categories of product, if the Seller product category is C3+ (level 3 or deeper/further), they need to find the parent category using GET Category Tree V1 API. So, the Seller will be able to register the eligible product for particular Blibli Promo.

Validation

This API can only be accessed by active Seller.

Limitation

5 requests per promo ID per day.

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/seller/v1/promos/blibli/CAMP-07486/category-criterias

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
| promo-code | string | CAMP-07486 | Yes | This is path parameter for Promo code value. Promo Code value can be obtained by hitting GET Blibli Promo List V1 API. |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
