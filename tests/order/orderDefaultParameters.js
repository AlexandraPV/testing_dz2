
var createDeadline = require('../../.utils/createDeadline');
var command = require('../../.utils/otherCommands');

module.exports = {
    // suite  который проверяет предзаполненные значения ордер формы

    before: (browser) => {
        let mainPage = browser.page.mainPage(),
            customerOrdersPage = browser.page.customerOrdersPage(),
            createOrderPage = browser.page.createOrderPage();

        mainPage.header = browser.page.mainPage().section.header;
        customerOrdersPage.header = browser.page.customerOrdersPage().section.header;

        mainPage
            .navigate()
            .login('customauto11@i.com','q123456789');
        customerOrdersPage
            .openCreateOrderPage();
        browser.pause(1000);
        createOrderPage
            .click('@button23');
        browser.pause(1000);
        createOrderPage
            .click('@button33');



    },

    after: (browser) => {
        browser.end(); // после выполнения всего сценария закроем браузер
    },

    'Дефолтное значение для Type of Paper: Essay (Any Type)' :(browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .expect.element('@assignmentOptionPaperType').to.be.selected.before(1000);
    },

     'Дефолтное значение для Topic: пустое': (browser) => {
         let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .assert.value('@topicField', "");

     },

    'Дефолтное значение для Subject: Other' :(browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .expect.element('@assignmentOptionSubjectOther').to.be.selected.before(1000);
    },

    'Дефолтное значение для Number of pages: 2': (browser) => {
        let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .assert.value('@numberPagesField', '2');

    },

    'Дефолтное значение для DeadlineDate: Сегодняшняя дата + 10 дней': (browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .assert.attributeContains('@deadlineDateField','value', createDeadline.createDeadlineDate(10));

    },

    'Дефолтное значение для DeadlineTime: Количество полных часов сейчас': (browser) => {
        let createOrderPage = browser.page.createOrderPage();


        createOrderPage
            .assert.attributeContains('@deadlineTimeField','value', createDeadline.createDeadlineTime());

    },

    'Дефолтное значение для Type of service: Writing from scratch': (browser) => {
        let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .expect.element('@orderProductService1').to.be.selected.before(1000);

    },

    'Дефолтное значение для Writer quality: Standard': (browser) => {
        let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .expect.element('@orderProductWrlevel1').to.be.selected.before(1000);

    },

    'Дефолтное значение для Number of cited resources: 0': (browser) => {
        let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .assert.attributeContains('@orderProductSourcesField','value', '0');

    },


    'Дефолтное значение для Format of citation: Other' :(browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .expect.element('@assignmentOptionProductSourcesOther').to.be.selected.before(1000);
    },


    'Дефолтное значение для Paper instructions: пустое': (browser) => {
        let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .assert.value('@orderDescriptionTextarea', '');
    },


    'Preferred Writers по-дефолту не выбраны': (browser) => {

        let createOrderPage = browser.page.createOrderPage(),
            preferredWriter = '//div[contains(@class, "b-form-group__writer")]';

        for (var i=1; i<=10; i++) {
            let preferredWriterLable = preferredWriter + `[${i}]/label`;
            createOrderPage
                .api.useXpath()
                .expect.element(preferredWriterLable).to.have.not.css('.b-checkbox_writer-card_active')
        }
        // command.checkSomeElementsWithPath(browser, preferredWriter); // example command for search and check elements without length
    },


    'Дефолтно отображается кнопка Proceed to Bidding': (browser) => {
        let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .expect.element('@CreateOrderSpanInButton').to.be.present;

    },

};