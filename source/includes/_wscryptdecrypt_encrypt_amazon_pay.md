
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
  <!-- OPTIONAL: to retrieve a token for recurrent 
  payments, fill out this tag -->
  <amazonPayBillingAgreementDescription />
</Encrypt>
```

Amazon Pay does not need any mandatory parameters. Use `AMAZONPAY`  as Payment Type and the user will be redirected to Amazon Pay. 

<aside class="notice">
The shopTransactionId must be unique. 
</aside>



#### Recurring payments with Amazon Pay 

If you want to perform recurring payments, by filling this field you obtain a token that you can use with [`callPagamS2S`](#callpagams2s). 

Accepted values for `amazonPayBillingAgreementDescription`:

| Value | Description | 
| ----- | ----------- | 
| Empty or missing | no token is returned. | 
| `paynowandrecurring` | a payment is performed instantly and a token is generated for subsequent payments. | 
| `onlyrecurring` | only a token is returned. 