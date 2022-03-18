describe('Find search', () => {
  beforeEach(() => {
    cy.visit('https://www.power.fi/');
    cy.viewport(1920, 1080);
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
      .then(($element) => {
        const price = $element.text();

        cy.log(`first item price: ${price}`);
      });

    /** Log all products in search window */
    const phoneList = cy
      .get('.search-product')
      .then(($els) => Cypress.$.makeArray($els).map((el) => el.innerText));

    phoneList.each((phone) => cy.log(phone));
  });
});
