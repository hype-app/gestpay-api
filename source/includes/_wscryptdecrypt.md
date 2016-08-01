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

| Name | max length | description |
| ---- | :--------: | ----------- |
| `buyerName` | 50 | Buyer’s name and surname |
| `buyerEmail` | 50 | Buyer’s e-mail address |
| `languageId` | 2 | Code identifying language used in communication with buyer |
| `customInfo`<sup><a href="#fn1" id="ref1">1</a></sup> | 1000 | String containing specific information as configured in the merchant’s profile |

<sup id="fn1">1. Each field can be up to a maximum of 300 characters in length.<a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>

> `RequestToken` example we are requesting a token to store the payment data. 

### RequestToken

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
    <paymentType>PAYPAL</paymentType>
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

### Paypal

#### Enabling Paypal 

See `PaymentTypes` section.

#### Paypal Seller Protection 

> Paypal Seller Protection example: 

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
    <shipToCity>Torino</shipToCity>
    <shipToState>Torino</shipToState>
    <shipToCountryCode>IT</shipToCountryCode>
    <shipToZip>10100</shipToZip>
    <shipToStreet2/>
  </shippingDetails>
</Encrypt>
```

For more informations, checkout the [Seller Protection: Fields & Parameters](https://hype-app.github.io/gestpay-doc/gs/how-gestpay-works.html) page.


If you want to activate the **Paypal Seller Protection** you must:

- set `ppSellerProtection` to 1

| Name | max length | description |
| ---- | :--------: | ----------- |
| `ppSellerProtection` <sup><a href="#fn3" id="ref3">3</a></sup> | 1 | Parameter to set the use of a confirmed addresses |

<sup id="fn3">3. **PayPal Seller Protection parameter**. In order to be able to activate the Seller Protection Option the merchants need to appropriately set "Fields and Parameters" in the dedicated section of GestPay Merchant Back Office.<a href="#ref3" title="Jump back to footnote 3 in the text.">↩</a></sup>

- send all the shipment data in the `shipmentDetails` tag: 

| Name | max length | description |
| ---- | :--------: | ----------- |
| `shipToName` | 32 | String containing the shipping name |
| `shipToStreet` | 100 | String containing the shipping address |
| `shipToCity` | 40 | String containing the shipping city |
| `shipToState` | 40 | String containing the shipping state (see [State Codes table - TODO]()) |
| `shipToCountryCode` | 2 | String containing the shipping country code (see [Country Codes table - TODO]()) |
| `shipToZip` | 20 | String containing the shipping zip |
| `shipToStreet2` | 100 | String containing an additional shipping address field | 

#### Paypal recurring payments 

> In this way you can activate recurring payments on paypal. Note that no `paymentType` is needed. 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>985</amount>
  <shopTransactionId>34az85ord19</shopTransactionId> 
  <payPalBillingAgreementDescription>
    description of the agreement 
  </payPalBillingAgreementDescription>
<Encrypt>
```

A Buyer will be able to subscribe a Billing Agreement on PayPal website so authorizing the Merchant to debit his/her PayPal account in future transactions.

To use PayPal Reference Transaction it's necessary to fill the tag `PayPalBillingAgreementDescription` that can be present or not (in case of a normal PayPal payment it will be left empty or not passed at all).

The Encryption service, if field `payPalBillingAgreementDescription` is present and not empty, assumes that the payment method is PayPal (so `paymentType` field in this case is **not mandatory**: if present it must be valued `PAYPAL`).

If this tag is passed to Encryption, GestPay bypasses the Pagam page in every case (even if other payment methods are enabled for the Merchant).

This tag has to be filled with description of the goods, terms and conditions of the billing agreement.

### IDeal and MyBank (`PaymentTypeDetail` tag)

> MyBank example: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>985</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>MYBANK</paymentType>
  </paymentTypes>
  <paymentTypeDetail> 
    <MyBankBankCode>Code0000X</MyBankBankCode>
  </paymentTypeDetail> 
</Enrcypt>
```

> IDeal example: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>985</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>IDEAL</paymentType>
  </paymentTypes>
  <paymentTypeDetail> 
    <MyBankBankCode>Code0000Y</MyBankBankCode>
  </paymentTypeDetail> 
</Enrcypt>
```

If you choose let your users pay with MyBank or IDeal, you have to compile other two fileds.

More details can be found in at the [MyBank and IDeal](https://hype-app.github.io/gestpay-doc/oth/mybank.html) page.

 
| Name | max length | description |
| ---- | :--------: | ----------- |
| `paymentTypeDetail` |    | container of one of `MyBankBankCode` or `IdealBankCode` |
| `MyBankBankCode`<sup><a href="#fn5" id="ref5">5</a></sup> |  25   | Tag to set the Bank to show on payment page (the bank List is retrieved from `WsS2S.CallMyBankListS2S`) |
| `IdealBankCode`<sup><a href="#fn5" id="ref5">5</a></sup> |  25   | Tag to set the Bank to show on payment page (the bank List is retrieved from `WsS2S.CallIdealListS2S`) | 


<sup id="fn5">5. **paymentTypeDetail**. In order to be able to activate the payment Type Detail the merchants need to appropriately set “Fields and Parameters” in the dedicated section of GestPay Merchant Back Office. The correct merchant configuration of Sofort and Ideal has to be configured in the specific interface of Back Office Merchant.(1) Each field can be up to a maximum of 300 characters in length<a href="#ref5" title="Jump back to footnote 5 in the text.">↩</a></sup>


### Consel 

> Consel example: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>985</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>CONSEL</paymentType><!-- select CONSEL -->
  </paymentTypes>
  <Consel_MerchantPro>WIK</Consel_MerchantPro>
  <Consel_CustomerInfo>
    <Surname>Rossi</Surname>
    <Name>Mario</Name> 
    <TaxationCode>RSSMRA70D23H501H</TaxationCode> 
    <Address>Via Torino</Address>
    <City>Roma</City> 
    <StateCode>RM</StateCode> 
    <DateAddress>11/04/1999</DateAddress> 
    <Phone>0632...</Phone> 
    <MobilePhone>331...</MobilePhone>
  </Consel_CustomerInfo>
</Encrypt>
```

Here more info about [Consel Rate in Rete](https://hype-app.github.io/gestpay-doc/oth/consel-rate-in-rete.html).

| Name | max length | description |
| ---- | :--------: | ----------- |
| `Consel_MerchantPro` |  3  | Merchant Promotional Code (Mandatory to show Consel in the pagam's Payment Method) |
| `Consel_CustomerInfo` |    | Wrapper for Consel tags) |
| `Surname` |  30   | Customer Surname |
| `NAme` |  30   | Customer Name |
| `TaxationCode` |  30   | Customer Taxation Code |
| `Address` |  30   | Customer Address |
| `City` |  30   | Customer City |
| `StateCode` |  30   | Customer State Code |
| `DateAddress` |  30   | Date since the customer lives in the declared address (dd/mm/yyyy) |
| `Phone` |  30   | Customer Phone |
| `MobilePhone` |  30   | Customer Mobile phone | 

<sup id="fn6">6. **Line Items**: in case the buyer selects PayPal as payment method in the payment page, fields Name, Description, Quantity and UnitPrice of every occurrency of the ProductDetail tag will be used to show the transaction items details in PayPal payment page.<a href="#ref6" title="Jump back to footnote 6 in the text.">↩</a></sup>

## Decrypt