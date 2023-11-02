import { apiPath } from '../../src/js/api/constants';
import { headers } from '../../src/js/api/headers.js';
import { save } from '../../src/js/storage/index.js';

describe('User Login and Profile Access', () => {
  it('should allow the user to log in and access their profile', () => {
    cy.visit('index.html'); // Besøk forsiden

    // Finn og klikk på "Logg inn"-knappen øverst
    cy.contains('Login').click();

    // Fyll innloggingsdetaljer
    cy.get('#loginEmailInput').type('geir@noroff.no');
    cy.get('#loginPassword').type('gggggggg');

    // Klikk på logg inn-knappen
    cy.get('#logInButton').click();

    // Verifiser at innloggingen var vellykket ved å sjekke URL
    //cy.url().should('include', 'index.html');
    cy.url().should(
      'include',
      'http://localhost:60447/?view=profile&name=geir',
    );

    // Verifiser at brukerens profilside vises, for eksempel ved å sjekke teksten
    cy.contains('geir').should('be.visible');
  });
});
