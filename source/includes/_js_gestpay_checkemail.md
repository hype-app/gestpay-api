### checkEMAIL

> syntax: 

```javascript
GestPay.checkEMAIL(EmailVal, callBackObj);
```

> example:

```javascript
GestPay.checkEMAIL( 'email@example.com' , function (Result) {
  if (Result.ErrorCode != 0) { // mail is valid, ErrorCode is 0 
    console.log(Result.ErrorCode); 
    console.log(Result.ErrorDescription);
    ... //handle error
  } else {
    console.log('the email is valid');  //prints 'the email is valid'
  }
});
```

`checkEMAIL` checks the formal correctness of the **email address**.