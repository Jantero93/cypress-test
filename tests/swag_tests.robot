*** Settings ***
Documentation     Test webi page
Library           SeleniumLibrary


*** Test Cases ***
Open main page
    Open Browser	https://www.saucedemo.com/    firefox
Login input
    Input Text    user-name    standard_user
    Input Text    password     secret_sauce
    Click Button    login-button  

Login succesfull    
    Wait Until Page Contains Element   inventory_container

Close Browser
    Close Browser

