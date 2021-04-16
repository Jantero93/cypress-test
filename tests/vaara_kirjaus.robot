*** Settings ***
Documentation     Wrong user
Library           SeleniumLibrary


*** Test Cases ***
Open main page
    Open Browser	https://www.saucedemo.com/    firefox
Login wrong password
    Input Text    user-name    standard_user
    Input Text    password     secret_sauce123
    Click Button    login-button  

Login unsuccesful
    Wait Until Page Contains Element  xpath=/html/body/div[1]/div/div[2]/div[1]/div[1]/div/form/div[3]/h3
    Close Browser

