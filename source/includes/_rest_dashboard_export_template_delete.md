### DELETE dashboard/export/template


> Sandbox URL:

```
DELETE https://sandbox.gestpay.net/api/v1/dashboard/export/template/{shopLogin}/{templateID}
```


> Production URL: 

```
DELETE https://ecomms2s.sella.it/api/v1/dashboard/export/template/{shopLogin}/{templateID}
```

Deletes a template. 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey {merchant Api Key}` | The merchant API key can be found in Gestpay Merchant Back-Office. |

URL parameters: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`shopLogin`** | The shop identifier. | 
| **`templateID`** | The template you want to delete. | 

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
    "template":{
      "templateId":"121212212",
      "description":"New template 1"
    }
  } 
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

Response `payload` details: 

| Field          | Description 
| -------------- | -----------
| `result` | `OK` or `KO`
| `template.templateId` | The deleted template ID.
| `template.description` | The deleted template description.
