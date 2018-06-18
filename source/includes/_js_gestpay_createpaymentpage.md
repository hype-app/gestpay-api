### CreatePaymentPage

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
