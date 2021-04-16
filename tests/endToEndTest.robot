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

Go to checkout
    Click Button    checkout
    Wait Until Page Contains Element    checkout_info_container

Fill user info
    Input Text    first-name    Maija
    Input Text    last-name     Meikalainen
    Input Text    postal-code   33720
    Click Button    continue

Show summary
    Wait Until Page Contains Element    finish
    Click Button    finish
    Wait Until Page Contains Element    checkout_complete_container

Click Log out   
    Click Button    react-burger-menu-btn
    Wait Until Page Contains Element    xpath=/html/body/div[1]/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/nav
    Click Link    xpath=//*[@id="logout_sidebar_link"] 
    Wait Until Page Contains Element    login-button
    Close Browser