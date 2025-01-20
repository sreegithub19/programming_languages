*** Settings ***
Library           OperatingSystem
Library           Collections
Library           RequestsLibrary
Library           String

Suite Setup       Setup Suite
Suite Teardown    Teardown Suite

Test Setup        Setup Test
Test Teardown     Teardown Test

*** Variables ***
${BASE_URL}       https://jsonplaceholder.typicode.com/posts  # Just an example URL

*** Keywords ***
Setup Suite
    Log    Suite setup is complete!

Teardown Suite
    Log    Suite teardown is complete!

Setup Test
    Log    Test setup is complete!

Teardown Test
    Log    Test teardown is complete!

Perform Task
    [Arguments]    ${url}
    ${response}=   GET    ${url}
    Should Be Equal As Numbers    ${response.status_code}    200
    Log    Response content: ${response.body}

*** Test Cases ***
Test Robot Get Data
    Perform Task    ${BASE_URL}
