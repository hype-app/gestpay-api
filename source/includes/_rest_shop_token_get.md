### GET shop/token


> Sandbox URL:

```
GET https://sandbox.gestpay.net/api/v1/shop/token/{shopLogin}
```


> Production URL: 

```
GET https://ecomms2s.sella.it/api/v1/shop/token/{shopLogin}
```

 Retrieves the token list
 

#### Request 

To authorize, use one of the followng headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |


URL parameter: 

| Parameter | Description | 
| --------- | ----------- | 
| `shopLogin` | The shop identifier. | 

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
      "tokens":["444445GFDRBH4448","444425GFSRBH4448"] 
    }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `tokens` | An array containing all the tokens created for this shop.
