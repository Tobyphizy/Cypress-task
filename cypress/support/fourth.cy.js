import{elements} from'../fixtures/selector'
describe('Page Object Practice', () => {
   beforeEach(() => {
    cy.visit('/')
  })
    cy.get(elements.usernameField).type(elements.usernameField)
    cy.get(elements.passwordField).type(elements.password)
    cy.get(elements.loginButton).type(elements.loginButton)
    cy.get(elements.secretSauce).type(elements.secretSauce)
    cy.get(elements.addToCart[0]).type(elements.addToCart[0])
    cy.get(elements.addToCart[1]).type(elements.addToCart[1]) 
    cy.get(elements.addToCart[2]).type(elements.addToCart[2])
    cy.get(elements.addToCart[3]).type(elements.addToCart[3])
    cy.get(elements.addToCart[4]).type(elements.addToCart[4])
    cy.get(elements.addToCart[5]).type(elements.addToCart[5])
    cy.get(elements.shoppingCartLink).type(elements.shoppingCartLink)
    cy.get(elements.checkout).type(elements.checkout)
    cy.get(elements.logoutSidebarLink).type(elements.logoutSidebarLink)
  })

    