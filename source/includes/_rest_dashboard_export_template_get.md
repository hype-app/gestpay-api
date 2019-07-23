### GET dashboard/export/template


> Sandbox URL:

```
GET https://sandbox.gestpay.net/api/v1/dashboard/export/template/{shopLogin}
```


> Production URL: 

```
GET https://ecomms2s.sella.it/api/v1/dashboard/export/template/{shopLogin}
```


Returns a list of all templates created for your `shopLogin`.

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey {merchant Api Key}` | The merchant API key can be found in Axerve Merchant Back-Office. |

URL parameters: 

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
    "template":[
      {
        "templateId":"121212212",
        "description":"New template 1",
        "creationDate":"12/04/2018 11:23",
        "default":"True",
        "columns":[
          "date",
          "shopTransactionID",
          "bankTransactionID",
          "transactionResult",
          "capturedAmount",
          "paymentID",
          "currency",
          ...
        ]
      },
      {
        "templateId":"121214442",
        "description":"Exporting Mov",
        "creationDate":"12/04/2018 11:23",
        "default":"False",
        "columns":[
          "date",
          "shopTransactionID",
          "bankTransactionID",
          "transactionResult",
          "capturedAmount",
          "paymentID",
          "currency",
          ...
        ]
      }
    ]
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Axerve E-commerce Solutions reports errors.

Response `payload` details: 

| Field          | Description 
| -------------- | -----------
| `template` | An array containing one or more templates.
| `template.templateId` | The template ID. 
| `template.description` | A description of the template in common language 
| `template.creationDate` | The creation date for this template
| `template.default` | `True` or `False`
| `template.columns` | an array of strings, representing the name of the properties that compose a transaction. 