// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("selectProduct",(productName)=> 
{
    cy.get('h4.card-title').each(($el,index,$list) => 
    {
        if($el.text().includes(productName))
        {
          cy.get('button.btn.btn-info').eq(index).click()
        }
    })
    
})
Cypress.Commands.add("productPrice",(productPrice)=> 
{
    let totalPrice=0
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list) => 
    {
      
      let price=$el.text().split(" ");
      price =price[1].trim();
      totalPrice = parseInt(totalPrice)+parseInt(price);
      return cy.wrap(totalPrice);    
      
    })
    
   
    
    
})


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })