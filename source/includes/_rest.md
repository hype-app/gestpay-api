# REST APIs

Welcome to Gestpay REST APIs. With these APIs you'll be able to perform a big set of operations. 

## URLs, endpoints and versions 

Gestpay provides two endpoints: 

|        |  URL  | 
| ------ | ----- |
| Sandbox | `https://sandbox.gestpay.net/api/{version}/{object}/{method}` | 
| Production | `https://ecomms2s.sella.it/api/{version}/{object}/{method}` | 

Methods are versioned, for example `v1`.

Methods marked with <span class="beta">sandbox</span> are available in sandbox only.

## Handling Responses & Errors

> Success response: <br>
> `200 OK`

```json
{
  "error":{
    "code":"0",
    "description":"request correctly processed"
  },
  "payload":{
    //Here you'll find the response 
    ...
  }
}
```

> Client Error <br>
> `400 Bad Request`

```json
{
   "error":{
      "code":"1105",
      "description":"Invalid parameter value"
   },
   "payload":{}
}
```

> Unauthorized request: <br>
> `403 Forbidden Access` 

```json
{
  "error": {
    "code": "1166",
    "description": "Invalid ApiKey"
  },
  "payload": {}
}
```

> General error: <br>
> 500 System Error

```json
{
  "error": {
    "code": "9999",
    "description": "Technical error"
  },
  "payload": {}
}
```

Gestpay uses HTTP status codes to indicate the result of an operations. 

Gestpay uses an HTTP status code that indicates the success (`2xx`) or failure (`4xx`, `5xx`) of the request.

Along with the status code, Gestpay sends a json in the body of the response, to better explain the response. 

The error `code` is one of the [error code list](#errors).

The error `description` contains the error explanation in common language. 

The `payload` is eventually filled with the response, in case of success.