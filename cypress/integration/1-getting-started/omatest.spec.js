describe('calculate basic', () => {
  beforeEach(() => cy.visit('http://localhost:3000'));

  it('sum numbers', () => {
    const firstValue = 1;
    const secondValue = 3;
    const answer = 4;
    const operator = '+';

    cy.get('#firstName').type(firstValue);
    cy.get('#lastName').type(operator);
    cy.get('#username').type(secondValue);
    cy.get('#button').click();
    cy.contains('#endValue', answer);
  });

  it('divide by zero', () => {
    const first = 1;
    const second = 0;
    const operator = '/';
    const answer = 'Infinity';

    cy.get('#firstName').type(first);
    cy.get('#lastName').type(operator);
    cy.get('#username').type(second);
    cy.get('#button').click();
    cy.contains('#endValue', answer);
  });
});
