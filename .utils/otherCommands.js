
let preferredWriter = '//div[contains(@class, "b-form-group__writer")]';
let browser = 0;


checkSomeElementsWithPath = function (browser, preferredWriter) {
    let createOrderPage = browser.page.createOrderPage();
    browser
        .elements('xpath', preferredWriter, function (result) {
            for (var i in result.value) {
                i = ++i;
                let preferredWriterLable = preferredWriter + `[${i}]/label`;
                createOrderPage
                    .api.useXpath()
                    .expect.element(preferredWriterLable).to.have.not.css('.b-checkbox_writer-card_active')
            }
        });
}
module.exports.checkSomeElementsWithPath = checkSomeElementsWithPath;