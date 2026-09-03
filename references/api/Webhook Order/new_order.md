---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Webhook Order
api_name: new_order
url: "https://seller-api.blibli.com/docs/services/79/operations/new_order"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:45"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 290
reading_time: 1 min
---



# New Order

### Overview

API Version

POSTCopy

Trigger

- When the new order has been paid by the customer.
- This webhook will only be triggered for the following order type B2C_RETAIL, RMA_REPLACEMENT, B2C_TRADE_IN, MITRA_RETAIL.

Important Notes

A new order has been made and paid, then the integration issue occurred, this issue will made the payment did not sent to Blibli`s system. The order will become expired soon, and Blibli's system will send webhook notification from Order Canceled Payment Expired .

Then the integration issue got fixed, this will cause the payment will be processed instead of expired. Then Blibli's system will send a new notification of New Order with the exact same order item ID that previously has been expired. The valid status of that order is New Order (FP).

This webhook has higher priority than Order Canceled Payment Expired

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Accept | string | application/json | Yes | Defines the message format that is expected by the client |  |
| Content-Type | string | application/json | Yes | Content type on header. Defines the message format of the request body that is sent by the client. |  |
| requestId | string | f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/ |  |
| requestTime | number | 1582131917383 | Yes | This is current millis for request time |  |
| token | string | eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJCTGlCTGlDbkMw | No | Once Partners set the OAUTH on Webhook Setting page, this Token will be sent to Partners as authorization. |  |
