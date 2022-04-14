describe('tdd test', () => {
  beforeEach(() => cy.visit('/'));

  it('tdd test number uno', () => {
    let max = 5;

    cy.get('#clickCounter').contains('0');

    for (let i = 0; i < max; i++) {
      cy.get('#button1').click();
    }

    cy.get('#clickCounter').contains(max);
  });
});
