---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Seller Free Promo
api_name: createFreePromoV1
url: "https://seller-api.blibli.com/docs/services/66/operations/createFreePromoV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:38"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 606
reading_time: 3 min
---



# Create Free Promo V1

### Overview

API Version

POSTCopy

Expectation

1. Sellers are able to create free promo (free gift or free sample).
2. Customer receives complementary (free) products when buying main products that meet the criteria.
3. This is an asynchronous API, the promo will be processed in background.

Validation

1. This API can only be accessed by active Seller.
2. Start date must be before end date.
3. Promo criteria: MIN_TRANSACTION or MIN_PRODUCT_PURCHASE.
4. Free promo type: FREE_GIFT or FREE_SAMPLE.
5. criteriaTiers: 1 to 3 tiers, each with criteriaValue and maxNoOfFreeSkus greater than zero, in strictly ascending order by criteriaValue.
6. maxNoOfMultiples (optional): if provided, must be between 2 and 10.
7. Each complementary product must declare criteriaTiersMapped, a non-empty list of zero-based indexes into criteriaTiers.
8. Maximum 150 main products per promo.
9. Maximum 10 complementary products per promo.
10. No duplicate products within the main products list, and no duplicate products within the complementary products list.
11. Complementary product rules: For FREE_GIFT: Complementary products will be visible to customers and displayed in the order. For FREE_SAMPLE: Complementary products will be hidden from customer view in the system.

Limitation

5 requests per minute per store code.

**Next action:**

1. Check the newly created free promo using GET Queue List V1 API to see the status. If the status is FINISHED, then it means that your newly created free promo is either successfully created or failed. If the status is IN-PROGRESS, then it means your newly created free promo still waiting to be processed.
2. Check the queue progress using GET Queue Detail V1 API to see the progress of your newly created free promo.

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/promos/free-promos/

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
