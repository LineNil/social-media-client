import { apiPath } from '../../src/js/api/constants';
import { headers } from '../../src/js/api/headers.js';
import { save } from '../../src/js/storage/index.js';

describe('User Login and Profile Access', () => {
  it('should allow the user to log in and access their profile', () => {
    cy.visit('index.html');

    cy.contains('Login').click();

    cy.get('#loginEmailInput').type('geir@noroff.no');
    cy.get('#loginPassword').type('gggggggg');

    cy.get('#logInButton').click();

    cy.url().should(
      'include',
      'http://localhost:61253/?view=profile&name=geir',
    );

    cy.contains('geir').should('be.visible');
  });
});
