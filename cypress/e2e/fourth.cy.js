import {elements} from '../fixtures/selector'
describe('Page Object Practice', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('standard user', () => {
      cy.get(elements.usernameField).type(elements.standardUser)
      cy.get(elements.passwordField).should('be.empty').type(elements.password)
      cy.get(elements.loginButton).click()
      cy.get(elements.backPack).click()
      cy.get(elements.bikeLight).click()
      cy.get(elements.boltTshirt).click()
      cy.get(elements.fleeceJacket).click()
      cy.get(elements.oneSie).click()
      cy.get(elements.redTshirt).click()
      cy.get(elements.shoppingCart).click()
      cy.get(elements.checkout).click()
      cy.get(elements.firstNamefield).type(elements.firstName)
      cy.get(elements.lastNamefield).type(elements.lastName)
      cy.get(elements.zipCodefield).type(elements.zipCode)
      cy.get(elements.continue).click()
      cy.get(elements.finish).click()
      cy.get(elements.selectButton).click()
      cy.get(elements.logOut).click()
    })
  })
  
