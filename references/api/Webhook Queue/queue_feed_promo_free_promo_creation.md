---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Webhook Queue
api_name: queue_feed_promo_free_promo_creation
url: "https://seller-api.blibli.com/docs/services/79/operations/queue_feed_promo_free_promo_creation"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:46"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 317
reading_time: 1 min
---



# Free Promo Creation Queue Status Changes

### Overview

API Version

POSTCopy

Trigger

This webhook will notify the user with the result after the free promo creation queue has been processed by using Create Free Promo V1 API . The result can be either it is successfully created or it has failed with some cause of failure information.

Next action

Once this webhook is sent to your system with success result, the free promo has been created successfully. The promo will be active and customers can start redeeming the free products based on the promo criteria (minimum transaction or minimum product quantity) once the start date is reached. If the start date is in the future, the promo will remain in pending status until then.

Note

- Free promo type can be FREE_GIFT (visible to customer) or FREE_SAMPLE (hidden from customer view)
- Promo criteria can be MIN_TRANSACTION (minimum purchase amount) or MIN_PRODUCT_QTY (minimum quantity of main products)
- Maximum 150 main products and 10 complementary products per promo

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Accept | string | application/json | Yes | Defines the message format that is expected by the client |  |
| Content-Type | string | application/json | Yes | Content type on header. Defines the message format of the request body that is sent by the client. |  |
| requestId | string | f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/ |  |
| requestTime | number | 1582131917383 | Yes | This is current millis for request time |  |
| token | string | eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJCTGlCTGlDbkMw | No | Once Partners set the OAUTH on Webhook Setting page, this Token will be sent to Partners as authorization. |  |
