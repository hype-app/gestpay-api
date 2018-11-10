### DELETE shop/token


> Sandbox URL:

```
DELETE https://sandbox.gestpay.net/api/v1/shop/token/{shopLogin}/{token}
```


> Production URL: 

```
DELETE https://ecomms2s.sella.it/api/v1/shop/token/{shopLogin}/{token}
```

Deletes a Token for this shop.
 

#### Request 

To authorize, use one of the followng headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |


URL parameter: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`shopLogin`** | The shop identifier. | 
| **`token`** | the token you want to delete. | 

#### Response 

> Success response example:<br>
> `200 OK`

```json
{
  "error":{  
    "code":"0",
    "description":"request correctly processed"
  },
  "payload":{
    "result":"OK",
    "token":"444445DHGSJA1111" 
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `result` | `OK` or `KO` 
| `token` | The just deleted token 
