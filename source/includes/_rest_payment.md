## Payment API

With the Payment REST API you can automate every aspect of the payment process. 

### Payment token

`paymentToken` is generated during the creation of a new payment with [payment/create](#post-payment-create) and it's unique for every transaction. It can be insert in the headers for authenticate call for that payment.

The token is valid util the payment is not authorized (before the [payment/submit](/#post-payment-submit)).

<aside class="notice">You can use the token for the 24h next to the authorization for payment/detail calls, up to 10 times (5 in sandbox).</aside>
