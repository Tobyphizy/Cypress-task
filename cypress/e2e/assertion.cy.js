describe('LOGIN', () => {

    it('standard user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.login_logo').should('be.visible');
    cy.get('[data-test="username"]').should('be.visible').and('exist').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
  })
    
    })
  