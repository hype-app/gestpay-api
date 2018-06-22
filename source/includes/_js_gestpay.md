## js_GestPay.js API

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


