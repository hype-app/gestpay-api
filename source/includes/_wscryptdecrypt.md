# WSCryptDecrypt API

GestPay `WsCryptDecrypt` web service is exposed by GestPay at following URLs: 

| environment | URL | 
| ----------- | --- | 
| test | `https://testecomm.sella.it/gestpay/GestPayWS/WsCryptDecrypt.asmx?wsdl` |
| production | `https://ecommS2S.sella.it/gestpay/GestPayWS/WsCryptDecrypt.asmx?wsdl` |

WSCryptDecrypt web service is available on production and test servers and does not require any installation on the merchant’s server.

The merchant must implement – in the page(s) of the virtual store configured to handle payments – a call to the webservice which handles requests to use the GestPay encryption service.

To request the encryption service it is necessary to call the Encrypt method.

If the encryption operation is concluded correctly (`TransactionResult` tag value with OK), the encrypted data string returned by GestPay will be available by reading the value of the `CryptDecryptString` tag.

If not, the values of the `ErrorCode` and `ErrorDescription` tag will make it possible to identify the reasons that prevented the encryption operation. To request the decryption service it is necessary to call the `Decrypt` method, passing the `shopLogin` and `CryptedString` tags with the values communicated by GestPay.

The information containing the transaction result will be available by reading the information in the XML response file corresponding to the result of the transaction.

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

> The information included in `customInfo` will follow this form:

```
datum1=value1*P1*datum2=value2*P1* ... *P1*datumN=valueN
```

>The separator between logically different information is the reserved sequence of characters `*P1*`. 

> Other characters that must not be used within the parameters encoded by GestPay and in customised information are: 

```
&  (space)  §     (     )     * 
<     >     ,     ;     :    *P1* 
/     [     ]     ?     =     -- 
/*    %     //
```


These are non-mandatory fields, but are direct children of the `Encrypt` root.  

| Name | max length | description |
| ---- | :--------: | ----------- |
| `buyerName` | 50 | Buyer’s name and surname |
| `buyerEmail` | 50 | Buyer’s e-mail address |
| `languageId` | 2 | Code identifying language used in communication with buyer |
| `customInfo`<sup><a href="#fn1" id="ref1">1</a></sup> | 1000 | String containing specific information as configured in the merchant’s profile |

<sup id="fn1">1. Each field can be up to a maximum of 300 characters in length.<a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>

Information included in the `customInfo` attribute is defined in the Back Office environment in the **"Fields & Parameters"** section.



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


## Encrypt result 

> A succesful `Encrypt` call would be like this: 

```xml
<EncryptResult>
  <GestPayCryptDecrypt>
    <TransactionType>ENCRYPT</TransactionType>
    <TransactionResult>OK</TransactionResult>
    <CryptDecryptString>897543..</CryptDecryptString>
    <ErrorCode>0</ErrorCode>
    <ErrorDescription/>
  </GestPayCryptDecrypt>
</EncryptResult>
```

`Encrypt` web service returns back the following information in xml: 

| Name | max length | description |
| ---- | :--------: | ----------- |
| `TransactionType` |  7  | Decode the transaction type request (`DECRYPT`, `ENCRYPT`) |
| `TransactionResult` | 2 | Transaction result (`OK`/ `KO`) | 
| `CryptDecryptString` | ..... | Encrypted string get by parameter set in the xml request | 
| `ErrorCode` | 9 | Error code | 
| `ErrorDescription` | 255 | Error description | 

## Encrypt example: Paypal

### Enabling Paypal 

See `PaymentTypes` example. 

### Show product info at paypal's buying page 

> User will see a `Television` in his paypal checkout. 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>100</amount>
  <shopTransactionId>34az85ord19</shopTransactionId> 
  <paymentTypes>
    <paymentType>PAYPAL</paymentType>
  </paymentTypes>
  <OrderDetails>
    <ProductDetails><!-- if present, will be shown in paypal checkout -->
      <ProductDetail><!-- one or more -->
        <ProductCode>1</ProductCode>
        <SKU>AK-7</SKU> 
        <Name>TV2000</Name> 
        <Description>Television</Description> 
        <Quantity>1</Quantity> 
        <Price>100</Price> 
        <UnitPrice>100</UnitPrice> 
        <Type>1</Type> 
        <Vat>10</Vat> 
        <Discount>0</Discount>
      </ProductDetail> 
    </ProductDetails>
  </OrderDetails>
