import locators from "../support/locators";

class Page {
    visit() { 
        cy.viewport(1440, 900)
        cy.visit('https://opensource-demo.orangehrmlive.com/') 
    }
    pageCorrect() { 

        cy.xpath(locators.LOGIN.USER).should("be.visible")
        cy.xpath(locators.LOGIN.PASSWORD).should("be.visible")       
        cy.xpath(locators.LOGIN.BTN_LOGIN).should("be.visible")
        cy.xpath(locators.PAGINA.VALIDATE_SITE).should('contain', 'OrangeHRM OS 5.3').and('be.visible')
    }
    login(login) {

        cy.xpath(locators.LOGIN.USER).type(login.login)
        cy.xpath(locators.LOGIN.PASSWORD).type(login.password) 
    }
    submit(login) { 
        cy.xpath(locators.LOGIN.BTN_LOGIN).click()
    }      
}

export default new Page;