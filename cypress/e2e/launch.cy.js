const LABELS_TO_CHECK = ['Launch date', 'First stage cores', 'Second stage payloads'];

describe('Launch card', () => {

  it('shows the expected info', () => {
    cy.visit('http://localhost:3000');
    cy.wait(5000);
    const firstLaunch = cy.get('[data-testid^="launch-"]').first();
    LABELS_TO_CHECK.forEach(label => {
      firstLaunch.should('include.text', label);
    });
  });

});
