/// <reference types="cypress" />

import locators from '../support/locators';

describe('Página de Login', () => {

  beforeEach('Visitar site, fazer login e validação do login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.xpath(locators.PAGINA.VALIDAR_SITE).should('contain', 'OrangeHRM OS 5.3').and('be.visible')   
  })

  it('Fazer login com usuário válido', () => {
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
    cy.xpath(locators.LOGIN.VALIDAR_LOGIN)
        .should('be.visible')
        .and('contain', 'Dashboard')
  })

  it('Fazer login com usuário inválido', () => {
    cy.xpath(locators.LOGIN.USER)
      .should('be.visible')
      .type('UsuarioInvalido')
      .should('have.value', 'UsuarioInvalido')
    cy.xpath(locators.LOGIN.PASSWORD)
          .should('be.visible')
          .type('SenhaInvalida')
          .should('have.value', 'SenhaInvalida')
    cy.xpath(locators.LOGIN.BTN_LOGIN)
        .should('be.visible')
        .click() 
    cy.xpath(locators.LOGIN.INVALIDAR_lOGIN)
        .should('be.visible')
        .and('have.text', 'Invalid credentials')  
  })

  it('Fazer login com campos vazios', () => {
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
    cy.xpath(locators.LOGIN.INVALIDAR_lOGIN)
        .should('be.visible')
        .and('have.text', 'Invalid credentials')
  })

})