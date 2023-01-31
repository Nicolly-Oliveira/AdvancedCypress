const locators = {
    PAGINA:{
        VALIDATE_SITE: '//body/div[@id="app"]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/p[1]'
    },

    LOGIN: {
        USER: '//body/div[@id="app"]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/form[1]/div[1]/div[1]/div[2]/input[1]',
        PASSWORD: '//body/div[@id="app"]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/form[1]/div[2]/div[1]/div[2]/input[1]',
        BTN_LOGIN: '//body/div[@id="app"]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/form[1]/div[3]/button[1]',
        VALIDATE_LOGIN: '//header/div[1]/div[1]/span[1]/h6[1]',
        INVALIDATE_lOGIN: '//body/div[@id="app"]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/p[1]',
        EMPTY_lOGIN_USER: '//body/div[@id="app"]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/form[1]/div[1]/div[1]/span[1]',
        EMPTY_lOGIN_PASSWORD: '//body/div[@id="app"]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/form[1]/div[2]/div[1]/span[1]'
    },
}

export default locators;