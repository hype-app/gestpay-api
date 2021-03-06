### GET shop/version


> Sandbox URL:

```
GET https://sandbox.gestpay.net/api/v1/shop/version/{shopLogin}
```


> Production URL: 

```
GET https://ecomms2s.sella.it/api/v1/shop/version/{shopLogin}
```


Retrieves the current merchant version: `Starter`, `Professional`, `Unlimited`.

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
     "version": "Unlimited"
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Axerve E-commerce Solutions reports errors.

The response contains the Axerve E-commerce Solutions version for this shop. 

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `version` | One of  `Starter`, `Professional`, `Unlimited`.