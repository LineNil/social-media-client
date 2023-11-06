import { apiPath } from '../../src/js/api/constants';
import { headers } from '../../src/js/api/headers.js';
import { save } from '../../src/js/storage/index.js';

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
