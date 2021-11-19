
Cypress.Commands.add('camposObrigatorios', data => {
    cy.get('#first-name').type(data.firstName)
    cy.get('#last-name').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#agree').check()
 })
