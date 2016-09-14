
## Encrypt

> A valid `Encrypt` can be called with just these fields - very easy: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>985.21</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
</Encrypt>
```

> Characters and strings that must not be used within the parameters encoded by GestPay and in customised information are: 

```
&  (space)  §     (     )     * 
<     >     ,     ;     :    *P1* 
/     [     ]     ?     =     -- 
/*    %     //
```

`Encrypt` is the main entrypoint for Gestpay. You must call `Encrypt` either if you want to use the standard payment page, or the custom iframe solution. 

These are the **mandatory** fields.

| Name | max length | description |
| ---- | :--------: | ----------- |
| **`shopLogin`** | 30 | shopLogin (Mandatory) |
| **`uicCode`** | 3 | Code identifying currency in which transaction amount is denominated - see [Currency Codes table](#currency-codes) - (Mandatory) | 
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

| Name | max length | description |
| ---- | :--------: | ----------- |
| `buyerName` | 50 | Buyer’s name and surname |
| `buyerEmail` | 50 | Buyer’s e-mail address |
| `languageId` | 2 | Code identifying language used in communication with buyer |
| `customInfo`<sup><a href="#fn1" id="ref1">1</a></sup> | 1000 | String containing specific information as configured in the merchant’s profile. See the next section for further explanations. |

<sup id="fn1">1. Each field can be up to a maximum of 300 characters in length. See next section for further explanations.<a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>

To send one or more of these parameters, you have to go in  **Payment Page -> Fields & Parameters** and enable the ones you want to send. 

### Sending custom data to Gestpay: `<customInfo>`

> The information included in `customInfo` will follow this form:

```xml
<customInfo>datum1=value1*P1*datum2=value2*P1* ... *P1*datumN=valueN</customInfo>
```

>Formally, it is a string containing couples of **`"key"="value"`** separated by the special string **`*P1*`**. <br>

`<customInfo>` is a special Gestpay field; it is used to send custom merchant-defined parameters that Gestpay will not touch. You can store everything, as long as the data respects the syntax described on the right.

The maximum length of the field is 1000 characters, and each individual parameter can be max 300 characters.

To start sending custom parameters, you must configure Gestpay to receive them. This can be done in the backoffice, in **Payment Page -> Fields & Parameters -> Add Parameter**. Here you can configure some aspects of this parameter, for example if has to be returned by the `Decrypt` webservice. Don't forget to populate the "languages" section. 

With this customization, you can *send* all the parameters you want, as long they fit the 1000 characters length. If you also want to **receive** the same parameters back when you `Decrypt` the response, enable `CustomInfo` parameter in the backoffice. 

### RequestToken

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

You can request a token that will represent the credit card for your website. You can use it later to handle recurring payments, or to avoid your customer to insert again his credit card data. This behaviour is compliant with PCI. Read more [here](https://hype-app.github.io/gestpay-doc/rec/handling-subscriptions.html).

| Name | max length | description |
| ---- | :--------: | ----------- |
| `requestToken` <sup><a href="#fn2" id="ref2">2</a></sup> | 25 | `MASKEDPAN` for a Standard Token any other value for Custom Token. Using `:FORCED:` before the token, it' s possible to have the token even if the transaction is not authorized. |

<sup id="fn2">2. Required only when a Token is needed within the transaction response. <br> In order to be able to request, obtain and use a Token, merchants need to appropriately set “Fields and Parameters” in the dedicated section of GestPay Merchant Back Office.<a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a></sup>

<a name="paymentTypes"></a>

### PaymentTypes

> If you want to enable only Credit Card or Masterpass for this payment, you can send the request like this: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>985</amount>
  <shopTransactionId>34az85ord19</shopTransactionId> 
  <paymentTypes>
    <paymentType>CREDITCARD</paymentType> 
    <paymentType>MASTERPASS</paymentType>
  </paymentTypes>
<Encrypt>
```

> If you only specify one payment type, Gestpay won't show the payment page but will redirect directly to the third party payment page: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>985</amount>
  <shopTransactionId>34az85ord19</shopTransactionId> 
  <paymentTypes>
    <paymentType>MASTERPASS</paymentType>
  </paymentTypes>
<Encrypt>
```

GestPay provides a way for merchants to dinamically define which payment methods must be displayed for each transaction.


In order to do that, merchants must properly set the tag `paymentType` that can be repeated as many times as needed, inside the tag `paymentTypes` (with a final “s”).

| Name | max length | description |
| ---- | :--------: | ----------- |
| `paymentTypes` |    | container of one or more `paymentType` |
| `paymentType`<sup><a href="#fn4" id="ref4">4</a></sup> |  25   | Set of tags to set the visibility of payment systems on payment page (see [Payment Type Codes table](#payment-type-codes)) | 

<sup id="fn4">4. **Payment Systems Visibility**. In order to be able to activate the Payment Systems Visibility the merchants need to appropriately set “Fields and Parameters” in the dedicated section of GestPay Merchant Back Office. The Payment System Visibility can be configured in the specific interface in the Back Office Merchant.<a href="#ref4" title="Jump back to footnote 4 in the text.">↩</a></sup>
