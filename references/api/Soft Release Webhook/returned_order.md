---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Soft Release Webhook
api_name: returned_order
url: "https://seller-api.blibli.com/docs/services/79/operations/returned_order"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:47"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 223
reading_time: 1 min
---



# Returned Order

### Overview

API Version

POSTCopy

Trigger

When there is a customer raised a ticket issue to Blibli resolution center.

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
  "orderType": "B2C_RETAIL",
  "reason": "DAMAGED_PRODUCT",
  "shippingCostOrder": 7000,
  "quantity": 2,
  "actualResolution": "CASH_REFUND",
  "orderId": 40000391782,
  "orderItemId": 40000488767,
  "histories": [
    {
      "code": "WAITING_APPROVAL",
      "date": 1609541161910
    }
  ],
  "returnStatusCode": "RMA_REQUEST_APPROVED",
  "orderTotalAmount": 20000,
  "responsibility": "Blibli.com",
  "expectedResolution": "REFUND",
  "returnId": "5b5b0149638c4f102c53c271",
  "returnToSeller": false,
  "rmaNumber": "RMA30779",
  "productReturnMethod": "INSTANT_PICKUP",
  "status": "WAITING_APPROVAL",
  "storeCode": "TOQ-15130"
}
```

Click to expand
