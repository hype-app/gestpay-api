### POST check/DCC


> Sandbox URL:

```
POST https://sandbox.gestpay.net/api/v1/check/DCC/
```


> Production URL: 

```
POST https://ecomms2s.sella.it/api/v1/check/DCC/
```

> Request body: 

```json
{
  "shopLogin" : "",
  "creditcard":{
      "number":""
  },
  "languageId":""
}
```

Checks if the card is elegible for Dynamic Currency Conversion. 

#### Request 

Headers: 

To receive a valid response from Gestpay you must use one of these headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| `Authorization` | `apikey "{merchant Api Key}"` | The merchant API key can be found in Gestpay Merchant Back-Office. |
| `paymentToken` | `paymentToken: "{paymentToken}"` | A payment token received during the payment process |


request body details: 

| Parameter | Description | 
| --------- | ----------- | 
| `shopLogin` | The shop identifier. | 
| `creditcard.number` | The credit card number.
| `languageId` | A [language ID](#language-codes).

#### Response 

> Success response example:<br>
> `200 OK`

```json
{  
  "DCC":{  
    "eligible":"TRUE",
    "currency":"PLN",
    "amount":"100",
    "disclaimer":"https://{domain}/DCC/disclaimer.aspx?transkey=dsajklq31223",
    "exchangeRate":"2%",
    "source":""
  },
  "paymentID":"111213213"
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `eligible`   | `TRUE` or `FALSE`
| `currency`  | The current currency of the card 
| `amount`  | the amount of the transaction 
| `disclaimer` | A URL that points to a disclaimer, explaining DCC. 
| `exchangeRate` | a percentage indicating the commission on the money exchange
| `paymentId` | the payment ID 
| `source` | In this field you'll find the source from whom information is taken, like exchange rates, etc. 
