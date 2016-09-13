## Encrypt Example: Klarna

> Here is an example of how to enable Klarna with Gestpay.

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>10</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>S2PKLA</paymentType>
  </paymentTypes>
  <OrderDetails>
    <CustomerDetail>
      <FirstName>Alfred</FirstName>
      <Lastname>Nobel<Lastname>
      <PrimaryEmail>alfred.nobel@dynamite.se</PrimaryEmail>
      <SocialSecurityNumber>18331021+129</SocialSecurityNumber>
    </CustomerDetail>
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
