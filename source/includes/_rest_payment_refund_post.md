### POST payment/refund


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/payment/refund/
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/payment/refund/
```


> Request Body: 

```json
{
  "shopLogin":"",
  "bankTransactionID":"",
  "shopTransactionID":"",
  "paymentID":"",,
  "settlementID":"",
  "amount":"",
  "currency":"",
  "chargeBackFraud":"",
  "refundReason":"",
  "orderDetails":{
    "productDetails":[
      {
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
  }
}
```

Deletes, fully or partially, a settled transaction. 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey {merchant Api Key}` | The merchant API key can be found in Axerve Merchant Back-Office. |

Request Body: 

(Fields in **bold** are mandatory)

| Field | Description 
| -------------- | -----------
| **`shopLogin`** | the merchant's code 
| **`amount`** | the amount to refund 
| **`currency`** | [currency ISO code](#currency-codes) 
| `bankTransactionID` | ID of the transaction assigned by Axerve E-commerce Solutions 
| `shopTransactionID` | shop transaction ID value 
| `paymentID`         | The payment ID 
| `settlementID` | Optional identifier of the settlement
| `refundReason` | a free-text reason for the refund. Used with fraud protection. 
| `chargeBackFraud` | Flag for risk: <ul><li>`TRUE` - chargeback for fraud</li><li>`FALSE` - chargeback not for a fraud</li></ul>
| `orderDetail.productDetails` | in case you are using _Klarna_, fill this fields with info about the products that are refunded. A description of this field is in [OrderDetails](#orderdetails). 

Note: you **must** provide at least one of `shopTransactionID`, `bankTransactionID`, `paymentID`.

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
    "transactionType":"refund",
    "transactionResult":"OK",
    "bankTransactionID":"{bankTransactionID}",
    "shopTransactionID":"{shopTransactionID}",
    "paymentID":"{paymentID}"
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Axerve E-commerce Solutions reports errors.

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `transactionType` | always `refund` for this operation
| `transactionResult` | `OK` ok `KO`
| `bankTransactionID` | ID of the transaction assigned by Axerve E-commerce Solutions 
| `shopTransactionID` | shop transaction ID value 
| `paymentID`         | The payment ID 