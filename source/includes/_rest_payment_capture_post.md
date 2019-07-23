### POST payment/capture


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/payment/capture/
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/payment/capture/
```


> Example request: 

```json
{
  "shopLogin":"",
  "amount":"",
  "currency":"",
  "bankTransactionID":"",
  "shopTransactionID":"",
  "paymentID":"",
  "fullFillment":{
    "fullFillmentlst":[{
      "status":"",
      "trackingCompany":"",
      "trackingNumbers":"",
      "trackingUrls":"",
      "message":"",
      "receipt":"",
      "productDetails":[{
        "productCode":"",
        "SKU":"",
        "name":"",
        "description":"",
        "quantity":"",
        "price":"",
        "unitPrice":"",
        "type":"",
        "vat":"",
        "discount":"",
        "requiresShipping":"",
        "condition":"",
        "seller":"",
        "category":"",
        "subCategory":"",
        "brand":"",
        "deliveryAt":""
        }
      ]
    }]
  }
}
```

Settle fully or partially an authorized transaction.

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey {merchant Api Key}` | The merchant API key can be found in Axerve Merchant Back-Office. |

Input Body: 

(Fields in **bold** are mandatory)

| Field               | Description             
| ------------------- | ----------------------- 
| **`shopLogin`**         | Your shop login         
| **`amount`**            | The amount to capture
| **`currency`**          | [ISO currency code](#currency-codes)
| `bankTransactionID` | The bank transaction ID 
| `shopTransactionID` | the shop transaction ID 
| `paymentID`         | The payment ID 
| `FullFillment`      | describes the items related to this capture. 

Note: you **must** provide at least one of `shopTransactionID`, `bankTransactionID`, `paymentID`.

`FillFillment` contains a `FullFillmentlst` whose fields are: 

| parameter name | description |  
| -------------- | ----------- | 
| `status` | <ul><li>`success`: the fulfillment was successful.</li><li>`cancelled`: the fulfillment was cancelled.</li><li>`error`: there was an error with the fulfillment request.</li><li>`failure`: the fulfillment request failed.</li></ul>
| `trackingCompany` | the name of the shipping company 
| `trackingNumbers` | A list of shipping numbers, provided by the shipping company.
| `trackingUrls` | The URLs to track the fulfillment.
| `message` | Additional textual description regarding the fulfillment status.
| `receipt` | Information about the Receipt
| `productDetails` | container object that contains info about the fulfilled item. 

Here is a description of the children of `productDetails`: 

| parameter name | description |  
| -------------- | ----------- | 
| `productCode` | Article’s product Code
| `SKU` | Article’s Stock Keeping Unit
| `name` | Article’s name 
| `description` | Article’s description
| `quantity` | The number of products 
| `price` | Article’s price
| `unitPrice` | Article’s Unit price
| `type` | The type of article: `digital` , `downloadable`,  `physical`,`composite`, `event`, `travel`
| `vat` | Value-Added Tax (the value of the tax)
| `discount` | 
| `requiresShipping` | boolean, States whether or not the fulfillment requires shipping. This field is important for merchants dealing with digital goods.
| `condition` | Description of the physical condition of the item, mostly relevant for used items.
| `seller` | Details about the seller of the item, relevant for marketplace orders.
| `category` | The category of the item. For event tickets: the category of the event.
| `subCategory` | The sub-category of the item. For event tickets: the sub-category of the event.
| `brand` | The brand name of the item.
| `deliveryAt` | The planned delivery date of the product or item.

#### Response 

> Success Response:<br>
> `200 OK`

```json
{
   "error":{  
      "code":"0",
      "description":"request correctly processed"
   },
   "payload":{
    "transactionType":"capture",
    "transactionResult":"OK",
    "bankTransactionID":"{bankTransactionID}",
    "shopTransactionID":"{shopTransactionID}",
    "paymentID":"{paymentID}"
  }
}
```


See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Axerve E-commerce Solutions reports errors.



`payload` details:

| Field | Description | 
| ----- | ----------- | 
| `transactionType`   | Identifies the type of the transaction. For this method it will always be `capture`.
| `transactionResult` | `OK` for success, `KO` otherwise. 
| `bankTransactionID` | A transaction ID assigned by the bank.                                                           
| `shopTransactionID` | An ID assigned by the shop.       
| `paymentID`         | Assigned by Axerve E-commerce Solutions, identifies the payment.                                                                