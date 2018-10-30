module.exports = {

    commands: [{
        openCreateOrderPage: function () {
            let customerOrdersPage = this.api.page.customerOrdersPage(),
                // unpaidOrdersPopup = this.api.page.unpaidOrdersPopup(),
                createOrderPage = this.api.page.createOrderPage();

            customerOrdersPage
                .click('@placeOrderButton');
            // unpaidOrdersPopup
            //     .waitForElementVisible('@popup')
            //     .click('@placeNewOrderButton');
            createOrderPage
                .waitForElementVisible('@form')
                .waitForElementVisible('@button23');
        }

    }],

    elements: {
        placeOrderButton: 'a[data-atest=atest_order_create_elem_new_order_btn]'
    },

    sections: {
        header: {
            selector: 'header',
            elements: {
                userBalance: '.user-balance',
            },
        }
    }
};