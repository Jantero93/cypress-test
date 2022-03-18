describe('Find search', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.power.fi/');
  });

  /**
   * Joskus feilaa, joskus ei. Race condition sivun latautumisen suhteen?
   */
  it('Find products', () => {
    const searchTerms = 'iphone SE 2022';

    /** Accept minimum cookies */
    cy.get('#declineButton').click();

    /** Put search input */
    cy.get('.search-input-form')
      .find('input')
      .first()
      .type(searchTerms)
      .wait(1000)
      .type('{enter}');

    /** Get price of first item */
    cy.get('pwr-price')
      .first()
      .then((element) => {
        const price = element.text();

        cy.log(`first item price: ${price}`);
      });

    /** Print all results name and price */
    cy.get('.search-product').each((element) => {
      const item = element.find('.product-name').text();
      const price = element.find('pwr-price').text();
      cy.log(`item: ${item}, price: ${price}`);
    });
  });
});
