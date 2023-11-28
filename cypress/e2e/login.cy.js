describe('User Login and Profile Access', () => {
  it('should allow the user to log in and access their profile', () => {
    cy.visit('index.html');

    cy.contains('Login').click();

    cy.get('#loginEmailInput').type('geir@noroff.no');
    cy.get('#loginPassword').type('gggggggg');

    cy.get('#logInButton').click();

    cy.url().should('include', '/?view=profile');

    cy.contains('geir').should('be.visible');
  });
});
