

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

