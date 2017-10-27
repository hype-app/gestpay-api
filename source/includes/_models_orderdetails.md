## OrderDetails

> `OrderDetails` tag example: 

```xml
<OrderDetails>
  <FraudPrevention>
    <SubmitForReview>1</SubmitForReview>
    <OrderDateTime>2017-12-26</OrderDateTime>
    <OrderNote>Please send me the blue version</OrderNote>
    <Source>website</Source>
    <SubmissionReason>rule_decision</SubmissionReason>
    <BeaconSessionID>ff1db05b-81db-4ca0-a728-4797bfe796ff</BeaconSessionID>
    <VendorID>9000002</VendorID>
    <VendorName>www.yourdomain.it</VendorName>
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
  <CustomerSocial>
    <Network>Facebook</Network>
    <PublicUserName>Marty McFly</PublicUserName>
    <CommunityScore>100</CommunityScore>
    <ProfilePicture>https://external-mxp1-1.xx.fbcdn.net/safe_image.php?d=AQCSnRebJp1o3AR9&w=264&h=264&url=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fit%2Fthumb%2F1%2F1d%2FMartyMcFly.JPG%2F720px-MartyMcFly.JPG&colorbox&f</ProfilePicture>
    <Email>martymcfly@backtothefuture.com</Email>
    <Bio>Martin Seamus "Marty" McFly is a fictional character in the Back to the Future trilogy. He is portrayed by actor Michael J. Fox.</Bio>
    <AccountUrl>https://www.facebook.com/pages/Marty-McFly/103151259725141?fref=ts&rf=105623692803833</AccountUrl>
    <Following>0</Following>
    <Followed>1157</Followed>
    <Id>103151259725141</Id>
    <AuthToken>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...</AuthToken>
    <SocialData />
  </CustomerSocial>
  <ShippingAddress>
    <ProfileID />
    <FirstName>Michael</FirstName>
    <MiddleName>J.</MiddleName>
    <Lastname>Fox</Lastname>
    <Company>Universal Studios</Company>
    <StreetName>Holliwood Boulevard</StreetName>
    <StreetName2 />
    <HouseNumber>1432</HouseNumber>
    <HouseExtension />
    <City>Los Angeles</City>
    <ZipCode>90213</ZipCode>
    <State>California</State>
    <CountryCode>US</CountryCode>
    <Email>martymcfly@backtothefuture.com</Email>
    <PrimaryPhone>+0199332285321</PrimaryPhone>
    <SecondaryPhone />
  </ShippingAddress>
    <BillingAddress>
    <ProfileID />
    <FirstName>Michael</FirstName>
    <MiddleName>J.</MiddleName>
    <Lastname>Fox</Lastname>
    <Company>Universal Studios</Company>
    <StreetName>Holliwood Boulevard</StreetName>
    <StreetName2 />
    <HouseNumber>1432</HouseNumber>
    <HouseExtension />
    <City>Los Angeles</City>
    <ZipCode>90213</ZipCode>
    <State>California</State>
    <CountryCode>US</CountryCode>
    <Email>martymcfly@backtothefuture.com</Email>
    <PrimaryPhone>+0199332285321</PrimaryPhone>
    <SecondaryPhone />
  </BillingAddress>
  <ProductDetails>
    <ProductDetail><!-- first of 1...N products -->
      <ProductCode>135798642</ProductCode>
      <SKU>AB-333222-WFG-4</SKU>
      <Name>Porche Carrera scale model</Name>
      <Description>Porche Carrera scale model</Description>
      <Quantity>1</Quantity>
      <Price>50.5</Price>
      <UnitPrice>50.5</UnitPrice>
      <Type>1</Type><!-- 1: product -->
      <Vat>22%</Vat>
      <Discount />
      <Category>Scale Models</Category>
      <Subcategory>cars</Subcategory>
      <Brand>LittleCars</Brand>
      <RequiresShipping>true</RequiresShipping>
      <DeliveryAt>2017-12-29</DeliveryAt>
      <Condition>new</Condition>
      <Seller /><!-- relevant for marketplace orders --> 
    </ProductDetail>
    <ProductDetail>
      <ProductCode>135798642</ProductCode>
      <SKU>AB-333222-WFG-5</SKU>
      <Name>Ferrari scale model</Name>
      <Description>Ferrari scale model</Description>
      <Quantity>1</Quantity>
      <Price>50.5</Price>
      <UnitPrice>50.5</UnitPrice>
      <Type>1</Type><!-- 1: product -->
      <Vat>22%</Vat>
      <Discount />
      <Category>Scale Models</Category>
      <Subcategory>cars</Subcategory>
      <Brand>LittleCars</Brand>
      <RequiresShipping>true</RequiresShipping>
      <DeliveryAt>2017-12-29</DeliveryAt>
      <Condition>new</Condition>
      <Seller /><!-- relevant for marketplace orders -->
    </ProductDetail><!-- last of 1...N products -->
  </ProductDetails>
  <DiscountCodes>
    <DiscountCode><!-- one or more -->
      <Amount>10</Amount>
      <Code>53232</Code>
    </DiscountCode>
  </DiscountCodes>
  <ShippingLines>
    <ShippingLine>
      <Price>20</Price>
      <Title>FedEx</Title>
      <Code>72-B03</Code>
    </ShippingLine>
  </ShippingLines>
</OrderDetails>
``` 

