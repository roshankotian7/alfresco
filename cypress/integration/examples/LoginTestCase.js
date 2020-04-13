import LoginPage from '../../support/pageobject/LoginPage'

describe('My Alfresco Login Test Suite', function() 
{

    before(function() {
        // runs once before all tests in the block
        
      })

      it('My First Login Test case',function() {
 
        const loginPage=new LoginPage()
        cy.visit(Cypress.env('url')+"/commands/actions")
        loginPage.getEmail().type('a@b.com')
        loginPage.getPassword().type('PAssword')
        loginPage.getFulllName().type('Alfresco Test')
        loginPage.getDescription().type('This is the Describe text field £R£$R hbvev')
        loginPage.getCouponCode().type('1234')
        loginPage.getCheckBox().check(['checkbox1']).should('be.checked')
        loginPage.getDropdown().select(['fr-oranges'])
        loginPage.getSubmitButton().submit().next().should('contain', 'Your form has been submitted!')

 })
})    