<Encrypt>
```

If you populate these fields accordingly, you can show your user the list of products: 

|  |  |  |
| ---- | :--------: | ----------- | 
| `ProductCode` |  12  | Article’s product Code |
| `SKU` |  50  | Article’s Stock Keeping Unit |
| `Name` <sup><a href="#fn6" id="ref6">6</a></sup> |  100  | Article’s name |
| `Description` <sup><a href="#fn6" id="ref6">6</a></sup> |  255  | Article’s description |
| `Quantity` <sup><a href="#fn6" id="ref6">6</a></sup> |  3  | The number of products |
| `Price` |  12  | Article’s price |
| `UnitPrice` <sup><a href="#fn6" id="ref6">6</a></sup> |  12  | Article’s Unit Price |
| `Type` |  2  | The type of article: 1-product, 2-shipping, 3-handling |
| `Vat` |  2  | Value-Added Tax (the value of the tax) |
| `Discount` |  2  | The amount offered by you as discount |

### Paypal Seller Protection 

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

<sup id="fn3">3. **PayPal Seller Protection parameter**. In order to be able to activate the Seller Protection Option the merchants need to appropriately set "Fields and Parameters" in the dedicated section of GestPay Merchant Back Office.<a href="#ref3" title="Jump back to footnote 3 in the text.">↩</a></sup>


### Paypal recurring payments 

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


| Name | max length | description |
| ---- | :--------: | ----------- |
| `payPalBillingAgreementDescription` | 127 | Description of the goods, terms and conditions of the billing agreement |

The Encryption service, if field `payPalBillingAgreementDescription` is present and not empty, assumes that the payment method is PayPal (so `paymentType` field in this case is **not mandatory**: if present it must be valued `PAYPAL`).

If this tag is passed to Encryption, GestPay bypasses the Pagam page in every case (even if other payment methods are enabled for the Merchant).

This tag has to be filled with description of the goods, terms and conditions of the billing agreement.

<aside class="notice">When using paypal Billing Agreement, you will get a Token to use later with the callPagamS2S webservice. </aside>

## Encrypt Example: IDeal and MyBank

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


## Encrypt Example: Consel 

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

## Encrypt Example: Sofort 

> SOFORT example: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>985</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>SOFORT</paymentType>
  </paymentTypes>
  <OrderDetails>
    <CustomerDetails>
      <FirstName>Albert</FirstName>
      <Lastname>Einstein<Lastname>
      <PrimaryEmail>albert.einstein@princeton.edu</PrimaryEmail>
    </CustomerDetails>
    <BillingAddress>
      <CountryCode>DE</CountryCode>
    </BillingAddress>
  </OrderDetails>
``` 

Sofort does not need mandatory parameters, but if you send the following parameters, you will jump straight to the SOFORT payment page without authenticating. All these fields are children of `OrderDetails`. 

| Name | max length | description |
| ---- | :--------: | ----------- |
| `CustomerDetail.FirstName` |  65  | Customer First Name |
| `CustomerDetail.Lastname` |  65  | Customer Last name |
| `CustomerDetail.PrimaryEmail` |  100  | Customer primary email |
| `BillingAddress.CountryCode` |  2  | Alpha-2 code. For example, US is “US” |

### Klarna

> Here is an example of how to enable Klarna with Gestpay.

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>100</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>S2PKLA</paymentType>
  </paymentTypes>
  <OrderDetails>
    <CustomerDetails>
      <FirstName>Alfred</FirstName>
      <Lastname>Nobel<Lastname>
      <PrimaryEmail>alfred.nobel@dynamite.se</PrimaryEmail>
      <SocialSecurityNumber>18331021+129</SocialSecurityNumber>
    </CustomerDetails>
    <BillingAddress>
      <StreetNumber>14<StreetNumber>
      <StreetName>Sturegatan</StreetName>
      <City>Stockholm</City>
      <ZipCode>SE-102</ZipCode>
      <CountryCode>SE</CountryCode><!--mandatory-->
    </BillingAddress>
    <ProductDetails>
      <ProductDetail><!-- mandatory -->
        <ProductCode>1</ProductCode>
        <SKU>AK-7</SKU> 
        <Name>TV2000</Name> 
        <Description>Television</Description> 
        <Quantity>1</Quantity> 
        <Price>100</Price> 
        <UnitPrice>100</UnitPrice> 
        <Type>1</Type> 
        <Vat>10</Vat> 
        <Discount>0</Discount>
      </ProductDetail> 
    </ProductDetails>
  </OrderDetails>
