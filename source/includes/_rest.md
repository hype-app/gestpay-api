# REST APIs

Welcome to Axerve E-commerce Solutions REST APIs. With these APIs you'll be able to perform a big set of operations. 

## URLs, endpoints and versions 

Axerve E-commerce Solutions provides two endpoints: 

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

Axerve E-commerce Solutions uses HTTP status codes to indicate the result of an operations. 

Axerve E-commerce Solutions uses an HTTP status code that indicates the success (`2xx`) or failure (`4xx`, `5xx`) of the request.

Along with the status code, Axerve E-commerce Solutions sends a json in the body of the response, to better explain the response. 

The error `code` is one of the [error code list](#errors).

The error `description` contains the error explanation in common language. 

The `payload` is eventually filled with the response, in case of success.

## Payment token

`paymentToken` is generated during the creation of a new payment with [payment/create](#post-payment-create) and it's unique for every transaction. It can be insert in the headers for authenticate call for that payment.

The token is valid util the payment is not authorized (before the [payment/submit](/#post-payment-submit)).

<aside class="notice">You can use the payment token for the 24h next to the authorization for payment/detail calls, up to 10 times (5 in sandbox).</aside>