describe('Tipos de localizadores', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it('Obtenerlo por medio de un tag', () => {
        cy.visit('/automation-practice-form')
        cy.get('input');
    })

    it('Obteniendo por un atributos', () => {
        cy.visit('/automation-practice-form')
        cy.get('[placeholder="First Name"]')
    });

    it('Obteniendo por un atributo y tag', () => {
        cy.visit('/automation-practice-form')
        cy.get('input[placeholder="First Name"]')
    });
})