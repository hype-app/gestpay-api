
## Encrypt Example: Yandex

> Yandex Example: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>10</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>S2PYAN</paymentType>
  </paymentTypes>
  <OrderDetails>
    <CustomerDetail>
      <PrimaryEmail>alfred.nobel@dynamite.se</PrimaryEmail>
    </CustomerDetail>
  </OrderDetails>
</Encrypt>
```

Yandex does not need mandatory parameters; but if you send `CustomerDetail.PrimaryEmail` in the [`OrderDetails`](#orderdetails) tag you can have a frictionless call directly to the first screen of Yandex where authentication data are asked.

| Name | max length | description |
| ---- | :--------: | ----------- |
| `CustomerDetail.PrimaryEmail` | 100 | Customer primary email |

This mean that no others values are asked to the buyer; if this field is not sent with the payment, a page will ask the necessary fields.
