Cypress.on("uncaught:exception", (err, runnable) => {
    // Registrar el error en la consola
    console.error("Excepción no capturada", err);
    
    // Devolver false aquí previene que Cypress falle la prueba
    return false;
});


describe("Interactuar con elementos", () => {
    
    it("click", () => {
        cy.visit("/buttons")
        cy.get("button").eq(3).click()
        cy.get("#dynamicClickMessage").should("be.visible").and("contain", "You have done a dynamic click")
    });

    it("double click", () => {
        cy.visit("/buttons")
        cy.get("button").eq(1).dblclick()
    });

    it("right click", () => {
        cy.visit("/buttons")
        cy.get("button").eq(2).rightClick()
    })

    it.only( "Force Click", () => {
    cy.visit("/dynamic_controls")
    cy.get("#checkbox-example button").click()
    cy.get("#checkbox-example").should("contain", "It's gone!")
    })

});