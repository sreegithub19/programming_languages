API Testing with Cypress:

- Reference: https://dev.to/leading-edje/api-testing-with-cypress-4p8n

Steps:

- json-server cypress/e2e/3-api-testing/employee.js
- (another terminal): npx cypress open

- To run only a specific cypress file:

  - npx cypress run --spec cypress/e2e/3-api-testing/employeeTests.cy.js

- You must pass a valid event name when registering a plugin.
  The following are valid events:

        - after:run
        - after:screenshot
        - after:spec
        - before:browser:launch
        - before:run
        - before:spec
        - dev-server:start
        - file:preprocessor
        - task

- To run only cypress/e2e/3-api-testing/employeeTests.cy.js :
- <pre>
  npm run all: 
  
  kill -9 $(lsof -t -i:3000) || true && kill -9 $(lsof -t -i:3001) || true && json-server cypress/e2e/3-api-testing/employee.js & node cypress/e2e/3-api-testing/express_.js & npx cypress run --spec cypress/e2e/3-api-testing/employeeTests.cy.js
  <pre>


Steps:
- npm install && npm install sleep
- npm run every
- Artifact: cypress_automation/cypress/videos/employeeTests.cy.js.mp4