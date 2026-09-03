---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Seller Chat
api_name: sellerChatOTTV1
url: "https://seller-api.blibli.com/docs/services/66/operations/sellerChatOTTV1"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:41"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 616
reading_time: 3 min
---



# Seller Chat OTT V1

### Overview

API Version

POSTCopy

The seller chat feature is now accessible for every seller through a third party or the API integration enabler. To implement this feature, you only need to embed the iframe into your system once you have got the One Time Token (OTT) that you obtained by using this API.

Requirement

The API Client user should be bound to the targeted store that will have the seller chat feature.

Embed iframe HTML

https://{blibli-seller-center-site}/conversations?authToken={Token}&mode=iframe

Example: Blibli Seller Center Site (Production): https://seller.blibli.com/ Blibli Seller Center Site (Staging): https://seller-preprod-gcp.gdn-app.com/ One Time Token (OTT): 5F936566A3B7A7F766FDCAC9DEAE4857396FC10DC50FF7578BE1943F4F8F619A

Embed iframe HTML: https://seller.blibli.com/conversations?authToken=5F936566A3B7A7F766FDCAC9DEAE4857396FC10DC50FF7578BE1943F4F8F619A&mode=iframe

Expectation

- This API will provide you with an OTT (One-Time Token) to access the iframe.
- The store will have access to their seller chat as seen on the Blibli Seller Center.

Validation

The iframe cannot be accessed for the following conditions:

- The store unbind from the API Client ID.
- The store is being terminated/resigned/rejected by Blibli.
- The user is inactivated from the store.

Limitation

- 10 requests per hour per store code.
- One store account is allowed to have a maximum of 10 valid One Time Token (OTT) at the same time. If the store generates the 11th One Time Token (OTT), then the first One Time Token (OTT) will be expired or invalid.
- The One Time Token (OTT) will only be valid for one minute. If the One Time Token (OTT) is not immediately used in one minute, then it will expire and you will need to get another one.
- The iframe session will last for 8 hours. Otherwise, the system will return error 401 which means that you will need to generate the new One Time Token (OTT) to access the seller chat.

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
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
| channelId | string | YourCompany | Yes | Contains information on which channel does the data stands. Your company/instance name. If you are Seller Aggregator input using your company name instead of Seller/Store name. |  |
