### POST payment/cancel <span class="beta">BETA</span>


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/payment/cancel/{paymentID}
```

> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/payment/cancel/{paymentID}
```


> Example request: 

```json
{
  "transactionType":"cancel",
  "transactionResult":"",
  "bankTransactionID":"",
  "shopTransactionID":"",
  "paymentID":""
}
```

Deletes an authorized transaction. 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |

Request Body: 

| Field               | Description             
| ------------------- | ----------------------- 
| `shopLogin`         | Your shop login         
| `bankTransactionID` | The bank transaction ID 
| `shopTransactionID` | the shop transaction ID 
| `paymentID`         | The payment ID 
| `cancelReason`      | free text of cancel reason.For  Gestpay Guaranteed Payment users, this field is mandatory.


#### Response 

> Success Response:<br>
> `200 OK`

```json
{
   "error":{  
      "code":"0",
      "description":"request correctly processed"
   },
   "payload":{}
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.