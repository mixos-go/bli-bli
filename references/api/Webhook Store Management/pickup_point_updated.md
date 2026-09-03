---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Webhook Store Management
api_name: pickup_point_updated
url: "https://seller-api.blibli.com/docs/services/79/operations/pickup_point_updated"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:44"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 400
reading_time: 2 min
---



# Pickup Point Updated

### Overview

API Version

POSTCopy

Trigger

- This webhook is triggered whenever one or more fields of an existing pickup point are updated using Update Pickup Point V1 API or via Blibli Seller Center.
- This webhook is also triggered when a pickup point is deleted. In this case, the deletion is represented as an update where the deleted flag is set to true .

Note

- The changes array lists the names of pickup point fields that were modified in the update operation.
- The webhook payload always contains the final state after the update , including fields that are not listed in changes .
- Deleting a pickup point is a multi-step process. Before the pickup point can be fully deleted, all products associated with it must be removed. During this process, the deletion status may transition through intermediate states until it is marked as FINISHED .

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
  "pickupPoint": {
    "cncTag": "PP-StoreOne",
    "code": "PP-3003332",
    "name": "Pickup point A"
  },
  "address": {
    "cityName": "Kota Jakarta Selatan",
    "countryName": "ID",
    "districtName": "Cilandak",
    "provinceName": "DKI Jakarta",
    "streetAddress": "Jl. Kemang Raya, No. 12",
    "subDistrictName": "Gambir",
    "zipCode": "12560"
  },
  "deletion": {
    "deleted": false,
    "status": "PENDING"
  },
  "contact": {
    "email": "aris@example.com",
    "name": "Aris",
    "telephone": 6221555555
  },
  "flags": {
    "active": true,
    "cncActivated": true,
    "defaultAddress": true,
    "fulfilledByBlibli": true,
    "returnAddress": true,
    "supportsDelivery": true
  },
  "changes": [
    "geolocation"
  ],
  "timestamp": 1537149303013,
  "storeCode": "TOQ-15126",
  "geolocation": {
    "latitude": -6.170340200000001,
    "longitude": 106.8148046,
    "placeId": "ChIJgexHBKMCvy0RuS-JfmY5AAg",
    "streetAddress": "Jl. Kemang Raya, No. 12"
  }
}
```

Click to expand
