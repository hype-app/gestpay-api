### Encrypt Example: SEPA 

> SEPA Direct Debit example: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>10</amount><!-- mandatory, but not used -->
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>SEPADD</paymentType>
  </paymentTypes>
  <OrderDetails>
    <CustomerDetail>
      <FirstName>Stephen</FirstName>
      <Lastname>Hawk</Lastname>
      <PrimaryEmail>stephen@hawk.com</PrimaryEmail>
      <PrimaryPhone>+390123456789</PrimaryPhone>
    </CustomerDetail>
    <BillingAddress>
      <StreetNumber>8</StreetNumber>
      <StreetName>Piazza Martiri della Liberta</StreetName>
      <City>Biella</City>
      <ZipCode>13900</ZipCode>
      <CountryCode>IT</CountryCode>
    </BillingAddress>
  </OrderDetails>
</Encrypt>
```

To get a pre-approval from SEPA you must specify the paymentType `SEPADD`. 

This payment method requires some other mandatory data, like **customer details** and **billing address**.

The amount used in the Encrypt is mandatory, but it is discarded since the `Encrypt` call is used only to get a pre-approval token. 

The effectively charged amount is passed to [`callPagamS2S`](#callpagams2s) after the pre-approval token is received. 

If you are using API REST integration, you can find more information in [`payment/submit`](#post-payment-submit).
