---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Store Management
api_name: bindRequestV1
url: "https://seller-api.blibli.com/docs/services/66/operations/bindRequestV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:39"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 508
reading_time: 2 min
---



# Bind Request V1

### Overview

API Version

POSTCopy

Requirement

This API requires a valid store code to be bound with your system

Expectation

The store owner will respond your request either through their Blibli Seller Center page or via email, which will be redirected to their Blibli Seller Center page. Unless, the request is ignored by the seller and the request will be expired.

Validation

- Currently, the store has not bound to your system or any system yet. Please contact Blibli Seller API team if you expect the seller to be able bound to more than one API Client ID.
- Currently, the store does not have any pending bind request from other system.

Bind Request on the seller`s page

![image](https://www.static-src.com/siva/asset/07_2024/bindRequestList_2024.png)

Next action: You need to implement the Webhook Bind Request Status Changes. This webhook will notify you once the request is approved or rejected by the seller.

API raw string POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/clients/v1/binds/TOQ-15126

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Basic bXRhLWFwaS10b3EtMTUxMzAtNGU1NGU6bXRhL= | Yes | Basic {Encoded basic auth} |  |
| Accept | string | application/json | Yes | Defines the message format that is expected by the client |  |
| Content-Type | string | application/json | Yes | Content type on header. Defines the message format of the request body that is sent by the client. |  |
| Signature | string | Nswu+xOcVwT/T9Fb3CJJXUKzUJlIDxL+ef0DMIuHWc0= | No | This is an additional security layer. When the user set Signature Key in the Blibli Seller Center , then this field and Signature-Time header parameter will became mandatory. Read more about signature here . |  |
| Signature-Time | number | 1582131917383 | No | This is current millis for signature which will be expired in 15 minutes. This Signature-Time will become mandatory when the seller set the Signature Key in the Blibli Seller Center . |  |

### Parameter

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| store-code | string | TOQ-15126 | Yes | Store code that is expected to be bound with API client system. |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
