# pearson
Overview
This automation repo created using cypress tool and the structure looks like below

spec.cy.js - contains the tests sceanrios which covers.
* Register/Create account in pearson application using random data
* Register/Create account in pearson application using existing email address
* Search titles in the pearson portal
* Select the first title in the search

commonutils -  contains shared functions between each specification

fixture -  contains the testdata in json format

pages - contains all the locators specific to each page

1. Create directory 
2. git clone https://github.com/ShamiliS/pearson.git
3. Navigate to the directory

Installation
## Run the below commands from the terminal
npm install
# open Cypress App
npm run start
### Opens cypress window
Go to E2E Testing
Select browser -> Select E2E Testing in Chrome/ Electron button
Click the spec.cy.js file
Executes all the sceanrios

Implemented .yml to run the scenario in CI/CD github actions