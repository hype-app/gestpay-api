### POST shop/paymentPage


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/shop/paymentPage/
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/shop/paymentPage/
```


> Request body: 

```json
{
  "shoplogin":"",
  "logo":[
    {
      "language":"",
      "imageURL":{
        "href":""
      },
      "altText":""
    }
  ],
  "defaultLang":""
}
```

 Sets a new Logo URL or Text and a default language. 


#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey {merchant Api Key}` | The merchant API key can be found in Axerve Merchant Back-Office. |

request body details: 

(Fields in **bold** are mandatory)

| Field          | Description 
| -------------- | -----------
| **`shopLogin`** | The shop login code. 
| `logo`  | an array of logo objects, one per language. 
| `logo.language` | The language for this particular logo
| `logo.imageURL.href` | A URL for the logo 
| `logo.altText` | The text to show for alternative readers, textual browsers, etc.
| `defaultLang` | the default language for the payment page 

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
    "logo":[
      {
        "language":"ITALIAN",
        "imageURL":{
          "href":"http://yourdomain/img/yourlogo.png"
        },
        "altText":""
      },
      {
        "language":"ENGLISH",
        "imageURL":{
          "href":"http://yourdomain/img/yourlogo.png"
        },
        "altText":""
      },
      {
        "language":"SPANISH",
        "imageURL":{
          "href":"http://yourdomain/img/yourlogo.png"
        },
        "altText":""
      },
      {
        "language":"GERMAN",
        "imageURL":{
          "href":""
        },
        "altText":"your NEW TEXT"
      },
      {
        "language":"FRENCH",
        "imageURL":{
          "href":""
        },
        "altText":"YOUR New TEXT"
      }
    ],
    "defaultLang":"ENGLISH"
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Axerve E-commerce Solutions reports errors.

The response contains the language set for Axerve E-commerce Solutions. 

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `result` | `OK` for success, `KO` for error.
| `logo`  | an array of logo objects, one per language. 
| `logo.language` | The language for this particular logo
| `logo.imageURL.href` | A URL for the logo 
| `logo.altText` | The text to show for alternative readers, textual browsers, etc.
| `defaultLang` | the default language for the payment page 
