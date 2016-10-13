
## Encrypt Example: UnionPay 

> UnionPay example: 

```xml
<Encrypt>
  <shopLogin>90000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>10</amount>
  <shopTransactionId>SP_S2P_UnionPay_001</shopTransactionId>
  <paymentTypes>
    <paymentType>S2PUNI</paymentType>
  </paymentTypes>
  <OrderDetails>
    <CustomerDetail>
      <PrimaryPhone>+85211112222</PrimaryPhone>
      <PrimaryEmail>yangchenning@physics.cn</PrimaryEmail>
    </CustomerDetail>
  </OrderDetails>
</Encrypt>
``` 

Unipay does not need mandatory parameters. 

You must use `S2PUNI` as `paymentType`.

However, if you send the `PrimaryEmail` and `PrimaryPhone` fields in the [`OrderDetails`](#orderdetails) tag, you will jump straight to the UnionPay payment page; otherwise, an intermediary page asking for the email address is showed. 
