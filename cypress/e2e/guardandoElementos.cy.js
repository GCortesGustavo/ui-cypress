Cypress.on("uncaught:exception", (err, runnable) => {
    // Registrar el error en la consola
    console.error("Excepción no capturada", err);
    
    // Devolver false aquí previene que Cypress falle la prueba
    return false;
});

describe("Guardando elementos", () => {

    it('Evitar Repeticion', ()=>{

        cy.once('uncaught:exception', () => false);

        cy.visit('/automation-practice-form')
    
        cy.get('input[placeholder="First Name"]').parents('form').then((form) => { 
        
        const inputs = form.find('input') 
        const divs = form.find('div') 
        const labels = form.find('label') 

        //Asersiones
        expect(inputs.length).to.equal(15) 
        expect(divs.length).to.equal(70) 
        expect(labels.length).to.equal(16)

        cy.wrap(inputs).should("have.length", 15)
        })
    })
})