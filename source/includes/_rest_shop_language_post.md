### POST shop/language


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/shop/language/{shopLogin}
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/shop/language/
```


> Request body: 

```json
{
  "shopLogin":"",
  "language":"{Italian/English}"
}
```

Sets the language used by Gestpay. 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |

request body details: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`shopLogin`** | The shop identifier. | 
| `language` | The language to set. Currently accepted values are `Italian` and `English`. 

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
     "result": "OK"
     "language": "Italian"
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

The response contains the language set for Gestpay. 

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `result`      | The outcome of the operation: `OK` of `KO`
| `language` | the language just set