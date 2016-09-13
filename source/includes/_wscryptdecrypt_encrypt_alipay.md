
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
    <CustomerDetail>
      <PrimaryEmail>alfred.nobel@dynamite.se</PrimaryEmail>
    </CustomerDetail>
  </OrderDetails>
</Encrypt>
```

Alipay does not need any mandatory parameters. Just specify the `PaymentType` `S2PALI` and the payment page will show to your user. 

