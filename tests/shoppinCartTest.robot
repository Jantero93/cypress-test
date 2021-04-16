*** Settings ***
Documentation     Shopping cart test
Library           SeleniumLibrary


*** Test Cases ***
Open main page
    Open Browser	https://www.saucedemo.com/    firefox

Log in
    Input Text    user-name    standard_user
    Input Text    password     secret_sauce
    Click Button    login-button
    Wait Until Page Contains Element    inventory_container

Add item
    Wait Until Page Contains Element    add-to-cart-sauce-labs-backpack
    Click Button    add-to-cart-sauce-labs-backpack
    Wait Until Page Contains Element    remove-sauce-labs-backpack
    Click Element   shopping_cart_container
    Wait Until Page Contains Element    cart_contents_container
    Wait Until Page Contains Element    item_4_title_link

Remove item
    Click Button    remove-sauce-labs-backpack
    Wait Until Page Contains Element    xpath=/html/body/div/div/div/div[2]/div/div[1]/div[3]
    Close Browser   
    