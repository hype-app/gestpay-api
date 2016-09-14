
## Encrypt Example: IDeal and MyBank

> MyBank example: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>985</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>MYBANK</paymentType>
  </paymentTypes>
  <paymentTypeDetail> 
    <MyBankBankCode>Code0000X</MyBankBankCode>
  </paymentTypeDetail> 
</Enrcypt>
```

> IDeal example: 

```xml
<Encrypt>
  <shopLogin>9000001</shopLogin>
  <uicCode>242</uicCode>
  <amount>10</amount>
  <shopTransactionId>34az85ord19</shopTransactionId>
  <paymentTypes>
    <paymentType>IDEAL</paymentType>
  </paymentTypes>
  <paymentTypeDetail> 
    <MyBankBankCode>Code0000Y</MyBankBankCode>
  </paymentTypeDetail> 
</Enrcypt>
```

If you choose let your users pay with MyBank or IDeal, you have to compile other two fileds.

More details can be found in at the [MyBank and IDeal](https://hype-app.github.io/gestpay-doc/oth/mybank.html) page.

 
| Name | max length | description |
| ---- | :--------: | ----------- |
| `paymentTypeDetail` |    | container of one of `MyBankBankCode` or `IdealBankCode` |
| `MyBankBankCode`<sup><a href="#fn5" id="ref5">5</a></sup> |  25   | Tag to set the Bank to show on payment page (the bank List is retrieved from `WsS2S.CallMyBankListS2S`) |
| `IdealBankCode`<sup><a href="#fn5" id="ref5">5</a></sup> |  25   | Tag to set the Bank to show on payment page (the bank List is retrieved from `WsS2S.CallIdealListS2S`) | 


<sup id="fn5">5. **paymentTypeDetail**. In order to be able to activate the payment Type Detail the merchants need to appropriately set “Fields and Parameters” in the dedicated section of GestPay Merchant Back Office. The correct merchant configuration of Sofort and Ideal has to be configured in the specific interface of Back Office Merchant.(1) Each field can be up to a maximum of 300 characters in length<a href="#ref5" title="Jump back to footnote 5 in the text.">↩</a></sup>
