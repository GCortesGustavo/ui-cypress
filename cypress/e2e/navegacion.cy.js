// const { describe } = require("mocha");


describe("Navegacion", () => {
    
    it("Navegar a la primer página", () => {
        cy.visit("https://platzi.com/")
    });

    it("Recargar la página", () => {
        cy.reload()
    })

    it("Recargar la página de forma forzada", () => {
        cy.visit("https://google.com/")
        cy.reload(true)
    })

    it("Navegar hacia atras", () => {
        cy.visit("https://google.com/")
        cy.visit("https://www.google.com/search?q=platzi&sca_esv=36d237c1c360350f&hl=es&source=hp&ei=NUWhZoXwGLLT1sQP84KCwAQ&iflsig=AL9hbdgAAAAAZqFTRRmJjSdrD2gqxZ86FczYDuGACoq4&ved=0ahUKEwjF3qjSpMCHAxWyqZUCHXOBAEgQ4dUDCA0&uact=5&oq=platzi&gs_lp=Egdnd3Mtd2l6IgZwbGF0emlIoQFQAFgAcAB4AJABAJgBAKABAKoBALgBA8gBAPgBAZgCAKACAJgDAJIHAKAHAA&sclient=gws-wiz")
        cy.go("back")
    })

    it.only("Navegar hacia adelante", () => {
        cy.visit("https://google.com/")
        cy.visit("https://www.google.com/search?q=platzi&sca_esv=36d237c1c360350f&hl=es&source=hp&ei=NUWhZoXwGLLT1sQP84KCwAQ&iflsig=AL9hbdgAAAAAZqFTRRmJjSdrD2gqxZ86FczYDuGACoq4&ved=0ahUKEwjF3qjSpMCHAxWyqZUCHXOBAEgQ4dUDCA0&uact=5&oq=platzi&gs_lp=Egdnd3Mtd2l6IgZwbGF0emlIoQFQAFgAcAB4AJABAJgBAKABAKoBALgBA8gBAPgBAZgCAKACAJgDAJIHAKAHAA&sclient=gws-wiz")
        cy.go("back")
        cy.go("forward")
    })
});