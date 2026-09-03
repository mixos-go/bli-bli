---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Blibli Promo
api_name: blibliPromoDetailV1
url: "https://seller-api.blibli.com/docs/services/66/operations/blibliPromoDetailV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:35"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 587
reading_time: 2 min
---



# Blibli Promo Detail V1

### Overview

API Version

GETCopy

Requirement

1. Requires Promo Code on the path parameter.
2. In order to get the Promo Code, User is required to hit the GET Blibli Promo List V1 API.

Expectation

1. Give you details of the promo according to the requested Promo Code on the path parameter.
2. The response will help you to see the discount rule for a specific Blibli Promo.
3. The response will help you to see which Brands are eligible to be registered into a Blibli Promo. If the value of eligibleBrands is null, then the Blibli Promo is open for all Brands.

Validation

This API can only be accessed by active Seller.

Limitation

15 requests per promo ID per day.

Next action

1. If the categoryCriteriaRuleEnabled is true then the eligibleCategories will be empty, then you will need to: a. Hit the GET Blibli Promo Category Criterias V1 API to see the further information for Blibli Promo discount rule based on the particular category. b. Hit the GET Category Tree V1 API to map the mentioned category with the product category that you wished to register.
2. If the categoryCriteriaRuleEnabled is false then the valid discount rule is: a. The one that listed under the discountRule field on the Blibli Promo Detail response body. b. If the eligibleCategories has value, then you will need to hit the GET Category Tree V1 API to map the mentioned category with the parent category. c. If the eligibleCategories field is empty, then the Blibli Promo is open for all categories.

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/seller/v1/promos/blibli/CAMP-07486

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
