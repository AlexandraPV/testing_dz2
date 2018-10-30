function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

module.exports = {
    // suite  который проверяет предзаполненные значения ордер формы

    before: (browser) => {
        let mainPage = browser.page.mainPage(),
            customerOrdersPage = browser.page.customerOrdersPage();

        mainPage.header = browser.page.mainPage().section.header;
        customerOrdersPage.header = browser.page.customerOrdersPage().section.header;

        mainPage
            .navigate()
            .login('customauto11@i.com','q123456789');
        customerOrdersPage
            .openCreateOrderPage()

    },

    after: (browser) => {
        browser.end(); // после выполнения всего сценария закроем браузер
    },

    'Check Type of paper' :(browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .expect.element('@assignmentOptionPaperType').to.be.selected.before(1000);
    },

     'Check Topic': (browser) => {
         let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .assert.containsText('@topicField', "");

     },

    'Check Subject' :(browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .expect.element('@assignmentOptionSubjectOther').to.be.selected.before(1000);
    },

    'Check Number of pages': (browser) => {
        let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .assert.attributeContains('@numberPagesField','value', '2');

    },

    'Check DeadlineDate': (browser) => {
        let createOrderPage = browser.page.createOrderPage();

        var dateOrder = new Date(),
            currentDate = new Date();

        dateOrder.setDate(currentDate.getDate()+10);
        var day = dateOrder.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        var month = dateOrder.getMonth()+1;
        if (month < 10) {
            month = "0" + month;
        }
        var year = dateOrder.getFullYear();

        dateOrder = month + '-' + day + '-' + year;

        createOrderPage
            .assert.attributeContains('@deadlineDateField','value', dateOrder);

    },

    'Check DeadlineTime': (browser) => {
        let createOrderPage = browser.page.createOrderPage();

        var dateOrder = new Date(),
            currentDate = new Date();

        var time;
        if (dateOrder.getHours() >= 13) {
            time = (currentDate.getHours()-12).toString();
            dateOrder = time + " pm";
        }else{
            time = dateOrder.getHours().toString();
            dateOrder = time + " am";
        }

        createOrderPage
            .assert.attributeContains('@deadlineTimeField','value', dateOrder);

    },

    'Check Button23' :(browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .click('@button23');
    },

    'Check Type of service': (browser) => {
        let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .assert.attributeContains('@orderProductService1','checked', 'true');

    },

    'Check Writer quality': (browser) => {
        let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .assert.attributeContains('@orderProductWrlevel1','checked', 'true');

    },

    'Check Number of cited resources': (browser) => {
        let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .assert.attributeContains('@orderProductSourcesField','value', '0');

    },


    'Check Format of citation' :(browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .expect.element('@assignmentOptionProductSourcesOther').to.be.selected.before(1000);
    },

    'Check Button33' :(browser) => {
        let createOrderPage = browser.page.createOrderPage();

        sleep(1000);
            createOrderPage
                .click('@button33');

    },

    'Check Paper instructions Placeholder': (browser) => {
        let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .assert.attributeContains('@orderDescriptionTextarea','placeholder', 'List your instructions or upload the files for the order.');
    },

    'Check Paper instructions Textarea': (browser) => {
        let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .assert.containsText('@orderDescriptionTextarea', "");
        sleep(10000);
    },

    'Check Preferred Writers': (browser) => {

        let createOrderPage = browser.page.createOrderPage(),
            preferredWriter = '//div[contains(@class, "b-form-group__writer")]';

        browser
            .elements('xpath',preferredWriter, function(result) {
                for(var i in result.value) {
                    i = ++i;
                    let preferredWriterLable = preferredWriter +`[${i}]/label`;
                    createOrderPage
                        .api.useXpath()
                        .expect.element(preferredWriterLable).to.have.not.css('.b-checkbox_writer-card_active')
                }
            });

    },

    'Check Vac1 Present On Simple Bidding': (browser) => {
        let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .expect.element('@orderVasCo1Input').to.be.present;

    },
    'Check Vac1 Button On Simple Bidding': (browser) => {
        let createOrderPage = browser.page.createOrderPage();
        createOrderPage
            .expect.element('@CreateOrderSpanInButton').to.be.present;

    },

};