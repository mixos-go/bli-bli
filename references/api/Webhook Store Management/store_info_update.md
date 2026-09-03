---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Webhook Store Management
api_name: store_info_update
url: "https://seller-api.blibli.com/docs/services/79/operations/store_info_update"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:44"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 240
reading_time: 1 min
---



# Store Info Update

### Overview

API Version

POSTCopy

This webhook will keep you updated with the latest store information. The updated field can be seen at updatedFields . Please ignore the webhook notification when the updatedFields returns an empty value.

Trigger

When there is any updated store information.

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
  "updatedFields": [
    "logo",
    "status"
  ],
  "code": "TOQ-15126",
  "name": "Toko ABC",
  "deliveryType": "PICKUP",
  "flags": [
    {
      "cnc": false,
      "everFulfilledByBlibli": true,
      "fulfilledByBlibli": false,
      "inStore": false,
      "multiPickupPointEnabled": true
    }
  ],
  "logo": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/default.png",
  "commissionType": "CM",
  "status": "ACTIVE"
}
```

Click to expand
