/// <reference types="cypress" />

describe('Testes na plataforma TICKETBOX', () => {
    beforeEach(() => cy.visit('https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com/index.html'))
    
    it('Preenche campos de texto', () => {
        const firstName = 'Katy'
        const lastName  = 'Perry'

        cy.get('#first-name').type('Katy')
        cy.get('#last-name').type('Perry')
        cy.get('#email').type('katyperry@daisydove.com')
        cy.get('#requests').type('Brigadeiro')
        cy.get('#signature').type(`${firstName} ${lastName}`)
    })
    it('Seleciona quantidade de tickets', () => {
        cy.get('#ticket-quantity').select("2")
    })
    it('Seleciona "VIP" ticket type', () => {
        cy.get('#vip').check()
    })
    it('Seleciona "Friend" e "Publication" e desmarca "Publication"', () => {
        cy.get('#friend').check()
        cy.get('#publication').check()
        cy.get('#publication').uncheck()
    })
    it('Possui "TICKETBOX" no cabeçalho', () => {
        cy.get('header h1').should('contain', 'TICKETBOX')
    })
    it('Alerta quando houver email inválido', () => {
        cy.get('#email').as('email').type('katyperry_daisydove.com')
        cy.get('#email.invalid').should('exist')
        cy.get('@email').clear().type('katyperry@daisydove.com')
        cy.get('#email.invalid').should('not.exist')
    })
})