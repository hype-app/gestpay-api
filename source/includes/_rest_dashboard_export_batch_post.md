### POST dashboard/export/batch


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/dashboard/export/batch/
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/dashboard/export/batch/
```


> Example POST for a NEW batch 

```json
{
  "shopLogin":"myShopLogin",
  "name":"Batch No 1",
  "ID":"",
  "search":{
    "ID":"11122121"
  },
  "fileType":"xls",
  "template":{
    "ID":"362"
  },
  "recipient":{
    "email":{
      "value":"myname@mydomain.co.in",
      "enabled":"true"
    },
    "ftp":{
      "value":"",
      "enabled":""
    }
  },
  "frequency":{
    "ID":"1S"
  },
  "level": [
    {"ID": ""}
    {"ID": ""}
  ],
  "prefix":"Su_",
  "password":"myPWD"
}
```

Creates a new export batch or modify an existing one. 

Headers: 

| Header | Value | Description |
| ------ | ----- | ----------- |
| `Authorization` | `apikey {merchant Api Key}` | The merchant API key can be found in Axerve Merchant Back-Office. |

Body details: 

(Fields in **bold** are mandatory)

| Field | Description |
| ----- | ----------- |
| **`shopLogin`** | your Shop Login, e.g. `GESPAY12345` or `XX12345678`
| **`name`** | The batch name 
| **`ID`** | If empty, creates a new batch. Otherwise it will update a previous one. Mandatory on update.
| **`sarch.ID`** | The Search ID that originates the batch. 
| `template.ID` | The Template ID used by the export. 
| **`fileType`** | The output file type: `txt`, `xls`, `csv`
| `recipient.email.value` | The email where the batch output will be sent
| `recipient.email.enabled` | `True` if the email should be sent to this address.
| `recipient.ftp.value` | The FTP address to upload the file 
| `recipient.ftp.enabled` | `True` if the batch should be uploaded via ftp. 
| **`frequency.ID`** | Determines the start day of the batch interval.See the [related table](#frequency-codes). 
| `prefix` | This value is put before the filename generated automatically by Axerve E-commerce Solutions. 
| `level` | Event level<ul><li><b>A</b>: TRANSACTION</li><li><b>E</b>: ALL EVENTS</li><li><b>AUT</b>: AUT</li><li><b>CAN</b>: CAN</li><li><b>MOV</b>: MOV</li><li><b>PRE</b>: PRE</li><li><b>STO</b>: STO</li></ul>






At least one of `recipient.email.enabled` and `recipient.ftp.enabled` must be `True`.

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
    "batch":{
      "name":"Batch No 1",
      "batchID":"1111"
    }
}
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Axerve E-commerce Solutions reports errors.

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `result` | `OK` ok `KO`
| `batch.name` | The name of the batch 
| `batch.id` | The batch ID 