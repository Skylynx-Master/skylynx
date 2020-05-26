
[Back apartacho project readme ](./README.md)

# Description DataBase Design project apartacho

Conceptual and logical design of the database for the project apartacho product of the process of training the program PlatziMaster cohort 1-2020

## Contents

-   [Step 1 - Definition of entities](#step-1-definition-of-entities)
-   [Step 2 - Relations between entities](#step-2-relations-between-entities)


#### Step 1 - Definition of entities

Entity  | Description
------- | -------
User | Regista the common data of different users of the system
Property | Property or root object of the sale or rent
Country | Country from which the Property
City | city ​​from which the Property
Location | Entity that links the places where the properties are
offer | Entity that manages the offers made by bidders and real estate
Publication | Entity that keeps applications such as property offers.
tracing | Entity that is responsible for storing the visits do interested in your property
favorite | Entity that stores mark as favorites property that can be accessed later


#### Step 2 - Relations between entities

Entity | User | Property | Country | City | Location | offer | Publication | tracing | favorite
-------|------|----------|---------|------|----------|-------|-------------|---------|---------
User | X | 0-M | 1-M | 1-M | 1-M | 0-M | X | 0-M | M-M
Property | 0-M | X | 1-M | 1-M | 1-M | 1-M | X | 1-M | 0-M
Country | 1-M | 1-M | X | 1-M | M-M | X | X | X | X
City | 1-M | 1-M | 1-1 | X | 1-M | X | X | X | X
Location | 1-M | 1-M | M-M | 1-M | X | X | X | X | X
offer | 0-M | 1-M | X | X | X | X | X | M-M | X
Publication | 0-M | X | X | X | X | X | X | M-M | X
tracing | 0-M | 1-M | X | X | X | M-M | M-M | X | X
favorite | M-M | 0-M | X | X | X | X | X | X | X

[Back apartacho project readme ](./README.md)
