# To Install Cypress 
 npm install cypress@4.10.0

 # To open the cypress
 npx cypress open

 # To add xpath library
 npm install -D cypress-xpath

 # To run Through the CLI
 npx cypress run

 # To Run a specific File 
 npx cypress run --spec <File path>

 # To integrate the html report follow below steps
    1. npm install --save-dev mochawesome
    2. npm install --save-dev mochawesome-merge
    3. Add report json in cypress.json file 
            {
                "reporter": "mochawesome",
                "reporterOptions": {
                    "reportDir": "cypress/report/mochawesome-report",
                    "overwrite": true,
                    "html": true,
                    "json": false,
                    "timestamp": "mmddyyyy_HHMMss"
                }
            }