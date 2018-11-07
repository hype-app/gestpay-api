### POST dashboard/export/file


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/dashboard/export/file
```

> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/dashboard/export/file
```

> Request Body: 

```json
{
  "shopLogin":"",
  "searchID":"",
  "fileType":"",
  "template":"",
  "email":"",
  "prefix":"",
  "password":""
}
```

Creates an export file based on the given template name and returns a temporary URL to download it.


#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |

Request Body: 

| Parameter | Description | 
| --------- | ----------- | 
| `shopLogin` | your Shop Login, e.g. `GESPAY12345` or `XX12345678`
| `sarchID` | The Search ID 
| `fileType` | The file type extension, one of `txt`, `xls`, `csv`
| `template` | The template to use, referenced by name
| `email` | The email where the file output will be sent
| `prefix` | This value is put before the filename generated automatically by gestpay. 
| `password` | If you want to setup a password for the zip file, fill this field with a password value

#### Response 

> Success Response:<br>
> `200 OK`

```json
{
   "error":{  
      "code":"0",
      "description":"request correctly processed"
   },
   "payload":{
    "result":"OK",
    "href":"https://ecomm.sella.it/backoffice/export/12342141asadfsa.txt"
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `result` | `OK` ok `KO`
| `href` | the url where the file can be downloaded 