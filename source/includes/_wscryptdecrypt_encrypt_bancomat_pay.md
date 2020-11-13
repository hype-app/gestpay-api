
### Encrypt Example: BancomatPay <span class="beta">Under development</span>

> BancomatPay example:  

Giropay does not need mandatory parameters.

You must use `BANCOMATPAY` as `paymentType`.

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>100</amount>
  <shopTransactionId>34az85ord20</shopTransactionId>
  <paymentTypes>
    <paymentType>BANCOMATPAY</paymentType>
  </paymentTypes>
  <BancomatPayPhoneNumber>345465645645</BancomatPayPhoneNumber>
</Encrypt>
```

<aside class="active">When you use BancomatPay with <code>Encrypt</code> call, you must add <code>BancomatPayPhoneNumber</code> parameter.</aside>