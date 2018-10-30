// let xpath = require('utils/selector').xpath,
//     css = require('utils/selector').css;
//
// let headerSection = require('../common/sections/customerHeaderSection'),
//     commonElements = require('../common/elements/commonElements'),
//     navigateCommands = require('../common/commands/navigateCommands');

module.exports = {

    commands: [{

    }],

    elements: {
        popup: '#popup_login',
        emailField: '#_pre_login_username',
        passwordField: '#_password',
        continueButton: {
            selector: '//button[contains(text(), "Continue")]',
            locateStrategy: 'xpath'
        },
        loginButton: {
            selector: '//button[contains(text(), "Log in")]',
            locateStrategy: 'xpath'
        },
    }
};