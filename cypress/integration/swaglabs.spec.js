describe('swag lab tests', () => {
  beforeEach(() => cy.visit('https://www.saucedemo.com/'));

  it('successful login', () => {
    cy.get('[placeholder="Username"]').type('standard_user');
    cy.get('[type="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#inventory_container').should('be.visible');
  });

  it('failed login', () => {
    cy.get('[placeholder="Username"]').type('no name');
    cy.get('[type="password"]').type('invalid password');
    cy.get('#login-button').click();
    cy.get('.error-message-container').should('be.visible');    
  });
});
