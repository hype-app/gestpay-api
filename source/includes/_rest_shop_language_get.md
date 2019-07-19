### GET shop/language


> Sandbox URL:

```
GET https://sandbox.gestpay.net/api/v1/shop/language/{shopLogin}
```


> Production URL: 

```
GET https://ecomms2s.sella.it/api/v1/shop/language/{shopLogin}
```

Retrieves the current language. 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey {merchant Api Key}` | The merchant API key can be found in Axerve Merchant Back-Office. |

URL parameter: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`shopLogin`** | The shop identifier. | 

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
     "language": "Italian"
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Axerve E-commerce Solutions reports errors.

The response contains the language set for Axerve E-commerce Solutions. 

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `language` | One of  `Italian`, `English`