import cy from 'cypress';

describe('User Login and Profile Access', () => {
  it('should allow the user to log in and access their profile', () => {
    // Naviger til innloggingssiden
    cy.visit('/login'); // Endre URL til logginnssiden

    // Vent på at innloggingsfeltene lastes
    cy.get('input[name="email"]')
      .should('be.visible')
      .type('brukerens@email.com');
    cy.get('input[name="password"]')
      .should('be.visible')
      .type('brukerenspassord');

    // Klikk på logg inn-knappen og vent til brukeren er logget inn
    cy.get('button[type="submit"]').should('be.visible').click();
    cy.url().should('include', '/profil'); // Verifiser at innloggingen var vellykket

    // Verifiser at brukerens profilside vises, for eksempel ved å sjekke etter brukernavnet
    cy.contains('Brukerens profilside').should('be.visible');
  });
});
