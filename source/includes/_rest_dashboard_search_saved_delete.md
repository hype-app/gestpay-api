### DELETE dasboard/search/saved


> Sandbox URL:

```
DELETE https://sandbox.gestpay.net/api/v1/dashboard/search/saved/{shopLogin}/{searchID}
```

> Production URL: 

```
DELETE https://ecomms2s.sella.it/api/v1/dashboard/search/saved/{shopLogin}/{searchID}
```


Returns the list of saved searches in Axerve E-commerce Solutions. 

Headers: 

| Header          | Value                         | Description  |
| --------------- | ----------------------------- | ------------ |
| `Authorization` | `apikey {merchant Api Key}` | The merchant API key can be found in Axerve Merchant Back-Office. |

URL params: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`shopLogin`** | your Shop Login, e.g. `GESPAY12345` or `XX12345678`
| **`searchID`** | an existing searchID


#### Response 

> Success response:<br>
> `200 OK`

```json
{  
  "result":"OK",
  "search":{  
    "name":"mySavedSearch1",
    "searchID":"12423785932",
    "description":"My saved search"
  }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Axerve E-commerce Solutions reports errors.

`payload` details:

| Field | Description |
| ----- | ----------- |
| `result` | `OK` or `KO`
| `search` | an object with info on the deleted search object.

`search` details:

| Field | Description |
| ----- | ----------- |
| `name` | The search name.
| `searchID` | The ID assigned by Axerve E-commerce Solutions for this search.
| `description` | A textual description for the saved search.
