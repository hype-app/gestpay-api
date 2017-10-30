## Encrypt Example: SEPA 

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
</Encrypt>
```

To get a pre-approval from SEPA you must specify the paymentType `SEPADD`. 

The amound used in the Encrypt is mandatory, but it is discarded since the `Encrypt` call is used only to get a pre-approval token. 

The effectively charged amount is passed to [`callPagamS2S`](#callpagams2s) after the pre-approval token is received. 
