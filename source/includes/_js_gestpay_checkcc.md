### checkCC

> syntax: 

```javascript
GestPay.checkCC(CCNum, callBackObj);
```

> example:

```javascript
GestPay.checkCC('12345678', function (Result) {
  if (Result.ErrorCode != 0) {
    console.log(Result.ErrorCode); // i.e. 1119
    console.log(Result.ErrorDescription); // 'Credit card number with wrong length'
    ... //handle the error
  } else {
    console.log('the Credit Card Number is valid');
  }
});
```

`checkCC` checks the formal correctness of the credit card number. 