Cypress.on("uncaught:exception", (err, runnable) => {
    // Registrar el error en la consola
    console.error("Excepción no capturada", err);
    
    // Devolver false aquí previene que Cypress falle la prueba
    return false;
});


describe("Interactuar con Inputs", () => {
    
    it("input type text", () => {
        cy.visit("/automation-practice-form")
        cy.get('#firstName').type("Gustavo")

        cy.get("#lastName").type("Cortes")

        cy.get('#firstName').type("{selectAll}{backspace}")
        cy.get('#firstName').type("Adolfo")

        cy.get('#firstName').clear()
        cy.get("#lastName").clear()

    })


    it("Input type checkboxes and radio buttons", () => {
        cy.visit("/automation-practice-form")

        // cy.get("#gender-radio-1").check({force: true})
        //cy.get("#gender-radio-1").click({force: true})
        cy.get('label[for="gender-radio-1"]').click()

        // cy.get('#hobbies-checkbox-1').check({force: true})
        // cy.get('#hobbies-checkbox-1').uncheck({force: true})
        cy.get('label[for="hobbies-checkbox-1"]').click()
        cy.get('label[for="hobbies-checkbox-1"]').click()
    })

    it('extract information with function', function() {
        cy.visit('/automation-practice-form');
        cy.get('#lastName').type('Gustavo')
        cy.get('#lastName').invoke('val').as('GlobalVariable')
    })
    
    it('get information with function', function() {
        cy.visit('/automation-practice-form');
        cy.get('#firstName').type(this.GlobalVariable)
    })


    it.only('Interactuando con los dropdowns', function() {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')

        // Cuenta desde indice 0
        // en selects puedes seleccionar por indice, value o texto
        cy.get('select').select(2)

        cy.get('select').select('opel').should('have.value', 'opel')

        cy.get('select').select('Opel').should('have.value', 'opel')
    })

    // it.only('Interactuando con los dropdowns dinamicos', function() {
    //     cy.visit('https://react-select.com/home/')
    //     cy.get('#react-select-6-input').click()

    //     cy.get('#react-select-6-listbox').children().children().each(($el, index, $list)=> {
    //         if($el.text() === 'Red') {
    //             cy.wrap($el).click()
    //         }
    //     })
        
    // })

    
});