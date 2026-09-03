---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Store Management
api_name: createCloseStoreV1
url: "https://seller-api.blibli.com/docs/services/66/operations/createCloseStoreV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:40"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 570
reading_time: 2 min
---



# Create Close Store Schedule V1

### Overview

API Version

POSTCopy

Expectation

- Create a schedule to close the store in a period of time.
- If the closeNow is set to true, then the store will be closed immediately since the schedule is submitted. The startDate value will get the value from the time this schedule is create.
- If acceptOrder is set to true, then the auto-canceled for the orders that come in when the store is closed will be delayed until the store is open again

Validation

- Maximum request to close store is 3 times in a day.
- If the seller decide to keep accepting order during the close store (acceptOrder: true) then maximum duration for close store is a month.
- If the seller decide to not accepting order during the close store (acceptOrder: false) then maximum duration for close store is 3 months.
- startDate should be earlier than endDate. The minimum duration for these fields is an hour range.
- If the closeNow field is true, the store will closed an hour after the request submitted and the seller should add the endDate.
- If the closeNow field is false, then the seller should add both startDate and endDate.

Limitation

- Maximum request to close the store is 3 times a day.

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/stores/closing

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Basic bXRhLWFwaS10b3EtMTUxMzAtNGU1NGU6bXRhL= | Yes | Basic {Encoded basic auth} |  |
| Accept | string | application/json | Yes | Defines the message format that is expected by the client |  |
| Content-Type | string | application/json | Yes | Content type on header. Defines the message format of the request body that is sent by the client. |  |
| Api-Seller-Key | string | FABC9D185ACAC239C2DE08B40FBDE475FE86539545E9A11A8BC8F35FCC664695 | Yes | Generated from MTA by Seller |  |
| Signature | string | Nswu+xOcVwT/T9Fb3CJJXUKzUJlIDxL+ef0DMIuHWc0= | No | This is an additional security layer. When the user set Signature Key in the Blibli Seller Center , then this field and Signature-Time header parameter will became mandatory. Read more about signature here . |  |

### Parameter

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| businessPartnerCode | string | TOQ-15126 | Yes | Parameter field that define your Seller code, see on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |

### Request Body

```
{
  "acceptOrder": false,
  "reason": "Holiday",
  "endDate": 1669420800000,
  "closeNow": true,
  "startDate": 1616691600000
}
```

Click to expand
