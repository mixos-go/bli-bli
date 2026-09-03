---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Deprecated Webhook
api_name: product_item_changes
url: "https://seller-api.blibli.com/docs/services/79/operations/product_item_changes"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:48"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 269
reading_time: 1 min
---



# Product Item Changes

### Overview

API Version

POSTCopy

Since the release of the Multi Pickup Point feature on February 28th, 2023. Several fields will return a null value:

- synchronized
- lateFulfillment
- productName
- archived
- dangerousLevel
- review
- upcCode
- height
- length
- off2OnChannelActive
- weight
- deliveryWeight
- width

As the alternative for this webhook, you can use Product Changes or Product Variant Pickup Point Changes Webhook.

Trigger

Once there is any changes performed to the following fields:

- pickupPointCode
- archived
- buyable
- discoverable
- salePrice
- price
- Any changes that made by the internal team, when there is found a faulty image which will make the product is taken down temporarily.

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Accept | string | application/json | Yes | Defines the message format that is expected by the client |  |
| Content-Type | string | application/json | Yes | Content type on header. Defines the message format of the request body that is sent by the client. |  |
| requestId | string | f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/ |  |
| requestTime | number | 1582131917383 | Yes | This is current millis for request time |  |
| token | string | eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJCTGlCTGlDbkMw | No | Once Partners set the OAUTH on Webhook Setting page, this Token will be sent to Partners as authorization. |  |
