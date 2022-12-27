describe('Launches page', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.wait(5000);
  })

  it('shows 10 launches initially', () => {    
    cy.get('[data-testid^="launch-"]').should('have.length', 10);
  });

  it('loads 10 extra launches if the "load more" button is clicked', () => {
    cy.contains('Load more').click();
    cy.get('[data-testid^="launch-"]').should('have.length', 20);
  })
});
