*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${BROWSER}       chrome
${URL}           https://www.google.com
${SEARCH_TERM}   Robot Framework

*** Keywords ***
Open Browser to Google
    [Arguments]    ${url}
    ${chrome_options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method    ${chrome_options}    add_argument    --no-sandbox
    Call Method    ${chrome_options}    add_argument    --disable-dev-shm-usage
    Call Method    ${chrome_options}    add_argument    --headless
    Call Method    ${chrome_options}    add_argument    --disable-gpu
    Create WebDriver    Chrome    options=${chrome_options}
    Set Window Size ${1920} ${1080}
    Go To    ${url}
    Maximize Browser Window

*** Test Cases ***
Search in Google
    [Documentation]    This test case opens the browser, navigates to Google, performs a search, and verifies the search results.
    Open Browser to Google    ${URL}
    Input Text     name=q    ${SEARCH_TERM}
    Press Keys     name=q    ENTER
    Wait Until Page Contains    ${SEARCH_TERM}
    [Teardown]      Close Browser
