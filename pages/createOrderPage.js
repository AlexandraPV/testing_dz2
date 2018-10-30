module.exports = {

    elements: {
        form: '.js_order_form',
        paperTypeDropdown: '#order_product_paper_type',
        assignmentOptionPaperType: {
            selector:'//option[text()="Essay (Any Type)" and @value="1"]',
            locateStrategy: 'xpath'
        },
        topicField: '#order_name',
        selectSubjectDropdown: '#order_product_subject',
        assignmentOptionSubjectOther: {
            selector:'//option[text()="Other" and @value="88"]',
            locateStrategy: 'xpath'
        },
        numberPagesField: '#order_product_pages',
        deadlineDateField: '#order_deadline_date',
        deadlineTimeField: '#order_deadline_time',
        button23: 'button[data-atest="atest_order_create_elem_next_btn"][data-step="1"]',
        orderProductService1: 'input#order_product_service_1',
        orderProductService2: 'input#order_product_service_2',
        orderProductService3: 'input#order_product_service_3',
        orderProductWrlevel1: 'input#order_product_wrlevel_1',
        orderProductWrlevel2: 'input#order_product_wrlevel_2',
        orderProductWrlevel3: 'input#order_product_wrlevel_3',
        orderProductSourcesField: '#order_product_sources',
        assignmentOptionProductSourcesOther: {
            selector:'//option[text()="Other" and @value="5"]',
            locateStrategy: 'xpath'
        },
        button33: 'button[data-step="2"][data-atest="atest_order_create_elem_next_btn"]',
        orderDescriptionTextarea: '#order_description',
        writerCardBoxes: {
            selector:'//div[contains(@class, "b-form-group__writer")]',
            locateStrategy: 'xpath'
        },
        orderVasCo1 : 'input#order_vas_co_1',
        orderVasCo1Input: {
            selector:'//input[@data-vas-id="1" and @data-vas-tag="EASY_BIDDING"]',
            locateStrategy: 'xpath'
        },
        CreateOrderButton: 'button[data-atest="atest_order_create_form_submit"][data-step="confirm"]',
        CreateOrderSpanInButton: {
            selector:'//span[text()="Proceed to Bidding"]',
            locateStrategy: 'xpath'
        },
    }


};