
### Encrypt Example: Amazon Pay

> Amazon Pay example: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>100</amount>
  <shopTransactionId>34az85ord20</shopTransactionId>
  <paymentTypes>
    <paymentType>AMAZONPAY</paymentType>
  </paymentTypes>
</Encrypt>
```

Amazon Pay does not need any mandatory parameters. Use `AMAZONPAY`  as Payment Type and the user will be redirected to Amazon Pay. 

<aside class="notice">
The shopTransactionId must be unique. 
</aside>