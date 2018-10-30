module.exports = {

    commands: [{
        navigate: function ()  {
            this.api.url('http://edubirdie.com.stageprod/');
            return this; // не забывайте в каждом методе возвращать обьект браузера: this, иначе вы не сможете продолжать цепочку
        },

        openLoginPopup: function () {
            let mainPage = this.api.page.mainPage(),
                loginPopup = this.api.page.loginPopup();
            mainPage.header = this.api.page.mainPage().section.header;

            mainPage.header
                .click('@loginButton');
            loginPopup
                .waitForElementVisible('@popup');
            return this;
        },

        login: function (email, password) {
            let mainPage = this.api.page.mainPage(),
                loginPopup = this.api.page.loginPopup(),
                customerOrdersPage = this.api.page.customerOrdersPage();
            mainPage.header = this.api.page.mainPage().section.header;
            customerOrdersPage.header = this.api.page.customerOrdersPage().section.header;

            mainPage
                .openLoginPopup();
            loginPopup
                .setValue('@emailField', email)
                .click('@continueButton')
                .waitForElementVisible('@passwordField')
                .setValue('@passwordField', password)
                .click('@loginButton');
            customerOrdersPage.header
                .waitForElementVisible('@userBalance');
            return this;
        }
    }],

    sections: {
        header: {
            selector: 'header',
            elements: {
                loginButton: '.header__login-btn',
            },
        }
    }
};