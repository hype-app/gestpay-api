### GET payment/refund


> Sandbox URL:

```
GET https://sandbox.gestpay.net/api/v1/payment/refund/{paymentID}
```


> Production URL: 

```
GET https://ecomms2s.sella.it/api/v1/payment/refund/{paymentID}
```


Fully deletes a settled transaction. 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey {merchant Api Key}` | The merchant API key can be found in Gestpay Merchant Back-Office. |

URL parameter: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`paymentID`** | The payment identifier. | 


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

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `transactionType` | always `refund` for this operation
| `transactionResult` | `OK` ok `KO`
| `bankTransactionID` | ID of the transaction assigned by Gestpay 
| `shopTransactionID` | shop transaction ID value 
| `paymentID`         | The payment ID 