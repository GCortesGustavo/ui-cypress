Cypress.on("uncaught:exception", (err, runnable) => {
    // Registrar el error en la consola
    console.error("Excepción no capturada", err);
    
    // Devolver false aquí previene que Cypress falle la prueba
    return false;
});

describe("Asersiones", () => {

	//Antes de cada prueba
	beforeEach(() => {
		cy.visit("/automation-practice-form")
	})

	after(() => {
		cy.visit("/")
	})

    it("Asersion", () => {
        //cy.visit("/automation-practice-form")
        
        //Le pregunta a la url si incluye el contenido
        cy.url().should("include", "demoqa.com")
    

        cy.get("#firstName")
            .should("be.visible")
            .and('have.attr', 'placeholder', 'First Name')
    
    })

    it('Assert 2', () => {
		//cy.visit('/automation-practice-form')
		cy.url().should('include', 'demoqa.com')
		cy.get('#firstName').then((element) => {
			expect(element).to.be.visible
			expect(element).to.have.attr('placeholder', 'First Name')
		})
	})

	it('Assert 3', () => {
		//cy.visit('/automation-practice-form')
		cy.url().should('include', 'demoqa.com')
		cy.get('#firstName').then((element) => {
			assert(element.attr('placeholder', 'Firts Name'))
		})
	})
})