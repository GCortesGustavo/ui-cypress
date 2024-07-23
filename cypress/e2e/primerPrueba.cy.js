// const { describe } = require("mocha");


describe("Primer prueba", () => {
    
    it("Navegar a la primer página", () => {
        cy.visit("https://platzi.com/")
        
        expect(true).to.be.true;
    
    });
});