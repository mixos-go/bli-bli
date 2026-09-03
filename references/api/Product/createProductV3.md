---
title: Blibli Seller API - Features to support Blibli sellers | Blibli
category: Product
api_name: createProductV3
url: "https://seller-api.blibli.com/docs/services/66/operations/createProductV3"
domain: seller-api.blibli.com
date_saved: "2026-09-03 10:48:31"
description: Bridging your business with the best service technology through API platform, our features - Product management, order management, seller promo & Webhook
word_count: 1478
reading_time: 7 min
---



# Create Product V3

### Overview

API Version

POSTCopy

Requirement

1. Need to hit GET Store Information Detail V1 API to acknowledge whether the seller is eligible to create a multi pickup point product or not.
2. Need to hit GET Category Attributes V2 to get the attributes that will be used to create a product.
3. The maximum character for Unique Selling Point is 400 characters.
4. The maximum character for product description is 5000 characters.
5. Here is the requirement to use the attribute that is obtained from the GET Category Attributes V2 to create the product: If variantCreating from the GET Category Attributes V2 is true , then put the option value into the variantAttribute field of this API request body. If specialAttribute from the GET Category Attributes V2 is true , then put the option value into the specialAttribute field of this API request body. If mandatory field from the GET Category Attributes V2 is true and it is variantCreating or specialAttribute, then put the value under the productItems. Otherwise, if it is not variantCreating or specialAttribute, then put the value under the product.attributes of this API. If mandatory field from the GET Category Attributes V2 is false and you decide to include the attribute to the request body of this API then the value cannot be null. If the type from the GET Category Attributes V2 is DESCRIPTIVE, then the option value will always be empty, it means the value can be input with free text.

Expectation

1. Able to create a bulk of products in one request
2. A product may contains more than one variant. And a bulk product may contained more than one product.
3. If there are some products that failed on the validation, the other valid products will still be processed.
4. If all the products are invalid, the system will return a failure.
5. If Sellers want to create a new product alongside a new brand, and the system found a similar brand with the requested new brand, then the product will keep getting processed by the system, but the new brand creation request will be ignored.
6. If Sellers want to create new product along with the new brand, and the system found the similar brand, then the product will keep processed by the system, but the newly created brand will be ignored. The result can be seen on the queue history if this case is occurred.
7. If there is found any blurred image, image with text, or watermarked image then the system will directly set the product to be reviewed by Blibli internal team and the status will be changed to be Need Correction . You can check the revision note of the related product by using Product List V3 API and GET Product Detail V2 . The product status updates will always notify your system if you have already subscribed to Product Submission - Need Correction webhook event.

Validation

1. Product Name should be unique in one bulk request.
2. The product displayable status will always follow the status value of buyable field.
3. Maximum 10 bulk products, each bulk product is allowed to contains more than one product items/variants.
4. The image can be embedded using Base64 or URL Path. Make sure the link is available for public to access, and should use "https://" (see request body sample)
5. The Image format must be .jpg, .jpeg, .png, .webp.
6. For the image value, remove the Base64 prefix for “data:image/jpeg;base64,”
7. Max 8 images per variant. Larger than that will cause the API to return an error.
8. Image guidelines: Allowed to use white or other colors/thematic backgrounds, but still focus on products. Maximum image size is 4 MB with a minimum dimension of 600x600 pixels (we recommend 1200x1200 pixels) and at least 72 dpi resolution. We recommend the use of 1:1 ratio image for the best result. Image are allowed to use watermarks according to the regulation applied: Store name Product attributes USP Bonus Background Multiple images Does not contain: Phone number Personal email Personal address Social media account COD sign
9. Maximum payload size per request is 60MB. Users might need to pay attention to base64 usage to prevent the reach of maximum payload size.
10. If the attribute type is DESCRIPTIVE, then Users are allowed to input the value using free text
11. If using a non mandatory attribute (mandatory = false), then Users should input a value. The value cannot be null or "-". If Users do not want to send the value, then it is better to not include this attribute into the request body.
12. The maximum characters of each attributes field value is 255 characters including the whitespace.
13. If Sellers send a brand code alongside a new brand request, then the new brand request will be ignored by system.
14. To make sure the value of base64 is correct, you can validate the base64 value by using Code Beautify.
15. Seller should input the productType with correct value, either it is 1/2/3. If the seller input other than those number, then the system will set the productType as `1`.
16. Some sellers are not eligible to create BOPIS or Shipping by Seller (also known as Big Product) product type.

Preorder Validation

1. Only send the preOrder field if want to set the product as a preorder product. If you do not wish to set the product as preorder, then do not include this field at all.
2. It is allowed to select weekend date for preorder product
3. If the product is still not available until the committed date, then all the orders that have been made under the product will get canceled.
4. When sending Preorder fields, User should send the Preorder type with the following validations:

Limitation

25 requests per minute per store code.

This API will help you to create product, please refer to [Create Product Flow](https://blib.li/api-flow-create-product) to see the complete flow.

Next action:

1. Check the newly created bulk product queue progress using GET Queue List V1 API to see the status. If the status is FINISHED, then it means all your newly created products has been passed the queue. If the status is IN-PROGRESS, then it means there are some of your requested products still waiting to be processed.
2. Check the product queue progress using GET Queue Detail V1 API to see the progress of each newly created product. The queue history represents each product which defined by the product name and sellerSkus.
3. After the product has passed the queue, you will need to check using Product List V3 API to see whether the product(s) has been Approved/Need correction/Rejected .
4. Then hit the GET Product Detail V2 API if you want to see the submission status of one specified product.
5. You can also refer to Create Product Flow

API raw string
POST\n446b76099795f116e1b8c3b0d95b4226\napplication/json\nTue May 12 16:28:52 WIB 2020\n/seller/v1/products/async

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