</Encrypt>
```

Klarna requires only two parameters as mandatory, children of `OrderDetails`: 

| Name | max length | description |
| ---- | :--------: | ----------- |
| `BillingAddress.CountryCode` | 2 | one of [AT &#124; DK &#124; FI &#124; DE &#124; NL &#124; NO &#124; SE] |
| `ProductDetails.ProductDetail` |    | the list of ordered products |

If you send other fields, your customer will find them already filled: 

|  |  |  |
| ---- | :--------: | ----------- |
| `CustomerDetail.FirstName` |  65  | Customer First Name |
| `CustomerDetail.Lastname` |  65  | the list of ordered products | 
| `CustomerDetail.PrimaryEmail` | 100 | Customer primary email |
| `CustomerDetail.SocialSecurityNumber` | 20 | Customer's social or fiscal identifier (for Klarna Use) |
| `BillingAddress.StreetNumber` | 5 | Shipping Street Number |
| `BillingAddress.StreetName` | 100 | Shipping Street |
| `BillingAddress.City` | 50 | Billing City |
| `BillingAddress.ZipCode` | 50 | Billing Zip Code |

`ProductDetails` can have one or more `ProductDetail`. Here is a description of its fields:

|  |  |  |
| ---- | :--------: | ----------- | 
| `ProductCode` |  12  | Article’s product Code |
| `SKU` |  50  | Article’s Stock Keeping Unit |
| `Name` <sup><a href="#fn6" id="ref6">6</a></sup> |  100  | Article’s name |
| `Description` <sup><a href="#fn6" id="ref6">6</a></sup> |  255  | Article’s description |
| `Quantity` <sup><a href="#fn6" id="ref6">6</a></sup> |  3  | The number of products |
| `Price` |  12  | Article’s price |
| `UnitPrice` <sup><a href="#fn6" id="ref6">6</a></sup> |  12  | Article’s Unit Price |
| `Type` |  2  | The type of article: 1-product, 2-shipping, 3-handling |
| `Vat` |  2  | Value-Added Tax (the value of the tax) |
| `Discount` |  2  | The amount offered by you as discount |

<sup id="fn6">6. **Line Items**: in case the buyer selects PayPal as payment method in the payment page, fields Name, Description, Quantity and UnitPrice of every occurrency of the ProductDetail tag will be used to show the transaction items details in PayPal payment page.<a href="#ref6" title="Jump back to footnote 6 in the text.">↩</a></sup>

## Encrypt Example: Qiwi

> Qiwi call example :

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>100</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>S2PQIW</paymentType>
  </paymentTypes>
  <OrderDetails>
    <CustomerDetails>
      <PrimaryPhone>0123456789</PrimaryPhone>
    </CustomerDetails>
    <BillingAddress>
      <CountryCode>US</CountryCode>
    </BillingAddress>
  </OrderDetails>
</Encrypt>
```

Qiwi does not need mandatory parameters, but if you send these few parameters you can have a frictionless call directly to the first screen of QIWI where authentication data are asked. These fields are children of `OrderDetails`:

| Name | max length | description |
| ---- | :--------: | ----------- |
| `CustomerDetail.PrimaryPhone` | 20 | Customer's phone including prefix |
| `BillingAddress.CountryCode` | 2 | Alpha-2 code example for US is “US” |

This mean that no others values are asked to the buyers; but if these field are not sent with the payment, a page will be displayed in order to ask the necessary fields like Phone and CountryCode of the buyer.

## Encrypt Example: Yandex

> Yandex Example: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>100</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>S2PYAN</paymentType>
  </paymentTypes>
  <OrderDetails>
    <CustomerDetails>
      <PrimaryEmail>alfred.nobel@dynamite.se</PrimaryEmail>
  </OrderDetails>
</Encrypt>
```

Yandex does not need mandatory parameters; but if you send  `CustomerDetail.PrimaryEmail` you can have a frictionless call directly to the first screen of Yandex where authentication data are asked.

| Name | max length | description |
| ---- | :--------: | ----------- |
| `CustomerDetail.PrimaryEmail` | 100 | Customer primary email |

This mean that no others values are asked to the buyer; if this field is not sent with the payment, a page will ask the necessary fields.

## Encrypt Example: Alipay

> Alipay example: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>100</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>S2PALI</paymentType>
  </paymentTypes>
  <OrderDetails>
    <CustomerDetails>
      <PrimaryEmail>alfred.nobel@dynamite.se</PrimaryEmail>
  </OrderDetails>
</Encrypt>
```

Alipay does not need any mandatory parameters. Just specify the `PaymentType` `S2PALI` and the payment page will show to your user. 


## Decrypt

> A `Decrypt` request: 

```xml
 <Decrypt>
  <shopLogin>9000001</shopLogin>
  <CryptedString>HT987YU....</CryptedString>
 </Decrypt>
```

GestPay communicates the payment transaction result to the merchant through an encrypted string (parameter b of the call to the url preconfigured by the merchant) with a set of transaction's informations.

To Decrypt the data it is necessary to use Decrypt method passing the following parameters, the tags' names are case sensitive:

