### GET shop/paymentPage


> Sandbox URL:

```
GET https://sandbox.gestpay.net/api/v1/shop/methods/
```


> Production URL: 

```
GET https://ecomms2s.sella.it/api/v1/shop/methods/
```

Retrieves the current text or URL for the Logo, the default language, and the URL that will display the preview of the payment page. 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |

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
  "error": {
    "code": "0",
    "description": "request correctly processed"
  },
  "payload": {
    "logo": [{
      "language": "ITALIAN",
      "imageURL": {
        "href": "http://yourdomain/img/yourlogo.png"
      },
      "altText": ""
    },{
      "language": "ENGLISH",
      "imageURL": {
        "href": "http://yourdomain/img/yourlogo.png"
      },
      "altText": ""
    },{
      "language": "SPANISH",
      "imageURL": {
        "href": "http://yourdomain/img/yourlogo.png"
      },
      "altText": ""
    },{
      "language": "GERMAN",
      "imageURL": {
        "href": "http://yourdomain/img/yourlogo.png"
      },
      "altText": "YOUR TEXT"
    },{
      "language": "FRENCH",
      "imageURL": {
        "href": "http://yourdomain/img/yourlogo.png"
      },
      "altText": "YOUR TEXT"
    }],
    "defaultLang": "ENGLISH" 
  } 
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

The response contains the language set for Gestpay. 

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `logo`  | an array of logo objects, one per language. 
| `logo.language` | The language for this particular logo
| `logo.imageURL.href` | A URL for the logo 
| `logo.altText` | The text to show for alternative readers, textual browsers, etc.
| `defaultLang` | the default language for the payment page 
