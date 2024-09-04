describe('LOGIN', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.title().should('equal', 'Swag Labs')
    })
  
    it('standard user', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('.login_logo').should('be.visible')
      cy.get('[data-test="username"]').should('be.visible').and('be.empty').type('standard_user')
      cy.get('[#"password"]').should('be.visible').and('be.empty').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.contains('products').should('be.visible')
      cy.get('.inventory_list').should('exist')
      cy.get('.inventory_list').should('have.length.greaterThan', 5).and('not.be.empty')
    })
    it('lockedout User', () => {
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible').and('be.empty').type('locked_out_user')
        cy.get('[data-test="password"]').should('be.visible').and('be.empty').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Sorry, this user has been locked out.')
      })
      
      

  