# WSCryptDecrypt

<aside class="notice">This error section is stored in a separate file in `includes/_errors.md`. Slate allows you to optionally separate out your docs into many files...just save them to the `includes` folder and add them to the top of your `index.md`'s frontmatter. Files are included in the order listed.</aside>

WSCryptDecrypt web service is available on production and test servers and does not require any installation on the merchant’s server.

The merchant must implement – in the page(s) of the virtual store configured to handle payments – a call to the webservice which handles requests to use the GestPay encryption service.

To request the encryption service it is necessary to call the Encrypt method.

If the encryption operation is concluded correctly (TransactionResult tag value with OK), the encrypted data string returned by GestPay will be available by reading the value of the CryptDecryptString tag.

If this is not the case, the values of the ErrorCode and ErrorDescription tag will make it possible to identify the reasons that prevented the encryption operation. To request the decryption service it is necessary to call the Decrypt method, passing the shopLogin and CryptedString tags with the values communicated by GestPay in Phase III.

The information containing the transaction result will be available by reading the information in the XML response file corresponding to the result of the transaction.

## Encrypt

Some of the information to communicate to GestPay is required in order to complete the payment process, while other information can be omitted without compromising the processing of the transaction. Through the GestPay Back Office environment, merchants can define what information is required and what information is optional.

Some information that is essential to the payment process is configured as compulsory by GestPay. This attributes cannot be modified.

The following table gives the information that must be communicated to GestPay xml using Encrypt method in order to make a transaction, the tags' names are case sensitive.

| Name | max length | description |
| ---- | :--------: | ----------- |
| **`shopLogin`** | 30 | shopLogin (Mandatory) |
| **`uicCode`** | 3 | Code identifying currency in which transaction amount is denominated - see Currency Codes table TODO - (Mandatory) |
| **`amount`** | 9 | Transaction amount. Do not insert thousands separator. Decimals, max. 2 numbers, are optional and separator is the point (Mandatory) |
| **`shopTransactionID`** | 50 | Identifier attributed to merchant’s transaction (Mandatory) |
| `buyerName` | 50 | Buyer’s name and surname |
| `buyerEmail` | 50 | Buyer’s e-mail address |
| `languageId` | 2 | Code identifying language used in communication with buyer |
| `customInfo`<sup><a href="#fn1" id="ref1">1</a></sup> | 1000 | String containing specific information as configured in the merchant’s profile |
| `requestToken` <sup><a href="#fn2" id="ref2">2</a></sup> | 25 | “MASKEDPAN” for a Standard Token any other value for Custom Token. Using :FORCED: before the token, it' s possible to have the token even if the transaction is not authorized. |
| `ppSellerProtection` <sup><a href="#fn3" id="ref3">2</a></sup> | 1 | Parameter to set the use of a confirmed addresses |
| `shippingDetails`: | 
| `shipToName` | 32 | String containing the shipping name | 


<sup id="fn1">1. Each field can be up to a maximum of 300 characters in length.<a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>

<sup id="fn2">2. Required only when a Token is needed within the transaction response. <br> In order to be able to request, obtain and use a Token, merchants need to appropriately set “Fields and Parameters” in the dedicated section of GestPay Merchant Back Office.<a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a></sup>

<sup id="fn3">3. **PayPal Seller Protection parameter**. In order to be able to activate the Seller Protection Option the merchants need to appropriately set "Fields and Parameters" in the dedicated section of GestPay Merchant Back Office.<a href="#ref3" title="Jump back to footnote 3 in the text.">↩</a></sup>

<sup id="fn4">4. **Payment Systems Visibility**. In order to be able to activate the Payment Systems Visibility the merchants need to appropriately set “Fields and Parameters” in the dedicated section of GestPay Merchant Back Office. The Payment System Visibility can be configured in the specific interface in the Back Office Merchant.<a href="#ref4" title="Jump back to footnote 4 in the text.">↩</a></sup>

<sup id="fn5">5. **paymentTypeDetail**. In order to be able to activate the payment Type Detail the merchants need to appropriately set “Fields and Parameters” in the dedicated section of GestPay Merchant Back Office. The correct merchant configuration of Sofort and Ideal has to be configured in the specific interface of Back Office Merchant.(1) Each field can be up to a maximum of 300 characters in length<a href="#ref5" title="Jump back to footnote 5 in the text.">↩</a></sup>

<sup id="fn6">6. **Line Items**: in case the buyer selects PayPal as payment method in the payment page, fields Name, Description, Quantity and UnitPrice of every occurrency of the ProductDetail tag will be used to show the transaction items details in PayPal payment page.<a href="#ref6" title="Jump back to footnote 6 in the text.">↩</a></sup>

## Decrypt