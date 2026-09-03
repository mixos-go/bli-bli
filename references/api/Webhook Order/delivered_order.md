---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Webhook Order
api_name: delivered_order
url: "https://seller-api.blibli.com/docs/services/79/operations/delivered_order"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:45"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 232
reading_time: 1 min
---



# Order Status - Delivered

### Overview

API Version

POSTCopy

Trigger

- Once there is an order has been delivered to Customer.
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

### Request Body

```
{
  "blibliSku": "TOQ-15126-00298-00001",
  "quantity": 7,
  "orderId": "12104566234",
  "initialQuantity": 10,
  "orderItemId": "121072766613",
  "packageId": "10025702",
  "orderStatus": "D",
  "instantPickup": true,
  "logisticProductCode": "RegularCode",
  "pickupPointCode": "PP-3003332",
  "logisticProductName": "Regular",
  "blibliSkuName": "Sunglasses Police",
  "autoCancelTimeStamp": "2019-07-25 00:00",
  "sellerSku": "SAMS-SKU-01",
  "orderDate": 1539684887059,
  "timestamp": 1537149303013,
  "storeCode": "TOQ-15126"
}
```

Click to expand
