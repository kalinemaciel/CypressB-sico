/// <reference types="cypress" />

describe('Testes na plataforma TICKETBOX', () => {
    beforeEach(() => cy.visit('https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com/index.html'))

    it('Preencher e resetar formulário', () => {
        const firstName = 'Katy'
        const lastName  = 'Perry'
        const fullName  = `${firstName} ${lastName}`

        cy.get('#first-name').type('Katy')
        cy.get('#last-name').type('Perry')
        cy.get('#email').type('katyperry@daisydove.com')
        cy.get('#ticket-quantity').select("2")
        cy.get('#vip').check()
        cy.get('#friend').check()
        cy.get('#requests').type('Caipirinha')

        cy.get('.agreement p').should('contain',`I, ${fullName}, wish to buy 2 VIP tickets.`)

        cy.get('#agree').click()
        cy.get('#signature').type(fullName)
        cy.get('button[type="submit"]').as('submitButton').should('not.be.disabled')

        cy.get('button[type="reset"]').click()
        cy.get('@submitButton').should('be.disabled')
    })
})

describe('Testes utilizando Commands', () => {
    beforeEach(() => cy.visit('https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com/index.html'))

    it('Preenhe campos obrigatórios e verifica se os botões estão habilitados', () => {
        const costumer = {
            firstName : 'Orlando',
            lastName : 'Bloom',
            email : 'orlandobloom@daisydove.com'   
        }
        cy.camposObrigatorios(costumer)

        cy.get('button[type="submit"]').as('submitButton').should('not.be.disabled')
        cy.get('#agree').uncheck()
        cy.get('@submitButton').should('be.disabled')
    })
})
