---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Soft Release Webhook
api_name: new_order_item
url: "https://seller-api.blibli.com/docs/services/79/operations/new_order_item"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:47"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 249
reading_time: 1 min
---



# New Order Item

### Overview

API Version

POSTCopy

This webhook is still in soft release, please raise a [ticket](https://blib.li/ticket) from your account to test it in staging environment and activate it in production later.

This webhook will send you an order item detail that has just been paid by the customer and ready to be processed by seller.

Trigger

- When there is a new order has been paid by the customer (status updated to FP). But this webhook will only send the payload
- This webhook will only be triggered for the following order type B2C_RETAIL, RMA_REPLACEMENT, B2C_TRADE_IN, MITRA_RETAIL.

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Accept | string | application/json | Yes | Defines the message format that is expected by the client |  |
| Content-Type | string | application/json | Yes | Content type on header. Defines the message format of the request body that is sent by the client. |  |
| requestId | string | f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/ |  |
| requestTime | number | 1582131917383 | Yes | This is current millis for request time |  |
| token | string | eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJCTGlCTGlDbkMw | No | Once Partners set the OAUTH on Webhook Setting page, this Token will be sent to Partners as authorization. |  |