| Name | max length | description |
| ---- | :--------: | ----------- |
| `shopLogin` | 30 | Shop Login | 
| `CryptedString` | ...... | Encrypted string get by parameter b of the call to the url preconfigured by the merchant | 

## Decrypt result 

> GestPay authenticates the calling server and checks the encrypted data string. If the checks are passed, it returns an unencrypted data string containing the transaction result: 

```xml
 <DecryptResult>
  <GestPayCryptDecrypt xmlns="">
    <TransactionType>DECRYPT</TransactionType>
    <TransactionResult>OK</TransactionResult>
    <ShopTransactionID>34az85ord19</ShopTransactionID>
    <BankTransactionID>656</BankTransactionID>
    <AuthorizationCode>983RT4</AuthorizationCode>
    <Currency>242</Currency>
    <Amount>985.40</Amount>
    <ErrorCode>0</ErrorCode>
    <ErrorDescription>Transazione correttamente effettuata</ErrorDescription>
  </GestPayCryptDecrypt>
</DecryptResult>
```

Decrypt webservice returns back the following information in the xml.

The minimum information returned back as transaction result is marked in bold. 

| Name | max length | description |
| ---- | :--------: | ----------- |
| `TransactionType` | 7 | Decode the transaction type request (`DECRYPT`, `ENCRYPT`) |
| **`TransactionResult`** | **2** | **Transaction result (`OK`/`KO`)** | 
| **`ShopTransactionID`** | **50** | **Identifier attributed to merchant’s transaction** | 
| **`BankTransactionID`** | **9** | **Identifier attributed to the transaction by GestPay** |
| **`AuthorizationCode`** | **6** | **Transaction authorisation code** | 
| **`Currency`** | **3** | **Code identifying currency in which transaction amount is denominated (see [Currency Codes](#currency-codes) table)** |
| **`Amount`** | **9** | **Transaction amount. Decimals (max. 2 numbers) are optional and separator is the point (see examples)** | 
| `Country` | 30 | Nationality of the issuing card institute | 
| `CustomInfo` | 1000 |  String that has the specific information as configured in themerchant’s profile. Each field can be up to a maximum of 300 characters in length. | 
| `Buyer.BuyerName` | 50 | Buyer’s name and surname | 
| `Buyer.BuyerEmail` | 50 | Buyer’s e-mail address | 
| `TDLevel` | 255 | Level of authentication for VBV Visa / Mastercard Securecode transactions. The string may have the value `FULL` or `HALF` |
| **`ErrorCode`** | **9** | **Error code** | 
| **`ErrorDescription`** | **255** | **Error description (localized in your language)** | 
| `AlertCode` | 9 | Alert code | 
| `AlertDescription` | 255 | Alert description in chosen language | 
| `CVVPresent` | 1| Credit Card security code flag | 
| `MaskedPAN` | 25 | Masked Pan string | 
| `PaymentMethod` | 100 | Indicates the used Payment Method | 
| `TOKEN` | 25 | String containing the token value | 
| `ProductType` | 100 |  String containing Card Type | 
| `TokenExpiryMonth` | 2 | String containing the token expiry month | 
| `TokenExpiryYear` | 2 | String containing the token expiry year | 
| `TransactionKey` | 18 | Transaction identifier for 3D transactions. Not used in transactions managed with the Payment Page. It is useful only in Server-Server transactions | 
| `VbV` | 2 | Verified By Visa Flag | 
| `VbVRisp` |  | Encrypted string containing information for 3D- Secure transactions. Not used in transactions managed with the Payment Page. It is useful only in Server-Server transactions | 
| `VbVBuyer` | 2 | Information about the enrolment of the buyer's card to 3D-Secure protocol: `OK` means that the card is enrolled, `KO` means that the card is not enrolled | 
| `VbVFlag` | 2 | Information about the 3D-Secure status. Not used in transactions managed with the Payment Page. It is useful only in Server-Server transactions. | 


Other information is defined as optional and will be returned according to the merchant’s profile settings made in the GestPay Back Office environment.

A transaction result can be interpreted by verifying the `TransactionResult` field value. The possible values are:

|Transaction Result | Description | 
| ----------------- | ----------- | 
| `OK` | Positive transaction result | 
| `KO` | Negative transaction result | 
| `XX` | Suspended transaction result. This is not a final result: Gestpay will send `XX` when the outcome is asynchronous. Right now these systems are `MyBank`, `Sofort`, `IDeal`, `Bank Transfer`. In the future, this code might be returned with other payment systems (bitcoins, for example). <br/> A new communication will be provided to the merchant when the transaction will assume the final `OK`/`KO` status). <br/> **If you receive a `XX` code, don't send your goods but wait to receive the actual payment.** The customer with `XX` transaction is redirect to URL for positive response.   | 
