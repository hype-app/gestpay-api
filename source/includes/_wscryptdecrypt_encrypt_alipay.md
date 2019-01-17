
### Encrypt Example: Alipay

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
    <CustomerDetail>
      <PrimaryEmail>alfred.nobel@dynamite.se</PrimaryEmail>
    </CustomerDetail>
  </OrderDetails>
</Encrypt>
```

Alipay does not need any mandatory parameters. Just specify the `PaymentType` `S2PALI` and the payment page will show to your user. 

If you specify the `PrimaryEmail` in the [`OrderDetails`](#orderdetails) tag, you will redirect your user to Alipay payment page where some fields are already filled. 

#### January 2019 breaking changes

If you are using _Alipay via Ecommerce_ you need to update your integration because from 21/01/2019 more mandatory fields will be required from Aliplay.

New mandatory fields are `ProductDetail`: you need to add one field for each item in the cart with the product name and the quantity. All these fields must me wrapped inside a `ProductDetails` tag.

> Alipay January 2019 example

```xml
<ecom:Encrypt>
  <ecom:shopLogin>tests2p</ecom:shopLogin>
  <ecom:uicCode>144</ecom:uicCode>
  <ecom:amount>1</ecom:amount>
  <ecom:shopTransactionId>alipay_test</ecom:shopTransactionId>
  <ecom:paymentTypes>
    <ecom:paymentType>S2PALI</ecom:paymentType>
  </ecom:paymentTypes>
  <ecom:OrderDetails>
    <ecom:CustomerDetail>
      <ecom:PrimaryEmail></ecom:PrimaryEmail>
    </ecom:CustomerDetail>
    <ecom:ProductDetails>
      <ecom:ProductDetail>
        <ecom:Name>product1</ecom:Name>
        <ecom:Quantity>1</ecom:Quantity>
      </ecom:ProductDetail>
      <ecom:ProductDetail>
        <ecom:Name>product2</ecom:Name>
        <ecom:Quantity>5</ecom:Quantity>
      </ecom:ProductDetail>
      ...
      ...
    </ecom:ProductDetails>
  </ecom:OrderDetails>
</ecom:Encrypt>
```

Other product information like the product code and its price are optional.
Keep in mind that the total must be exactly the sum of all items price.