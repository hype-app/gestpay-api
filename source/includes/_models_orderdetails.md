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
    <CreatedAtDate>2017-05-16 15:28</CreatedAtDate>
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
    <HouseExtention />
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
    <HouseExtention />
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
      <Vat>22</Vat>
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
      <Vat>22</Vat>
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
  <AccommodationDetails>
    <!-- First accomodation -->
    <AccommodationDetail>
      <City>Eindhoven</City>
      <CountryCode>NL</CountryCode>
      <Title>Tulip Inn Eindhoven Airport</Title>
      <CheckInDate>2018-01-20T00:00+0000</CheckInDate>
      <CheckOutDate>2018-01-22T00:00+0000</CheckOutDate>
      <ProductId>NL2133</ProductId>
      <Rating>3</Rating>
      <NumberOfGuests>3</NumberOfGuests>
      <AccommodationType>Hotel</AccommodationType>
      <RoomType>Deluxe Triple</RoomType>
      <Price>370</Price>
      <Quantity>1</Quantity>
      <CancellationPolicy>Non-Refundable</CancellationPolicy>
    </AccommodationDetail>
    <!-- Second accomodation -->
    <AccommodationDetail>
    ...
    </AccommodationDetail>
  </AccommodationDetails>
  <PassengerDetails>
    <!-- First passenger -->
    <PassengerDetail>
      <FirstName>Antonio</FirstName>
      <LastName>Esposito</LastName>
      <DateOfBirth>1970-05-03</DateOfBirth>
      <NationalityCode>IT</NationalityCode>
      <InsuranceType>ERV</InsuranceType>
      <InsurancePrice>17</InsurancePrice>
      <DocumentNumber>AO1234567</DocumentNumber>
      <DocumentType>Identity Card</DocumentType>
      <DocumentIssueDate>Comune di Salerno</DocumentIssueDate>
      <DocumentExpirationDate>2020-10-02</DocumentExpirationDate>
      <PassengerType>adult</PassengerType>
    </PassengerDetail>
    <!-- Second passenger -->
    <PassengerDetail>
    ...
    </PassengerDetail>
  </PassengerDetails>
