---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Obsolete API
api_name: getProductDiscussionAnswerV1
url: "https://seller-api.blibli.com/docs/services/66/operations/getProductDiscussionAnswerV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:44"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 367
reading_time: 1 min
---



# Get Product Discussion Answer V1

### Overview

API Version

GETCopy

This API is obsolete as the related feature is no longer available.

Expectation

The response contains the answer you have submitted for the specified question code.

Limitation

5 requests in an hour per question code.

Product discussion can be accessed through Product > Product Discussion:

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/mtaapi/api/businesspartner/v1/product/discussion/answers/DE742E417172904495CA25B2C595A0E89E4877D30B98A0CEB2BBD38E054FC5BF

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
| questionCode | string | DE742E417172904495CA25B2C595A0E89E4877D30B98A0CEB2BBD38E054FC5BF | Yes | Unique code which define the specific question |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| businessPartnerCode | string | TOQ-15126 | Yes | Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
