const LABELS_TO_CHECK = ['Launch date', 'First stage cores', 'Second stage payloads'];

describe('Launch card', () => {
  let firstCard;

  beforeEach(() => {
    cy.visit('http://localhost:3000');
    firstCard = cy.get('[data-test-id^="launch-"]').first();
  });

  it('shows the expected info', () => {
    LABELS_TO_CHECK.forEach(label => {
      firstCard.should('include.text', label);
    });
  });
});
