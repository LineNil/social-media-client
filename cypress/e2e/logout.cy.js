describe('User Logout', () => {
  it('should allow the user to log out with the logout button', () => {
    // Log in
    cy.visit('index.html');
    cy.contains('Login').click();
    cy.get('#loginEmailInput').type('geir@noroff.no');
    cy.get('#loginPassword').type('gggggggg');
    cy.get('#logInButton').click();
    cy.url().should('include', 'profile');

    // Log out
    cy.get('[data-auth=logout]').click();
    cy.contains('Login').should('be.visible');
  });
});
