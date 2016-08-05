# js_GestPay.js

> To start using this feature, import the script:

```html
 <script src="https://ecomm.sella.it/pagam/JavaScript/js_GestPay.js"
  	type="text/javascript"></script>
```

> Once the script is imported, it will do some security checks. You can see this with the `BrowserEnabled` variable: 

```javascript
if ( BrowserEnabled ) {
	//The Browser is supported! 
	//Proceed to create the Payment page
} else {
	//The browser is not supported 
	//Place here error handle code
}
```

js_Gestpay.js is a javascript that enable you to process payments on your website, leaving you with the ability to completely design your custom payment page. 

To use the following functionalities, you should first call [``WSCryptDecrypt.Encrypt` webservice](#encrypt). 

## CreatePaymentPage

> Syntax: 

```javascript
GestPay.CreatePaymentPage(
	MerchantCode, //I.E. 90000001
	EncryptedString, // "CFD3732BB102..." 
	PaymentPageLoad); // a callback to call on success
```

> Example: 

```javascript
GestPay.CreatePaymentPage(
	'9000001', 
	'DcffrrnDNdjfnemfnermgnermNfdm,gnem/*ng',
	function (Result) { 
		if(Result.ErrorCode == 10){ 
			//iFrame created and payment page correctly loaded
		} else {
			//An error has occurred, check ErrorCode and ErrorDescription
			//properties of the Result object
		} 
	});
```

The first thing to do to accept payments securely is to call `GestPay.CreatePaymentPage()`.

The function will create an hidden iFrame into the body element and will load the payment page passing the merchant code and the generated encrypted string from the previous phase. 

Name | Type | description
-----|------| -------------
Merchant Code | `string` | the code that identifies your shop. 
Encrypted String | `string` | the string created with `WSCryptEncrypt.Encrypt` webservice. 
callback | `function` | the callback that will be called with the result

## SendPayment

### Credit card authorization 

> syntax: 

```javascript
GestPay.SendPayment ({ 
		CC : '', 
		EXPMM :'', 
		EXPYY :''
		[,CVV2:''] //optional 
	},
	callBackObj);
```

> example:

```javascript
GestPay.SendPayment({
		CC : '44444444444444444', 
		EXPMM : '11',
		EXPYY : '14' 
	},
	function (Result) {
		if(Result.ErroCode == 0) {
			//Transaction correctly processed
			//Decrypt the Result.EncryptedString property to read the 
			//transaction result
		} else {
			//An error has occurred, check ErrorCode and ErrorDescription //properties of the Result object
		}
});
```

To send the credit card data to the hidden iFrame, the checkout page will assign a function to the `OnSubimt` event of the credit card form, this function will retrieve the credit card data and will call the `GestPay.SendPayment` method providing an object with the credit card number (`CC`), the expiration month (`EXPMM`) and the expiration year (`EXPYY`), the CVV (`CVV2`) if enabled, and a CallBack object. 

The input is composed of two arguments: 

- The object `CCData`, with these fields

Name | Description | Type | Size 
---- | ----------- | ---- | ----
`CC`   | Credit card number | `number` | min: 13, max: 19 
`EXPMM` | Expiration Month | `number` | 2
`EXPYY` | Expiration Year | `number` | 2
`CVV2` (optional) | Cvv/4DBC | `number` | min:3, max:4 

- a callback function, to handle the output. 