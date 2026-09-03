---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Soft Release Webhook
api_name: customer_request_update_order
url: "https://seller-api.blibli.com/docs/services/79/operations/customer_request_update_order"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:48"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 284
reading_time: 1 min
---



# Customer Request

### Overview

API Version

POSTCopy

This webhook is still in soft release, please raise a [ticket](https://blib.li/ticket) from your account to test it in staging environment and activate it in production later.

Trigger

- Once there is a request made by the Customer to Blibli team to update the order status, then our system will update the order status to be CR. Customer allowed to raise this request when the order status is PC/PU/BP.
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
  "statusCRUpdatedTimestamp": 1628077260046,
  "packageId": "10025702",
  "orderStatus": "CR",
  "logisticProductCode": "RegularCode",
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
