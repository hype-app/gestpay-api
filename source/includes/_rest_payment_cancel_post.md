### POST payment/cancel


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/payment/cancel/
```

> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/payment/cancel/
```

> Example request: 

```json
{
  "shopLogin" : "",
  "bankTransactionID":"",
  "shopTransactionID":"",
  "paymentID":"",
  "cancelReason": ""  
}
```

Deletes an authorized transaction. 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey {merchant Api Key}` | The merchant API key can be found in Gestpay Merchant Back-Office. |

Request Body: 

(Fields in **bold** are mandatory)

| Field               | Description             
| ------------------- | ----------------------- 
| **`shopLogin`**         | Your shop login         
| `bankTransactionID` | The bank transaction ID 
| `shopTransactionID` | the shop transaction ID 
| `paymentID`         | The payment ID 
| `cancelReason`      | A description of the cancel reason 

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
    "transactionType" : "cancel", 
    "transactionResult" :"OK", 
    "bankTransactionID" : "{bankTransactionID}", 
    "shopTransactionID": "{shopTransactionID}", 
    "paymentID" : "{paymentID}" 
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

Response payload details: 

| Field               | Description             
| ------------------- | ----------------------- 
| `transactionType`   | It will always be `cancel`
| `transactionResult` | `OK` or `KO`
| `bankTransactionID` | The bank transaction ID 
| `shopTransactionID` | the shop transaction ID 
| `paymentID`         | The payment ID 