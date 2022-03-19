// type definitions for Cypress object "cy"
/// <reference types="cypress" />

/**
 * Joskus feilaa, race conditions?
 */
describe('Find search products', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.power.fi/');

    /** Accept minimum cookies */
    cy.get('#declineButton').click();
  });

  afterEach(() => cy.clearCookies());

  it('Find products', () => {
    const searchTerms = 'iphone SE 2022';

    // Put search input
    cy.get('.search-input-form')
      .find('input')
      .first()
      .type(searchTerms)
      .wait(1000)
      .type('{enter}');

    // Get price of first item
    cy.get('pwr-price')
      .first()
      .then((element) => {
        const price = element.text();

        cy.log(`first item price: ${price}`);
      });

    // Print all results name and price
    cy.get('.search-product').each((element) => {
      const item = element.find('.product-name').text();
      const price = element.find('pwr-price').text();
      cy.log(`item: ${item}, price: ${price}`);
    });
  });

  it('Find black iPhone 12 price', () => {
    const searchTerms = 'musta iPhone 12';

    // Put search input, get search results, click first item
    cy.get('.search-input-form')
      .find('input')
      .first()
      .type(searchTerms)
      .get('.search-product')
      .first()
      .click();

    cy.get('.price-block-item-container')
      .find('pwr-price')
      .then((el) => cy.log(`iPhone 12 black price: ${el.text()}`));
  });
});
