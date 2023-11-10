/* eslint-disable jest/valid-expect */

describe('Invalid Login Credentials', () => {
  it('should show an error message for invalid credentials', () => {
    cy.visit('index.html');

    cy.contains('Login').click();

    cy.wait(1000);

    cy.get('#loginEmailInput').type('geir@noroff.no');
    cy.get('#loginPassword').type('invalidpassword');

    cy.get('#logInButton').click();

    cy.on('window:alert', (text) => {
      expect(text).to.equal(
        'Either your username was not found or your password is incorrect',
      );
    });
  });
});
