
## Riskified 

> Riskified example: 

```xml
<Encrypt>
  <shopLogin>90000001</shopLogin>
  <uicCode>103</uicCode><!--Hong Kong dollar-->
  <amount>0.10</amount>
  <shopTransactionId>13573322</shopTransactionId>
  <OrderDetails>
    <FraudPrevention>
      <SubmitForReview>1</SubmitForReview>
      <OrderDateTime>2017-12-26</OrderDateTime>
      <OrderNote>Please send me the blue version</OrderNote>
      <Source>website</Source>
      <SubmissonReason>rule_decision</SubmissonReason>
      <BeaconSessionID>ff1db05b-81db-4ca0-a728-4797bfe796ff</BeaconSessionID>
    </FraudPrevention>
    <CustomerDetail>
      <ProfileID />
      <MerchantCustomerID/>
      <FirstName>Michael</FirstName>
      <MiddleName>J.</MiddleName>
      <Lastname>Fox</Lastname>
      <PrimaryEmail>martymcfly@backtothefuture.com</PrimaryEmail>
      <SecondaryEmail />
      <PrimaryPhone>+390298987643</PrimaryPhone>
      <SecondaryPhone>+393351029384</SecondaryPhone>
      <DateOfBirth>29/09/1932</DateOfBirth>
      <SocialSecurityNumber>BRLSLV36P29F205W</SocialSecurityNumber>
      <Company />
      <CreatedAtDate>31/12/2017</CreatedAtDate>
      <VerifiedEmail>true</VerifiedEmail>
      <AccountType>premium</AccountType>
    </CustomerDetail>
  </OrderDetails>
</Encrypt>
``` 

Riskified is a fraud detection service. To get more info, visit [Riskified documentation](<%= config[:doc_url] %>/sec/fraud-detection-with-riskified.html). 

The data to pass to `Encrypt` you need to 