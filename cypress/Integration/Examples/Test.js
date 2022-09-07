/// <reference types="Cypress" />

import HomePage from '../pageObjects/HomePage'
import ProductsPage from '../pageObjects/ProductsPage'
 
describe('My Second Test Suite', function() 
{
    before(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data=data   
        })

    })
   
 
it('My FirstTest case',function() {

const homePage = new HomePage()
const product = new ProductsPage()
cy.visit(Cypress.env('url'))
homePage.getEditBox().type(this.data.name)
homePage.getGender().select(this.data.gender)
homePage.getTwoWayDataBinding().type(this.data.name)
homePage.getEditBox().should('have.attr','minlength','2')
homePage.getEnterpreneaur().should("not.be.enabled")
homePage.getShopTab().click()

this.data.productName.forEach(element => {
    cy.selectProduct(element)
    
});

product.getCheckout().click()

cy.productPrice().then(value => console.log(value)); 
//expect().to.equal(value,'300000')

cy.get('.btn.btn-success').click()
cy.get('#country').type('Turkey').se
cy.wait(10000)
cy.get('.suggestions > ul > li > a').click()
cy.get('.checkbox > label').click()
cy.get('.ng-untouched > .btn').click()
//cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
cy.get('.alert').then(function(element){

    const actualText=element.text()
    expect(actualText.includes("Success"))


})

}  )
 

}  )