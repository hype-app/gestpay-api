
## WSS2S Example: Amazon Pay

> Amazon Pay example via S2S: 

```xml
<callPagamS2S>
    <shopLogin>9000002</shopLogin>
    <uicCode>242</uicCode><!-- euro -->
    <amount>24.21</amount>
    <shopTransactionId>MYSHOP-0001</shopTransactionId>
    <paymentTypes>
        <paymentType>AMAZONPAY</paymentType>
    <paymentTypes>
    <transKey>123456789sdfasdgdgf...</transkey>
</callPagamS2S>

```

If you implement AmazonPay in your shop by using Amazon widgets for address and cards, you can finalize the call by calling [`CallPagamS2S`](#callpagams2s). 

Use `AMAZONPAY` for the `paymentType` and send the **Amazon Order Reference ID** in the `transKey` field. 

<aside class="notice">
The shopTransactionId must be unique. 
</aside>