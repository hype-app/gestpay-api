
## Encrypt Example: Qiwi

> Qiwi call example :

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>0.10</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>S2PQIW</paymentType>
  </paymentTypes>
  <OrderDetails>
    <CustomerDetail>
      <PrimaryPhone>0123456789</PrimaryPhone>
    </CustomerDetail>
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
