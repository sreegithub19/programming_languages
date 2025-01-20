*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${BROWSER}       chrome
${URL}           https://www.google.com
${SEARCH_TERM}   Robot Framework

*** Keywords ***
Open Browser to Google
    [Arguments]    ${url}
    Open Browser    ${url}    ${BROWSER}    options=add_chrome_options
    Maximize Browser Window

Add Chrome Options
    [Arguments]    ${options}
    ${options.add_argument}    --no-sandbox
    ${options.add_argument}    --disable-dev-shm-usage
    ${options.add_argument}    --headless
    ${options.add_argument}    --disable-gpu
    ${options.add_argument}    --window-size=1920,1080

*** Test Cases ***
Search in Google
    [Documentation]    This test case opens the browser, navigates to Google, performs a search, and verifies the search results.
    Open Browser to Google    ${URL}
    Input Text     name=q    ${SEARCH_TERM}
    Press Keys     name=q    ENTER
    Wait Until Page Contains    ${SEARCH_TERM}
    [Teardown]      Close Browser