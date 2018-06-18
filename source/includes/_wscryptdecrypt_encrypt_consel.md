
### Encrypt Example: Consel 

> Consel example: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>985</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>CONSEL</paymentType><!-- select CONSEL -->
  </paymentTypes>
  <Consel_MerchantPro>WIK</Consel_MerchantPro>
  <Consel_CustomerInfo>
    <Surname>Rossi</Surname>
    <Name>Mario</Name> 
    <TaxationCode>RSSMRA70D23H501H</TaxationCode> 
    <Address>Via Torino</Address>
    <City>Roma</City> 
    <StateCode>RM</StateCode> 
    <DateAddress>11/04/1999</DateAddress> 
    <Phone>0632...</Phone> 
    <MobilePhone>331...</MobilePhone>
  </Consel_CustomerInfo>
</Encrypt>
```

Here more info about [Consel Rate in Rete](https://hype-app.github.io/gestpay-doc/oth/consel-rate-in-rete.html).

| Name | max length | description |
| ---- | :--------: | ----------- |
| `Consel_MerchantPro` |  3  | Merchant Promotional Code (Mandatory to show Consel in the pagam's Payment Method) |
| `Consel_CustomerInfo` |    | Wrapper for Consel tags) |
| `Surname` |  30   | Customer Surname |
| `NAme` |  30   | Customer Name |
| `TaxationCode` |  30   | Customer Taxation Code |
| `Address` |  30   | Customer Address |
| `City` |  30   | Customer City |
| `StateCode` |  30   | Customer State Code |
| `DateAddress` |  30   | Date since the customer lives in the declared address (dd/mm/yyyy) |
| `Phone` |  30   | Customer Phone |
| `MobilePhone` |  30   | Customer Mobile phone | 
