
## Encrypt example: Paypal

### Enabling Paypal 

> If you only specify `PAYPAL` payment type, Gestpay won't show the payment page but will redirect directly to Paypal's payment page: 

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

To enable Paypal, follow the same steps of the paragraph [`PaymentTypes` example](#paymentTypes). Remeber to enable the fields in the backoffice. 

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
    <shipToState>TO</shipToState>
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
| `shipToState` | 40 | String containing the shipping state (see [Paypal State Codes table](#paypal-state-amp-province-codes)) |
| `shipToCountryCode` | 2 | String containing the shipping country code (see [Paypal Country Codes table](#paypal-country-codes)) |
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
