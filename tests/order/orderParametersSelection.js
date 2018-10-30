module.exports = {

    // suite который проверяет что каждое из доступных полей ордера может быть выбрано или изменено
    
    before: (browser) => {
        let mainPage = browser.page.mainPage(),
            customerOrdersPage = browser.page.customerOrdersPage();

        mainPage.header = browser.page.mainPage().section.header;
        customerOrdersPage.header = browser.page.customerOrdersPage().section.header;
        //
        // mainPage
        //     .navigate();

        // mainPage.header
        //     .click('@loginButton');
        // loginPopup
        //     .waitForElementVisible('@popup')
        //     .setValue('@emailField', 'iamcustomer@bigmir.net')
        //     .click('@continueButton')
        //     .waitForElementVisible('@passwordField')
        //     .setValue('@passwordField', 'custom546')
        //     .click('@loginButton');
        // customerOrdersPage.header
        //     .waitForElementVisible('@userBalance');

        // customerOrdersPage
        //     .click('@placeOrderButton');
        // unpaidOrdersPopup
        //     .waitForElementVisible('@popup')
        //     .click('@placeNewOrderButton', res => {console.log(res)});
        // в случае если метод по какой-то причине не произвел ожидаемое действие,
        // необходимо последним параметром передать callback функцию для вывода результата выполнения
        // createOrderPage
        //     .waitForElementVisible('@form');


        // может быть сведено к такому виду
        mainPage
            .navigate()
            .login('customauto11@i.com','q123456789');
        customerOrdersPage
            .openCreateOrderPage();
    },

    after: (browser) => {
        browser.end(); // после выполнения всего сценария закроем браузер
    },

    'Check Type of paper' :(browser) => {

    },



    'Пользователь изменил поле заказа: Type of paper': (browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .click('@paperTypeDropdown')
            .click('@assignmentOption')
            .expect.element('@assignmentOption').to.be.selected.before(1000)
            .expect.element('@topicField').contains('');
        // проверка что значение поле type of paper: assignment было выбрано
    },

    'Пользователь заполнил поле заказа: Topic ': () => {
        // проверка что значение поле topic равно новому значению
    },

    // и так по всем доступным полям
};