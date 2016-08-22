# js_GestPay.js API

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
	shopLogin, //I.E. 90000001
	EncryptedString, // "CFD3732BB102..." 
	PaymentPageLoaded); // a callback to call on success
```

> Example: 

```javascript
GestPay.CreatePaymentPage(
	'9000001',  //shopLogin
	'DcffrrnDNdjfnemfnermgnermNfdm,gnem/*ng', //EncryptedString 
	function (Result) {  //callback 
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
Shop Login | `string` | the code that identifies your shop. 
Encrypted String | `string` | the string created with `WSCryptEncrypt.Encrypt` webservice. 
callback | `function` | the callback that will be called with the result

## SendPayment

### Credit card authorization 

> syntax: 

```javascript
GestPay.SendPayment ({ 
		CC    : '', 
		EXPMM : '', 
		EXPYY : '', 
		CVV2 : '' //optional 
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
			//An error has occurred, check ErrorCode and ErrorDescription 
			//properties of the Result object
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

<aside class="warning">To free the Shop from the need to comply with PCI Security standard, the OnSubmit event of the Credit card form must avoid to postback the data to the checkout page! </aside>

### Call after 3D Authentication 

> Syntax: 

```javascript
GestPay.SendPayment({
		PARes : '', 
		TransKey : ''
	},  
	callbackFunction
});
```

> Example:

```javascript
GestPay.SendPayment ({
	PARes : 'xMNjdsre23214hjksBBDsjkrhewGSD/*dwhjdkhawNDAHDGUY', 
	TransKey : 'eFtstSStefgd23432'
	},
	function (Result) {
		if(Result.ErroCode == 0){
			// Transaction correctly processed ! 
			// Decrypt the Result.EncryptedString property to read the 
			// transaction result
		}else{
			// An error has occurred, check ErrorCode and ErrorDescription
			// properties of the Result object
		}
});
``` 

If during the first `SendPayment` call `Result.ErrorCode == 8006`, you should redirect the user to the `pagam3d.aspx` page. You can read about the process at this link: [Customizing the payment page](https://hype-app.github.io/gestpay-doc/pay/customizing-the-payment-page.html). 


When card holder is verified and authorized, you have to re-call `SendPayment()` with some new parameters: 

- `CCData` (`object`)
	- `PARes` (`string`)
	- `TransKey` (`string`)
- callback (`function`) 


## the Result Object 

> Example: Merchant not 3D enabled or credit card not enrolled. 

```javascript
LocalObj.CallBack = function(Result){ 
	if ( Result.ErrorCode != 0 ) {
		//Call failed an error has occurred 
		//.... place here error handle code...
	} else {
 		// Transaction correctly processed proceed to decrypt the
		// Result.EncryptedResponse property
	} 
}
```

> Example: Merchant 3D enabled and 3D enrolled credit card

```javascript
LocalObj.CallBack = function (Result) { 
	if (Result.ErrorCode != 0){
		if (Result.ErrorCode == 8006){
			//3D Transaction - Card holder authorization required 
			//Get the TransKey
			//NOTE you have to store this value in your server for 
			//further use
			var TransKey = Result.TransKey;
			//Get the VBVRisp
			var VBVRisp = Result.VBVRisp;
			//place here the code to redirect the card holder to the 
			//authentication website
		} else {
			//Call failed an error has occurred 
			//.... place here error handle code...
		} 
	} else {
		//Transaction correctly processed proceed to decrypt the //Result.EncryptedResponse property
	}
}
```


When callbacks are executed, the `Result` object will contain useful properties, needed to understand if an error has occurred.

| name | description |
| ---- | ----------- | 
| `Result.ErrorCode` | the error code |
| `Result.ErrorDescription` | the error description |
| `Result.EncryptedResponse` | returns the encrypted response string |
| `Result.TransKey` | return the `TransKey` in case of 3D enrolled credit card |
| `Result.VBVRisp` | return the ciphered string needed for the cardholder authentication in case of 3D enrolled credit card |

The GestPay.SendPayment() function will send an asynchronous call to the hidden iFrame windows, the CallBack object will retrieve the Result object once the transaction result is thrown from the hidden payment page.

