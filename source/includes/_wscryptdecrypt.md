# WSCryptDecrypt


WSCryptDecrypt web service is available on production and test servers and does not require any installation on the merchant’s server.

The merchant must implement – in the page(s) of the virtual store configured to handle payments – a call to the webservice which handles requests to use the GestPay encryption service.

To request the encryption service it is necessary to call the Encrypt method.

If the encryption operation is concluded correctly (TransactionResult tag value with OK), the encrypted data string returned by GestPay will be available by reading the value of the CryptDecryptString tag.

If this is not the case, the values of the ErrorCode and ErrorDescription tag will make it possible to identify the reasons that prevented the encryption operation. To request the decryption service it is necessary to call the Decrypt method, passing the shopLogin and CryptedString tags with the values communicated by GestPay in Phase III.

The information containing the transaction result will be available by reading the information in the XML response file corresponding to the result of the transaction.

## Encrypt

> Example `Encrypt` call with mandatory fields: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>985.21</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
</Encrypt>
```

`Encrypt` is the main entrypoint for Gestpay. You must call `Encrypt` either if you want to use the standard payment page, or the custom iframe solution. 

These are the mandatory fields.

| Name | max length | description |
| ---- | :--------: | ----------- |
| **`shopLogin`** | 30 | shopLogin (Mandatory) |
| **`uicCode`** | 3 | Code identifying currency in which transaction amount is denominated - see Currency Codes table TODO - (Mandatory) |
| **`amount`** | 9 | Transaction amount. Do not insert thousands separator. Decimals, max. 2 numbers, are optional and separator is the point (Mandatory) |
| **`shopTransactionID`** | 50 | Identifier attributed to merchant’s transaction (Mandatory) |


> Here is an example where we use `customInfo` and other non-mandatory fields. 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>1245.6</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <buyerName>Mario Bianchi</buyerName>
  <buyerEmail>mario.bianchi@isp.it</buyerEmail>
  <customInfo>BV_CODCLIENTE=12*P1*BV_SESSIONID=398</customInfo>
</Encrypt>
```

These are non-mandatory fields, but are direct children of the `Encrypt` root.  

|      |            |             |
| ---- | :--------: | ----------- |
| `buyerName` | 50 | Buyer’s name and surname |
| `buyerEmail` | 50 | Buyer’s e-mail address |
| `languageId` | 2 | Code identifying language used in communication with buyer |
| `customInfo`<sup><a href="#fn1" id="ref1">1</a></sup> | 1000 | String containing specific information as configured in the merchant’s profile |

> `RequestToken` example we are requesting a token to store the payment data. 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>985</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <requestToken>MASKEDPAN</requestToken>
</Encrypt>
``` 

### RequestToken

You can request a token that will represent the credit card for your website. You can use it later to handle recurring payments, or to avoid your customer to insert again his credit card data. This behaviour is compliant with PCI. Read more [here](https://hype-app.github.io/gestpay-doc/rec/handling-subscriptions.html).

|      |            |             |
| ---- | :--------: | ----------- |
| `requestToken` <sup><a href="#fn2" id="ref2">2</a></sup> | 25 | `MASKEDPAN` for a Standard Token any other value for Custom Token. Using `:FORCED:` before the token, it' s possible to have the token even if the transaction is not authorized. |

### ppSellerProtection, ShippingDetails 

```xml
<Encrypt>
<shopLogin>9000001</shopLogin>
<uicCode>242</uicCode>
<amount>985</amount>
<shopTransactionId>34az85ord19</shopTransactionId>
<ppSellerProtection>1</ppSellerProtection>
  <shippingDetails>
    <shipToName>Marco Bianchi</shipToName>
    <shipToStreet>Via Milano 1</shipToStreet>
    <shipToCity>T orino</shipToCity>
    <shipToState>T orino</shipToState>
    <shipToCountryCode>IT</shipToCountryCode>
    <shipToZip>10100</shipToZip>
    <shipToStreet2/>
  </shippingDetails>
</Encrypt>
```

For more informations, checkout the [Seller Protection: Fields & Parameters](https://hype-app.github.io/gestpay-doc/gs/how-gestpay-works.html) page.


If you want to activate the **Paypal Seller Protection** you must:

- set `ppSellerProtection` to 1

|      |            |             |
| ---- | :--------: | ----------- |
| `ppSellerProtection` <sup><a href="#fn3" id="ref3">3</a></sup> | 1 | Parameter to set the use of a confirmed addresses |

- send all the shipment data in the `shipmentDetails` tag: 

|      |            |             |
| ---- | :--------: | ----------- |
| `shipToName` | 32 | String containing the shipping name |
| `shipToStreet` | 100 | String containing the shipping address |
| `shipToCity` | 40 | String containing the shipping city |
| `shipToState` | 40 | String containing the shipping state (see [State Codes table - TODO]()) |
| `shipToCountryCode` | 2 | String containing the shipping country code (see [Country Codes table - TODO]()) |
| `shipToZip` | 20 | String containing the shipping zip |
| `shipToStreet2` | 100 | String containing an additional shipping address field | 


<sup id="fn1">1. Each field can be up to a maximum of 300 characters in length.<a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>

<sup id="fn2">2. Required only when a Token is needed within the transaction response. <br> In order to be able to request, obtain and use a Token, merchants need to appropriately set “Fields and Parameters” in the dedicated section of GestPay Merchant Back Office.<a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a></sup>

<sup id="fn3">3. **PayPal Seller Protection parameter**. In order to be able to activate the Seller Protection Option the merchants need to appropriately set "Fields and Parameters" in the dedicated section of GestPay Merchant Back Office.<a href="#ref3" title="Jump back to footnote 3 in the text.">↩</a></sup>

<sup id="fn4">4. **Payment Systems Visibility**. In order to be able to activate the Payment Systems Visibility the merchants need to appropriately set “Fields and Parameters” in the dedicated section of GestPay Merchant Back Office. The Payment System Visibility can be configured in the specific interface in the Back Office Merchant.<a href="#ref4" title="Jump back to footnote 4 in the text.">↩</a></sup>

<sup id="fn5">5. **paymentTypeDetail**. In order to be able to activate the payment Type Detail the merchants need to appropriately set “Fields and Parameters” in the dedicated section of GestPay Merchant Back Office. The correct merchant configuration of Sofort and Ideal has to be configured in the specific interface of Back Office Merchant.(1) Each field can be up to a maximum of 300 characters in length<a href="#ref5" title="Jump back to footnote 5 in the text.">↩</a></sup>

<sup id="fn6">6. **Line Items**: in case the buyer selects PayPal as payment method in the payment page, fields Name, Description, Quantity and UnitPrice of every occurrency of the ProductDetail tag will be used to show the transaction items details in PayPal payment page.<a href="#ref6" title="Jump back to footnote 6 in the text.">↩</a></sup>

## Decrypt