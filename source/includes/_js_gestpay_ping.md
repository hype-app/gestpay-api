### ping

> syntax: 

```javascript
GestPay.ping(callBackObj);
```

> example:

```javascript
GestPay.ping(function (Result) {
    if(Result.ErroCode == 1111) {
      //connection estabilished: servers are available
      console.log(Result.ErrorDescription) // outputs 'Ping Back'
    } else {
      //An error has occurred, check ErrorCode and ErrorDescription 
      //properties of the Result object
    }
});
```

The `Ping` function checks that there is an active connection with Axerve E-commerce Solutions. 

Useful for troubleshooting connection errors. 