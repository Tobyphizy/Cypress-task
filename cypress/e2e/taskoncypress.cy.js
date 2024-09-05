describe('LOGIN', () => {
    it('standard user', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
      cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="logout-sidebar-link"]').click()
    })
  
    it('locked_out_user', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('locked_out_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      
    })
  })it('problem_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('problem_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    
  })

  it('performance_glitch_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('performance_glitch_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    
  })


  it('error_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('error_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    
  })

  it('visual_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('visual_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    
  })


it('error_user', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="username"]').type('error_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
  
})

it('visual_user', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="username"]').type('visual_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
  
})


  
    