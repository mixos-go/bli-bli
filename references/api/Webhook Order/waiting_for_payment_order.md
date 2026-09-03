---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Webhook Order
api_name: waiting_for_payment_order
url: "https://seller-api.blibli.com/docs/services/79/operations/waiting_for_payment_order"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:45"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 260
reading_time: 1 min
---



# Order Waiting for Payment

### Overview

API Version

POSTCopy

Trigger

- Once the order has been checked out, and the current status is waiting for payment.
- This webhook will only be triggered for the following order type B2C_RETAIL, RMA_REPLACEMENT, B2C_TRADE_IN, MITRA_RETAIL.

Expectation

The listed order numbers cannot be used for any API since the transaction has not been done yet by the customer.

Recommendation

- Subscribe to Webhook Order Canceled Payment Expired to know when the payment for the order (from webhook Order Waiting for Payment ) is expired .
- Subscribe to Webhook New Order to know when the order payment is finally paid and become a new order.

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Accept | string | application/json | Yes | Defines the message format that is expected by the client |  |
| Content-Type | string | application/json | Yes | Content type on header. Defines the message format of the request body that is sent by the client. |  |
| requestId | string | f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/ |  |
| requestTime | number | 1582131917383 | Yes | This is current millis for request time |  |
| token | string | eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJCTGlCTGlDbkMw | No | Once Partners set the OAUTH on Webhook Setting page, this Token will be sent to Partners as authorization. |  |