</OrderDetails>
``` 
> JSON version of the same data structure <span id="order-details-json"></span>

```json
{
  "OrderDetails": {
    "FraudPrevention": {
      "SubmitForReview": "1",
      "OrderDateTime": "2017-12-26",
      "OrderNote": "Please send me the blue version",
      "Source": "website",
      "SubmissionReason": "rule_decision",
      "BeaconSessionID": "ff1db05b-81db-4ca0-a728-4797bfe796ff",
      "VendorID": "9000002",
      "VendorName": "www.yourdomain.it"
    },
    "CustomerDetail": {
      "FirstName": "Michael",
      "MiddleName": "J.",
      "Lastname": "Fox",
      "PrimaryEmail": "martymcfly@backtothefuture.com",
      "PrimaryPhone": "+390298987643",
      "SecondaryPhone": "+393351029384",
      "DateOfBirth": "29/09/1932",
      "SocialSecurityNumber": "BRLSLV36P29F205W",
      "CreatedAtDate": "2017-05-16 15:28",
      "VerifiedEmail": "true",
      "AccountType": "premium"
    },
    "CustomerSocial": {
      "Network": "Facebook",
      "PublicUserName": "Marty McFly",
      "CommunityScore": "100",
      "ProfilePicture": "https://martymcfly.com/image.jpg",
      "Email": "martymcfly@backtothefuture.com",
      "Bio": "Martin Seamus \"Marty\" McFly is a fictional character in the Back to the Future trilogy. He is portrayed by actor Michael J. Fox.",
      "AccountUrl": "https://www.facebook.com/pages/Marty-McFly/103151259725141",
      "Following": "0",
      "Followed": "1157",
      "Id": "103151259725141",
      "AuthToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    },
    "ShippingAddress": {
      "FirstName": "Michael",
      "MiddleName": "J.",
      "Lastname": "Fox",
      "Company": "Universal Studios",
      "StreetName": "Holliwood Boulevard",
      "HouseNumber": "1432",
      "City": "Los Angeles",
      "ZipCode": "90213",
      "State": "California",
      "CountryCode": "US",
      "Email": "martymcfly@backtothefuture.com",
      "PrimaryPhone": "+0199332285321"
    },
    "BillingAddress": {
      "FirstName": "Michael",
      "MiddleName": "J.",
      "Lastname": "Fox",
      "Company": "Universal Studios",
      "StreetName": "Holliwood Boulevard",
      "HouseNumber": "1432",
      "City": "Los Angeles",
      "ZipCode": "90213",
      "State": "California",
      "CountryCode": "US",
      "Email": "martymcfly@backtothefuture.com",
      "PrimaryPhone": "+0199332285321"
    },
    "ProductDetails": {
      "ProductDetail": [
        {
          "ProductCode": "135798642",
          "SKU": "AB-333222-WFG-4",
          "Name": "Porche Carrera scale model",
          "Description": "Porche Carrera scale model",
          "Quantity": "1",
          "Price": "50.5",
          "UnitPrice": "50.5",
          "Type": "1",
          "Vat": "22",
          "Category": "Scale Models",
          "Subcategory": "cars",
          "Brand": "LittleCars",
          "RequiresShipping": "true",
          "DeliveryAt": "2017-12-29",
          "Condition": "new"
        },
        {
          "ProductCode": "135798642",
          "SKU": "AB-333222-WFG-5",
          "Name": "Ferrari scale model",
          "Description": "Ferrari scale model",
          "Quantity": "1",
          "Price": "50.5",
          "UnitPrice": "50.5",
          "Type": "1",
          "Vat": "22",
          "Category": "Scale Models",
          "Subcategory": "cars",
          "Brand": "LittleCars",
          "RequiresShipping": "true",
          "DeliveryAt": "2017-12-29",
          "Condition": "new"
        }
      ]
    },
    "DiscountCodes": {
      "DiscountCode": {
        "Amount": "10",
        "Code": "53232"
      }
    },
    "ShippingLines": {
      "ShippingLine": {
        "Price": "20",
        "Title": "FedEx",
        "Code": "72-B03"
      }
    },
    "AccommodationDetails": {
      "AccommodationDetail": [
        {
          "City": "Eindhoven",
          "CountryCode": "NL",
          "Title": "Tulip Inn Eindhoven Airport",
          "CheckInDate": "2018-01-20T00:00+0000",
          "CheckOutDate": "2018-01-22T00:00+0000",
          "ProductId": "NL2133",
          "Rating": "3",
          "NumberOfGuests": "3",
          "AccommodationType": "Hotel",
          "RoomType": "Deluxe Triple",
          "Price": "370",
          "Quantity": "1",
          "CancellationPolicy": "Non-Refundable"
        },
        "
    ...
    "
      ]
    },
    "PassengerDetails": {
      "PassengerDetail": [
        {
          "FirstName": "Antonio",
          "LastName": "Esposito",
          "DateOfBirth": "1970-05-03",
          "NationalityCode": "IT",
          "InsuranceType": "ERV",
          "InsurancePrice": "17",
          "DocumentNumber": "AO1234567",
          "DocumentType": "Identity Card",
          "DocumentIssueDate": "Comune di Salerno",
          "DocumentExpirationDate": "2020-10-02",
          "PassengerType": "adult"
        },
        "
    ...
    "
      ]
    }
  }
}
```

`OrderDetails` tag contains all the info that can be sent together with a transaction. The more data you sent, the better is for Gestpay to analyze your request. 

Many external systems, like the one presented in the next sections, use `OrderDetails` fields to work. [Gestpay Guaranteed Payment](#gestpay-guaranteed-payment) (an antifraud system) massively uses `OrderDetails` to get the job done. 

In this section we will analyze indipendently all the fields. 

After the XML example there's the corresponding JSON version. [Click to directly jump to the JSON example.](#order-details-json)

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
| `CreatedAtDate`        | 10  | Date of Customer creation on merchant site. Example: `2017-05-16 15:28` (year-month-day hour-minute)
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
| `Type`* | 2   | The type of article: <ul><li>`1`: product</li><li>`2`: shipping</li><li>`3`: handling</li></ul>If the riskified integration is active, the product type should contain one of the following values:<ul><li>`physical`: This is a tangible/physical product.</li><li>`digital`: This is a digital product (e.g. gift card).</li><li>`travel`: This is a travel industry product (e.g. flight ticket)</li><li>`event`: This is an event industry product (e.g. concert ticket)</li></ul>
| `Vat` | 2   | Value-Added Tax (the value of the tax)
| `Discount` | 2   | The amount offered by you as discount 
| `Category` |     | Product Category
| `Subcategory`  |     | Product Sub Category                
| `Brand` |     | Product Brand                       
| `RequiresShipping` |     | `true`/`false` States whether or not the fulfillment requires shipping. This field is important for merchants dealing with digital goods. |
| `DeliveryAt` | 10  | The planned delivery date of the product or item.
| `Condition` | 100 | Description of the physical condition of the item, mostly relevant for used items
| `Seller` |     | `public_username` Details about the seller of the item, relevant for marketplace orders.
*`Type` has a different meaning based on the type of active integration (for example klarna /riskified)



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

#### `AccomodationDetails` and `AccomodationDetail` fields

These tags are useful for Hotel and Acomodation companies. You can put as many `AccomodationDetail` you need inside one `AccomodationDetails` group tag. 

| Field | type | Description |
| ----- | -------- | ----------- |
| `City` |  string | Accomodation City | 
| `CountryCode` | string | Accomodation country  | 
| `Title` | string |  Accomodation name | 
| `CheckInDate` | string | Date-Time of arrival in ISO standard | 
| `CheckOutDate` | string | Date-Time of departure in ISO standard | 
| `ProductId` | string | Booking.com unique identifier of the offer, skip if irrelevant | 
| `Rating` | string | Star rating of the accomodation | 
| `NumberOfGuests` | string | Number of guests |
| `AccommodationType` | string  | Accomodation type: Hotel, Room, ... |
| `RoomType` | string | Advertised room name |
| `Price` | string  | price of one room of this kind for the period |
| `Quantity` | string  | how many rooms of this kind in the order |
| `CancellationPolicy` | string | Write here your cancellation policy, e.g. `Non-Refundable` |

#### `PassengerDetails` and `PassengerDetail` fields 

These tags are useful for travel agencies - flights, ships, etc. You can put as many `PassengerDetail` you need inside one `PassengerDetails` group tag. 

| Field | Description |
| ----- | ----------- |
| `FirstName` | Name of the passenger | 
| `LastName` | Last name of the passenger | 
| `DateOfBirth` | Date of birth, ISO format | 
| `NationalityCode` | Nationality code | 
| `InsuranceType` | Insurance title if was chosen by the end customer |
| `InsurancePrice` | Insurance price if was chosen by the end customer | 
| `DocumentNumber` | A valid identification document number | 
| `DocumentType` | The type of the identification document |
| `DocumentIssueDate` | The identification document issue date  | 
| `DocumentExpirationDate` | The identification document expiration date  | 
| `PassengerType` | `adult` or `child` | 