
## Encrypt Example: Sofort 

> SOFORT example: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>10</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>S2PSOF</paymentType>
  </paymentTypes>
  <OrderDetails>
    <CustomerDetail>
      <FirstName>Albert</FirstName>
      <Lastname>Einstein</Lastname>
      <PrimaryEmail>albert.einstein@princeton.edu</PrimaryEmail>
    </CustomerDetail>
    <BillingAddress>
      <CountryCode>DE</CountryCode>
    </BillingAddress>
  </OrderDetails>
</Encrypt>
``` 

Sofort does not need mandatory parameters, but if you send the following parameters, you will jump straight to the SOFORT payment page without authenticating. All these fields are children of [`OrderDetails`](#orderdetails).

| Name | max length | description |
| ---- | :--------: | ----------- |
| `CustomerDetail.FirstName` |  65  | Customer First Name |
| `CustomerDetail.Lastname` |  65  | Customer Last name |
| `CustomerDetail.PrimaryEmail` |  100  | Customer primary email |
| `BillingAddress.CountryCode` |  2  | Alpha-2 code. For example, use US for USA |

