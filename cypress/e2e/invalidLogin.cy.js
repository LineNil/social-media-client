import { apiPath } from '../../src/js/api/constants';
import { headers } from '../../src/js/api/headers.js';
import { save } from '../../src/js/storage/index.js';

describe('Invalid Login Credentials', () => {
  it('should show an error message for invalid credentials', () => {
    cy.visit('index.html');

    cy.contains('Login').click();

    cy.get('#loginEmailInput').type('geir@noroff.no');
    cy.get('#loginPassword').type('invalidpassword');

    cy.get('#logInButton').click();

    cy.on('window:alert', (text) => {
      cy.wrap(text).should(
        'eq',
        'Either your username was not found or your password is incorrect',
      );
    });
  });
});
