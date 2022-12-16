describe('Launches page', () => {
  it('shows 10 launches', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-test-id^="launch-"]').should('have.length', 10);
  });
});
