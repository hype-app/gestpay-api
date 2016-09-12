
## Encrypt Example: TenPay 

> TenPay example: 

```xml
<Encrypt>
  <shopLogin>90000001</shopLogin>
  <uicCode>103</uicCode><!--Hong Kong dollar-->
  <amount>0.01</amount>
  <shopTransactionId>SP_S2P_TenPay_001</shopTransactionId>
  <paymentTypes>
    <paymentType>S2PTEN</paymentType>
  </paymentTypes>
  <OrderDetails>
    <CustomerDetail>
      <FirstName>Charles Kuen</FirstName>
      <Lastname>Kao</Lastname>
      <PrimaryEmail>charleskuenkao@opticfiber.hk</PrimaryEmail>
    </CustomerDetail>
  </OrderDetails>
</Encrypt>
``` 

TenPay does not need mandatory parameters. 

You must use `S2PTEN` as `paymentType`.

However, if you send the `PrimaryEmail`, `FirstName` and `Lastname` fields, you will be redirected straight to TenPay payment page; otherwise, an intermediary page asking for this data is showed. 
