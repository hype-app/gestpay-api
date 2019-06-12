### GET payment/dataForBuyer


> Sandbox URL:

```
GET https://sandbox.gestpay.net/api/v1/payment/dataForBuyer/{paymentID}
```


> Production URL: 

```
GET https://ecomms2s.sella.it/api/v1/payment/dataForBuyer/{paymentID}
```


Retrieves the current payment data: amount, currency, Merchant Logo URL, Merchant Sign, addional fields sets by the merchant.

Before calling this method, you MUST have already called [POST payment/create](#post-payment-create). 

#### Request 

Headers: 

| Header          | Value                         | Description                                                        |
| --------------- | ----------------------------- | ------------------------------------------------------------------ |
| [`paymentToken`](#payment-token) | `{paymentToken}` | The payment token returned by [payment/create](##post-payment-create-beta) |

URL parameter: 

(Fields in **bold** are mandatory)

| Parameter | Description | 
| --------- | ----------- | 
| **`paymentID`** | The payment identifier. | 

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
      "merchantLogo":"https://ecomms2s.sella.it/temp/MerchantLogo.SVG",
      "sign":"MERCHANTSIGN",
      "amount":"1.00",
      "languageID":"ITA",
      "currency":"EUR",
      "visibleCustomFields":[  
        {  
            "myVisibleCustomField1":"myVisibleCustomField1",
            "myVisibleCustomField2":"myVisibleCustomField2"
        }
      ],
      "paymentID":"121213231"
    }
}
```

See the section [Handling responses & errors](#handling-responses-amp-errors) to learn how Gestpay reports errors.

Response `payload` details:


| Field          | Description 
| -------------- | -----------
| `merchantLogo` | The merchant logo image URL
| `sign` | The merchant's name. This can correspond to the business name.
| `amount` | The transaction amount 
| `languageID` | The buyer's language 
| `currency` ` | the payment [currency ISO code](#currency-codes) 
| `visibleCustomFields` | A list of custom fields that are set as visible to the user. These fields are set by the merchant. For further information see [sending custom parameters to Gestpay](<%= config[:doc_url]%>/gs/how-gestpay-works.html#sending-custom-parameters-to-gestpay). 