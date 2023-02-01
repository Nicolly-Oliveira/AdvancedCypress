import locators from "../support/locators";

class LoginPage {
    go() { 
        cy.visit('https://opensource-demo.orangehrmlive.com/') 
        cy.contains('OrangeHRM OS 5.3') 
        cy.xpath(locators.PAGINA.VALIDATE_SITE).should('contain', 'OrangeHRM OS 5.3').and('be.visible') 
    }
}

export default new LoginPage;