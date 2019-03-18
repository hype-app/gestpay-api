### POST check/expirydate


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/check/expirydate/
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/check/expirydate/
```

> Request body: 

```json
{
  "shopLogin":"",
  "creditcard":{
    "expMonth":"",
    "expYear":""
  }
}
```

Provides a formal validity check of the Exipry Date.

#### Request 

Headers: 

To receive a valid response from Gestpay you must use one of these headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |
| `paymentToken` | `"{paymentToken}"` | A payment token received during the payment process |


request body details: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`shopLogin`** | The shop identifier. | 
| `creditcard.expMonth` | The credit card exiry month
| `creditcard.expYear` | The credit card exiry year

#### Response 

> Success response example:<br>
> `200 OK`

```json
{
  "error":{  
    "code":"0",
    "description":"request correctly processed"
  },
  "payload": {
    "result": "OK"
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.


Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `result`   | `OK` of `KO`
