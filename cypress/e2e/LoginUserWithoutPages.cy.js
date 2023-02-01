/// <reference types="cypress" />

import locators from '../support/locators';

describe('Validate login page', () => {

  beforeEach('Check if the page loaded correctly', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.xpath(locators.PAGINA.VALIDATE_SITE).should('contain', 'OrangeHRM OS 5.3').and('be.visible')   
  })

  it('Login with valid data', () => {
    cy.xpath(locators.LOGIN.USER)
        .should('be.visible')
        .type('Admin')
        .should('have.value', 'Admin')
    cy.xpath(locators.LOGIN.PASSWORD)
        .should('be.visible')
        .type('admin123')
        .should('have.value', 'admin123')
    cy.xpath(locators.LOGIN.BTN_LOGIN)
        .should('be.visible')
        .click()
    cy.xpath(locators.LOGIN.VALIDATE_LOGIN)
        .should('be.visible')
        .and('contain', 'Dashboard')
  })

  it('Validate access with invalid login', () => {
    cy.xpath(locators.LOGIN.USER)
      .should('be.visible')
      .type('UsuarioInvalido')
      .should('have.value', 'UsuarioInvalido')
    cy.xpath(locators.LOGIN.PASSWORD)
          .should('be.visible')
          .type('admin123')
          .should('have.value', 'admin123')
    cy.xpath(locators.LOGIN.BTN_LOGIN)
        .should('be.visible')
        .click() 
    cy.xpath(locators.LOGIN.INVALIDATE_lOGIN)
        .should('be.visible')
        .and('have.text', 'Invalid credentials')  
  })

  it('Validate access with invalid password', () => {
    cy.xpath(locators.LOGIN.USER)
      .should('be.visible')
      .type('Admin')
      .should('have.value', 'Admin')
    cy.xpath(locators.LOGIN.PASSWORD)
          .should('be.visible')
          .type('InvalidPassaword')
          .should('have.value', 'InvalidPassaword')
    cy.xpath(locators.LOGIN.BTN_LOGIN)
        .should('be.visible')
        .click() 
    cy.xpath(locators.LOGIN.INVALIDATE_lOGIN)
        .should('be.visible')
        .and('have.text', 'Invalid credentials')  
  })

  it('Validate access with login and empty password', () => {
    cy.xpath(locators.LOGIN.USER)
        .should('be.visible')
        .and('be.empty')
    cy.xpath(locators.LOGIN.PASSWORD)
        .should('be.visible')
        .and('be.empty')
    cy.xpath(locators.LOGIN.BTN_LOGIN)
        .should('be.visible')
        .click()
    cy.xpath(locators.LOGIN.EMPTY_lOGIN_USER)
        .should('be.visible')
        .and('have.text', 'Required')
    cy.xpath(locators.LOGIN.EMPTY_lOGIN_PASSWORD)
      .should('be.visible')
      .and('have.text', 'Required')
  })

  it('Fazer login com usuário válido e senha incorreta', () => {
    cy.xpath(locators.LOGIN.USER)
      .should('be.visible')
      .type('Admin')
      .should('have.value', 'Admin')
    cy.xpath(locators.LOGIN.PASSWORD)
          .should('be.visible')
          .type('SenhaInvalida')
          .should('have.value', 'SenhaInvalida')
    cy.xpath(locators.LOGIN.BTN_LOGIN)
        .should('be.visible')
        .click() 
    cy.xpath(locators.LOGIN.INVALIDATE_lOGIN)
        .should('be.visible')
        .and('have.text', 'Invalid credentials')
  })

  it('Validate recover password', function () {   
      //sugestão de teste para fazer         
  })

  it("Check if clicking the cancel button will return you to the login screen", () => {     
      //sugestão de teste para faze
  })            

})