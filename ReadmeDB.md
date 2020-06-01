
[Back apartacho project readme ](./README.md)

# Description DataBase Design project apartacho

Conceptual and logical design of the database for the project apartacho product of the process of training the program PlatziMaster cohort 1-2020

## Contents

- [Description DataBase Design project apartacho](#description-database-design-project-apartacho)
  - [Contents](#contents)
      - [Step 1 - Definition of entities](#step-1---definition-of-entities)
      - [Step 2 - Relations between entities](#step-2---relations-between-entities)
      - [Step 3 - Attributes of entities](#step-3---attributes-of-entities)
      - [Step 4 - Physical Model](#step-4---physical-model)


#### Step 1 - Definition of entities

Entity  | Description
------- | -------
Users | Regista the common data of different users of the system
Properties | Property or root object of the sale or rent
Countries | Country from which the Property
Cities | city ​​from which the Property
addresses | Entity that links the places where the properties are
Offers | Entity that manages the offers made by bidders and real estate
Publications | Entity that keeps applications such as property offers.
Tracings | Entity that is responsible for storing the visits do interested in your property
Favorites | Entity that stores mark as favorites Property that can be accessed later
Images|Entity to manage visual content such as photos and / or videos of real estate, users or entities related objects or photographic media.


#### Step 2 - Relations between entities

Entities | Users | Properties | Countries | Cities | Addresses | offers | Publications | tracings | favorites | images
---------|-------|------------|-----------|--------|-----------|--------|--------------|----------|-----------|-------
Users | X | 0-M | 1-M | 1-M | 1-M | 0-M | X | 0-M | M-M | X
Properties | 0-M | X | 1-M | 1-M | 1-M | 1-M | X | 1-M | 0-M | M-M
Countries | 1-M | 1-M | X | 1-M | M-M | X | X | X | X | X
Cities | 1-M | 1-M | 1-1 | X | 1-M | X | X | X | X | X
Addresses | 1-M | 1-M | M-M | 1-M | X | X | X | X | X | X
offers | 0-M | 1-M | X | X | X | X | X | M-M | X | X
Publications | 0-M | X | X | X | X | X | X | M-M | X | X
tracings | 0-M | 1-M | X | X | X | M-M | M-M | X | X | X
favorites | M-M | 0-M | X | X | X | X | X | X | X | X
images | X | M-M | X | X | X | X | X | X | X | X


#### Step 3 - Attributes of entities

offers_offer |  |  |
-------|--|--|-
id |  integer | pk
offer_type | integer | 
offer_description | varchar(150) | 
is_active | boolean | 
is_published_id | integer | fk
property_id | integer | fk
user_id | integer | fk
created | timestamp | 
modified | timestamp | 
		
favorites |  |  |
-------|--|--|-
id | integer | pk
created | timestamp | 
modified | timestamp | 
is_favorite | boolean | 
is_published_id | integer | fk
property_id | integer | fk
user_id | integer | fk
		
publications |  |  |
-------|--|--|-
id | integer | pk
created | timestamp | 
modified | timestamp | 
is_published | boolean | 
is_active | boolean | 
description | varchar(150) | 
property_id | integer | fk
user_admin_id | integer | fk
		
images |  |  |
-------|--|--|-
id | integer | pk
property_id | integer | fk
created | timestamp | 
modified | timestamp | 
url | varchar(100) | 

trackings |  |  |
-------|--|--|-
id | integer | pk
property_id | integer | fk
user_id | integer | fk
created | timestamp | 
modified | timestamp | 
is_active | boolean | 

properties |  |  |
-------|--|--|-
id | integer | pk
address_id | integer | fk
user_id | integer | fk
created | timestamp | 
modified | timestamp | 
has_furnished | boolean | 
price | numeric(12,2) | 
price_mts | numeric(12,2) | 
area | numeric(7,2) | 
bathroom_count | smallint | 
room_count | smallint | 
door_count | smallint | 
offer_type | integer | 
has_heated | boolean | 
has_pool | boolean | 
has_parking | boolean | 
has_security | boolean | 
has_warehouse | boolean | 
has_elevator | boolean | 
construction_year | smallint | 
property_condition | double | 
overview | varchar(1000) | 
is_active | boolean | 
service_type | integer | 
		
addresses |  |  |
-------|--|--|-
id | integer | pk
city_id | integer | fk
created | timestamp | 
modified | timestamp | 
number_building | varchar(10) | 
number_street | varchar(5) | 
area_locality | varchar(50) | 
zip_postcode | varchar(10) | 
other_address_details | varchar(50) | 
latitude | numeric(12,9) | 
longitude | numeric(12,9) | 
is_active | boolean | 

cities |  |  | 
-------|--|--|-
id | integer | pk
country_id | integer | fk
created | timestamp | 
modified | timestamp | 
name | varchar(50) | 
latitude | numeric(12,9) | 
longitude | numeric(12,9) | 
is_active | boolean | 

countries |  |  | 
-------|--|--|-
id | integer | pk
created | timestamp | 
modified | timestamp | 
name | varchar(50) | 
iso_3 | varchar(3) | 
iso_2 | varchar(2) | 
phone_code | varchar(3) | 
is_active | boolean | 

users  |  |  | 
-------|--|--|-
id | integer | pk
city_id | integer | fk
country_id | integer | fk
password | varchar(128) | 
last_login | timestamp | 
is_superuser | boolean | 
username | varchar(150) | 
first_name | varchar(30) | 
last_name | varchar(150) | 
is_staff | boolean | 
is_active | boolean | 
date_joined | timestamp | 
created | timestamp | 
modified | timestamp | 
email | varchar(50) | 
phone_number | varchar(15) | 
is_verified | boolean | 
date_of_birth | date | 
avatar | varchar(100) | 
is_real_estate | boolean | 
name | varchar(255) | 

#### Step 4 - Physical Model

[Physical Model_DB](./Physical%20Model_DB.pdf)



[Back apartacho project readme ](./README.md)