`OrderDetails` tag contains all the info that can be sent together with a transaction. The more data you sent, the better is for Gestpay to analyze your request. 

Many external systems, like the one presented in the next sections, use `OrderDetails` fields to work. [Gestpay Guaranteed Payment](#gestpay-guaranteed-payment) (an antifraud system) massively uses `OrderDetails` to get the job done. 

In this section we will analyze indipendently all the fields. 

| Field | Max Size | Type | Description |
| ----- | -------- | ---- | ----------- |
| `FraudPrevention` |  | container | Contains fields related to fraud prevention.
| `CustomerDetail` |  | container | Contains customer data
| `CustomerSocial` |  | container | if you have access to a customer' social profile, you can also send this data 
| `ShippingAddress` |  | container | Contains shipping address
| `BillingAddress` |   | container | contains the billing address 
| `ProductDetails` |   | container | contains one or more `ProductDetail`s items buyed 
| `DiscountCodes` |    | container | contains one or more `DiscountCode`s, if discounts are applicable
| `ShippingLines` |    | container | contains one or more `ShippingLine`s, that contain the price and the shipping courier.


#### Children of `FraudPrevention` 

| Field | Max Size | Description |
| ----- | -------- | ----------- |
| `SubmitForReview` | 1 |  Flag to activate review over Gestpay Guaranteed Payment.  <br><ul><li>`0` no submit</li><li>`1` submit</li></ul>If your active plan is **Select&Submit** you can decide which transaction must be submitted to Gestpay Guaranteed Payment setting the flag to `1`. With **Shop Protection** all transactions are submitted for review by default.
| `OrderDateTime` | 10 | Order date time. Format: YYYY-MM-DD
| `OrderNote` | 50 | Buyer's order note 
| `Source` | 10 | `website`, `mobile` 
| `SubmissionReason` | 20 | the underlying reason for submitting the order to review. It must be one of the following values: <ul><li>`failed_verification`: order failed (phone, email) verification.</li><li>`rule_decision`: Order was flagged by an automatic rule. </li><li>`third_party`: Order was flagged by a third-party service.</li><li>`manual_decision`: Order was flagged after manual review.</li><li>`policy_decision`: order was flagged by a non-fraud related rule.</li></ul> This field must be sent either if the shop adheres to *Shop Protection* or *Selct & Submit* plan; if the plan is *Shop Protection*, the default is `rule_decision`.
| `BeaconSessionID` | 100 | Session ID of the Beacon for this transaction. This value must be collected when the user first connects to your website and be sent to  Gestpay Guaranteed Payment to analyze it. With this field,  Gestpay Guaranteed Payment knows what actions the user did on your website. 
| `VendorID` | 10 | A unique ID representing the selling vendor; commonly the Gestpay `shopLogin`. **Mandatory in case of different domain use**.
| `VendorName` | 100 | In case of multiple selling domains, this is the name of the selling vendor. **Mandatory in case of different domain use**.

#### Children of `CustomerDetail`

| Field | Max Size | Description |
| ----- | -------- | ----------- |
| `ProfileID` | 12 | Customer profile ID (reserved for future use) 
| `MerchantCustomerID` | 50 | Merchant customer ID (reserved for future use)
| `FirstName` | 65 | Customer First Name 
| `MiddleName`           | 65  | Customer Middle Name 
| `Lastname`             | 65  | Customer Last name
| `PrimaryEmail`         | 100 | Customer primary email
| `SecondaryEmail`       | 100 | Customer secondary email
| `PrimaryPhone`         | 20  | Customer's phone including prefix
| `SecondaryPhone`       | 20  | Customer's phone including prefix
| `DateOfBirth`          | 10  | Customer Date of Birth (dd/mm/yyyy)
| `Gender`               | 1   | Customer Gender (`0`=Male `1`=Female)
| `SocialSecurityNumber` | 20  | Customer's social or fiscal identifier (KlarnaUse)
| `Company`              | 255 | Customer Company
| `CreatedAtDate`        | 10  | Date of Customer creation on merchant site
| `VerifiedEmail`        | 5   | Email is verified? `true`/`false`
| `AccountType`          | 20  | `free`/`premium` etc

#### `CustomerSocial` field

If you have access to socal data of your customers, you can send them along with the other data.

| Field | Max Size | Description |
| ----- | -------- | ----------- |
| `Network`        | 12  | The name of the social network.
| `PublicUserName` | 50  | The customer's public username.
| `CommunityScore` | 65  | holds the score for networks where its relevant
| `ProfilePicture` | 65  | URL of the customer's profile picture
| `Email`          | 65  | Customer's email address registered on the social network.
| `Bio`            | 100 | Short biography of the customer on the social network
| `AccountUrl`     | 100 | Direct URL to the customer's profile page on the social network
| `Following`      | 20  | Direct URL to the customer's profile page on the social network
| `Followed`       | 20  | Number of users followed by the customer on the social network.
| `Id`             | 10  | The customer's profile id.
| `AuthToken`      | 1   | The authentication token of the user.
| `SocialData`     | 20  | Open field for additional data from the social network.

#### `ShippingAddress` and `BillingAddress` field

| Field | Max Size | Description |
| ----- | -------- | ----------- |
| `ProfileID`      | 12  | Profile ID (reserved for future use) |
| `FirstName`      | 65  | First Name                          |
| `MiddleName`     | 65  | Middle Name                         |
| `Lastname`       | 65  | Last name                           |
| `Company`        | 255 | Company Name                        |
| `StreetName`     | 100 | Shipping Street                     |
| `Streetname2`    | 100 | Shipping Street second line         |
| `HouseNumber`    | 5   |                                     |
| `HouseExtention` | 5   |                                     |
| `City`           | 50  | Shipping City                       |
| `ZipCode`        | 50  | Shipping Zip Code                   |
| `State`          | 50  | Shipping State                      |
| `CountryCode`    | 2   | Alpha-2 code; for example, United States is "US" |
| `Email`          | 100 | Shipping Contact Email              |
| `PrimaryPhone`   | 20  | Shipping Primary Phone              |
| `SecondaryPhone` | 20  | Shipping Secondary Phone            |


#### `ProductDetails` and `ProductDetail` field 

`ProductDetails` will contain one or more `ProductDetail`. 

`ProductDetail` describes a bought item.

| Field | Max Size | Description |
| ----- | -------- | ----------- |
| `ProductCode`  | 12  | Article’s product Code
| `SKU`  | 50  | Article’s Stock Keeping Unit
| `Name`   | 100 | Article’s name
| `Description`  | 255 | Article’s description
| `Quantity` | 3   | The number of products
| `Price` | 12  | Article’s price
| `UnitPrice` | 12  | Article’s Unit Price
| `Type` | 2   | The type of article: 1-product, 2-shipping, 3-handling
| `Vat` | 2   | Value-Added Tax (the value of the tax)
| `Discount` | 2   | The amount offered by you as discount 
| `Category` |     | Product Category
| `Subcategory`  |     | Product Sub Category                
| `Brand` |     | Product Brand                       
| `RequiresShipping` |     | `true`/`false` States whether or not the fulfillment requires shipping. This field is important for merchants dealing with digital goods. |
| `DeliveryAt` | 10  | The planned delivery date of the product or item.
| `Condition` | 100 | Description of the physical condition of the item, mostly relevant for used items
| `Seller` |     | `public_username` Details about the seller of the item, relevant for marketplace orders.

#### `DiscountCodes` and `DiscountCode` fields

If you apply discounts for your products you should add discount info.

in `DiscountCodes` you may have one or more `DiscountCode`, that contain these fields: 

| Field | Max Size | Description |
| ----- | -------- | ----------- |
| `Amount` | 12 | The amount of the discount. |
| `Code`   | 50 | The code of the discount.   |

#### `ShippingLines` and `ShippingLine` fields 

With this fields you can define the price and the kind of shipping that you use for your products, if applicable. 

| Field | Max Size | Description |
| ----- | -------- | ----------- |
| `Price` | 12  | The price of the shipping method. |
| `Title` | 100 | The title of the shipping method. |
| `Code`  | 50  | Code of the shipping method.      |