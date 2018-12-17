### POST check/pan


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/check/pan/
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/check/pan/
```

> Request body: 

```json
{
  "shopLogin":"",
  "creditcard": {
    "number": ""
  }
}
```

Provides a check of the digits of the PAN.

#### Request 

Headers: 

To receive a valid response from Gestpay you must use one of these headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |
| `paymentToken` | `paymentToken: "{paymentToken}"` | A payment token received during the payment process |


request body details: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`shopLogin`** | The shop identifier. | 
| **`creditcard.number`** | The credit card number to check.

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
    "checkDigit":"{OK/KO}",
    "company":"",
    "logo":{
      "large":"{url_logo_desktop_lage_PNG}",
      "mobile":"{url_logo_mobile_lage_PNG}",
      "vector":"{url_logo_svg}"
    }
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `checkDigit`   | `OK` of `KO`
| `company` | the card issuer
| `logo` | contains URLs for images in different formats: `large`, `mobile`, `vector`. 