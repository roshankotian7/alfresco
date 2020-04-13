class LoginPage
{

getEmail()
{
    return cy.get('#email1')
}

getPassword()
{
    return cy.get('#password1')

}
getFulllName()
{
  return cy.get('#fullName1')
}

getDescription()
{
   return cy.get('#description')
}
getCouponCode()
{
    return cy.get('#couponCode1')
}

getCheckBox()
{
    return cy.get('.action-multiple-checkboxes [type="checkbox"]')
}
getDropdown()
{
    return cy.get('.action-select')
}

getSubmitButton()
{
    return cy.get('.action-form')
}

}

export default LoginPage;



