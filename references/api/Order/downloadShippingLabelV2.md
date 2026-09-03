---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Order
api_name: downloadShippingLabelV2
url: "https://seller-api.blibli.com/docs/services/66/operations/downloadShippingLabelV2"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:33"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 527
reading_time: 2 min
---



# Download Shipping Label V2

### Overview

API Version

GETCopy

Requirement

REGULAR PRODUCT

- Seller Delivery Type is Pickup when Package Created (PC) is True, and Status = FP or PU
- Seller Delivery Type is Dropship when Package Created (PC) is True, and Status = FP or PU or CX

**BOPIS**

For any Seller Delivery Type (Pickup/Dropship), and Status = BP

**BIG PRODUCT**

For any Seller Delivery Type (Pickup/Dropship) when Package Created (PC) is True, and Status = FP or BP

Expectation

1. Allow you to download the shipping label by decode the base64 file on the response body according to the Package ID on the path parameter.
2. BIG Product will get the shipping label which include a virtual phone number and a unique pin code that allows the Seller to contact the Customer. This pin code is to grant access for Seller and to make sure that the one who makes the call is the authorized Seller.

Limitation

Limited to 5 requests per packageId per day.

Validation

Shipping label cannot be printed for order with status DX, X, and D.

Learn more the Regular Order fulfillment flow on Regular Order Fulfillment Flow page.

Sample preview of shipping label:
**Shipping Label without AWB and with AWB.**![image](https://www.static-src.com/siva/asset/03_2023/SI_ShippingLabel_2023.png)

**Shipping Label for Big Product**

![image](https://www.static-src.com/siva/asset//09_2022/SI-ShippingLabelBIG.png)

**Virtual Phone Number information for Big Product**
![image](https://www.static-src.com/siva/asset//10_2022/SI-VPN.png)

API raw string
GET\n\n\nTue May 12 16:28:52 WIB 2020\n/seller/v1/orders/10025702/shippingLabel

### Header

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Basic bXRhLWFwaS10b3EtMTUxMzAtNGU1NGU6bXRhL= | Yes | Basic {Encoded basic auth} |  |
| Accept | string | application/json | Yes | Defines the message format that is expected by the client |  |
| Content-Type | string | application/json | No | Content type on header. Defines the message format of the request body that is sent by the client. |  |
| Api-Seller-Key | string | FABC9D185ACAC239C2DE08B40FBDE475FE86539545E9A11A8BC8F35FCC664695 | Yes | Generated from MTA by Seller |  |
| Signature | string | Nswu+xOcVwT/T9Fb3CJJXUKzUJlIDxL+ef0DMIuHWc0= | No | This is an additional security layer. When the user set Signature Key in the Blibli Seller Center , then this field and Signature-Time header parameter will became mandatory. Read more about signature here . |  |

### Parameter

search

| Name | Type | Example | Required | Description |  |
| --- | --- | --- | --- | --- | --- |
| package-id | number | 10025702 | Yes | Unique package ID |  |
| requestId | string | myCompany-f8127be2-1da4-4e65-9280-42137d0d80ed | Yes | Parameter field containing a unique ID which could be generated through https://www.uuidgenerator.net/. |  |
| username | string | testing.user@mail.com | Yes | Parameter field for Blibli Seller Center Username which had been registered on the beginning and used for login to Blibli Seller Center |  |
| storeId | number | 10001 | Yes | Store ID. This is the fixed value for Store ID managed by Blibli. |  |
| storeCode | string | TOQ-15126 | Yes | Your store code can be seen on https://seller.blibli.com/MTA/store-info/store-info |  |
