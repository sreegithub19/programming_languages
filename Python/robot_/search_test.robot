*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${BROWSER}       chrome
${URL}           https://www.google.com
${SEARCH_TERM}   Robot Framework

*** Test Cases ***
Search in Google
    [Documentation]    This test case opens the browser, navigates to Google, performs a search, and verifies the search results.
    Open Browser    ${URL}    ${BROWSER}
    Input Text      name=q    ${SEARCH_TERM}
    Click Button    name=btnK
    Wait Until Page Contains    ${SEARCH_TERM}
    [Teardown]      Close Browser