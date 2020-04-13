import PrimaryNavPage from '../../support/pageobject/PrimaryNavPage'

describe('My Alfresco Nav Test Suite', function() 
{

 it('My First Primary Nav Test case',function() {
 
    const primaryNavPage=new PrimaryNavPage()
    cy.visit(Cypress.env('url'))
    primaryNavPage.getNavBar().contains('Commands').click()
    cy.get('.dropdown-menu').contains('Navigation').click()
    
  }) 

  it('cy.go() - go back or forward in the browser\'s history', function() {
    
  cy.location('pathname').should('include', 'navigation')

  cy.go('back')
  cy.location('pathname').should('not.include', 'navigation')

  cy.go('forward')
  cy.location('pathname').should('include', 'navigation')

  // clicking back
  cy.go(-1)
  cy.location('pathname').should('not.include', 'navigation')

  // clicking forward
  cy.go(1)
  cy.location('pathname').should('include', 'navigation')
}) 
 
 it('cy.reload() - reload the page',function() {
  
  cy.reload()

 }) 

 })
 

