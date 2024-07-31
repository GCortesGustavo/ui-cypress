Cypress.on("uncaught:exception", (err, runnable) => {
    // Registrar el error en la consola
    console.error("Excepción no capturada", err);
    
    // Devolver false aquí previene que Cypress falle la prueba
    return false;
});

describe("Esperando por elementos", () => {

	//Antes de cada prueba
	beforeEach(() => {
		cy.visit("https://platzi.com")
	})

    it("Esperar por un tiempo definido", () => {
        cy.wait(5000)
    })

    it("Esperar por un elemento", () => {
        cy.get("#courses-search", {timeout: 6000})
    })

    it("Esperar por un elemento y hacer una asercion", () => {
        cy.get("#courses-search", {timeout: 6000}).should("be.visible")
    })
})

describe("Desabilitar el retry", () => {

	//Antes de cada prueba
	beforeEach(() => {
		cy.visit("/automation-practice-form")
	})

    it("Desabilitando el retry", () => {
        cy.get("#courses-search", {timeout: 0})
    })

})