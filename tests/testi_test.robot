*** Settings ***
Documentation     Test webi page
Library           SeleniumLibrary


*** Test Cases ***
Open main page
    Open Browser	http://localhost:3000/    firefox
Set Text Form
    Input Text    firstName    4
    Input Text    lastName     +
    Input Text    username     4
Click Button and check result
    Click Button   button
    Wait Until Element Is Visible    endValue
    Element Should Contain  endValue    8
Close Browser
    Close Browser

