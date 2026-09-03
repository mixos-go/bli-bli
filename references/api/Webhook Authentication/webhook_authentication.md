---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Webhook Authentication
api_name: webhook_authentication
url: "https://seller-api.blibli.com/docs/services/79/operations/webhook_authentication"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:46"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 284
reading_time: 1 min
---



# Authentication

### Overview

API Version

POSTCopy

This authorization setup is optional to give an additional verification layer on Partner’s system. Since we are going to send confidential information through this integration, Partner may want to make sure that the callback is from Blibli and contain safe and well-recognized information.

By using the registered credential, Blibli will obtain the Token from Partner which will be valid for a certain time which set by Partner to allow us to send POST notification to Partner’s system. When the time has expired, then Blibli should get another Token.

Since this authentication is optional, if Partner does not use Token as their authentication then Blibli will not invoke authentication token from Partner’s system.

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
  "authentication": {
    "password": "webhookpassword",
    "username": "webhookusername"
  }
}
```

Click to expand
