const locators = {
    PAGINA:{
        VALIDAR_SITE: '//body/div[@id="app"]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/p[1]'
    },

    LOGIN: {
        USER: '//body/div[@id="app"]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/form[1]/div[1]/div[1]/div[2]/input[1]',
        PASSWORD: '//body/div[@id="app"]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/form[1]/div[2]/div[1]/div[2]/input[1]',
        BTN_LOGIN: '//body/div[@id="app"]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/form[1]/div[3]/button[1]',
        VALIDAR_LOGIN: '//header/div[1]/div[1]/span[1]/h6[1]',
        INVALIDAR_lOGIN: '//body/div[@id="app"]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/p[1]',
        EMPTY_lOGIN_USER: '//body/div[@id="app"]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/form[1]/div[1]/div[1]/span[1]',
        EMPTY_lOGIN_PASSWORD: '//body/div[@id="app"]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/form[1]/div[2]/div[1]/span[1]'
    },
    MENU: {
        HOME: '[data-test=menu-home]',
        EXTRATO: '[data-test="menu-extrato"]',
        SETTINGS: '[data-test="menu-settings"]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO:'[data-test=menu-movimentacao]'
    },
    CONTAS: {
        NOME: '[data-test="nome"]',
        BTN_SALVAR: '.btn',
        FN_XP_BTN_ALTERAR: nome => `//table//td[contains(.,'${nome}')]/..//i[@class='far fa-edit']`
    },
    MOVIMENTACAO: {
        DESCRICAO: '[data-test=descricao]',
        VALOR: '[data-test=valor]',
        INTERESSADO: '[data-test=envolvido]',
        CONTA: '[data-test=conta]',
        STATUS: '[data-test=status]',
        BTN_SALVAR_MOV: '.btn-primary'
    },
    EXTRATO: {
        LINHAS: '.list-group > li',
        FN_XP_BUSCA_ELEMENTO: (desc, value) => `//span[contains(., '${desc}')]/following-sibling::small[contains(.,'${value}')]`,
        FN_XP_REMOVER_ELEMENTO: conta => `//span[contains(., '${conta}')]/../../..//i[@class="far fa-trash-alt"]`,
        FN_XP_EDITAR_ELEMENTO: conta => `//span[contains(., '${conta}')]/../../..//i[@class="fas fa-edit"]`,
        FN_XP_LINHA: desc => `//span[contains(., '${desc}')]/../../../..`
    },
    SALDO: {
        FN_XP_SALDO_CONTA: nome => `//td[contains(.,'${nome}')]/../td[2]`
    },

    MESSAGE: '.toast-message'
}

export default locators;