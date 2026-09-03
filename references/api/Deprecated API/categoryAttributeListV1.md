---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Deprecated API
api_name: categoryAttributeListV1
url: "https://seller-api.blibli.com/docs/services/66/operations/categoryAttributeListV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:41"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 467
reading_time: 2 min
---



# Category Attribute List V1

### Overview

API Version

GETCopy

This API is deprecated, so it will no longer supported. Please use **Category Attributes V2** instead.

Type of Attributes

- DESCRIPTIVE_ATTRIBUTE: The attribute that allows Seller to fill a free text value. Example: Material, Memory, Model Type, etc
- PREDEFINED_ATTRIBUTE: The attribute that restrict Seller to choose only one option from the options list. Example: Operation System of current product
- DEFINING_ATTRIBUTE: The attribute that allow Seller to choose one or more options from the options list. The choosen attributes will be mapped into product items/variants. Example: Color: Red, Green, Blue. Or Size: M, L, XL.
- Then the combined value will be: Red-M, Red-L, Green-M, Green-L, etc.

Expectation

1. Give you a list of attributes for specified category
2. Ease you to create Product using API.

Limitation

5 requests per day per category code.

This API will help you to create product using POST Create Product V2 , please refer to Create Product Flow to see the complete flow.

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/product/getCategoryAttributes

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
| businessPartnerCode | string | TOQ-15126 | Yes | Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info |  |
| categoryCode | string | CA-1000050 | Yes | Parameter field of category code. This is a unique code for specific category. |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
