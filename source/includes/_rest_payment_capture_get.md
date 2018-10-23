### GET payment/capture


> Sandbox URL:

```
GET https://sandbox.gestpay.net/api/v1/payment/capture/{paymentID}
```


> Production URL: 

```
GET https://ecomms2s.sella.it/api/v1/payment/capture/{paymentID}
```


Captures the operation for the whole amount.

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |


URL parameter: 

| Parameter | Description | 
| --------- | ----------- | 
| `paymentID` | The payment identifier. | 

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