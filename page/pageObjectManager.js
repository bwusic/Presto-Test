const { LoginPage } = require('./loginPage');
const { HomePage } = require('./homepage');
const { SignUpPage } = require('./signUpPage');
const { CommonFunctions } = require('./commonFunctions');
/*
const { RegistrationTypePage } = require('./registrationTypePage');
//const { RepresentationPage } = require('./representationPage');
const { RegistrationPage } = require('./registrationPage');
const { CommonFunctions } = require('./commonFunctions');
const { PasswordRecoveryPage } = require('./passwordRecoveryPage');
const { StatementPage } = require('./statementPage');
const { PublicRepertoireSearchPage } = require('./publicRepertoireSearch');
*/

class PageObjectManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.homepage = new Homepage(this.page);
        this.commonFunctions = new CommonFunctions(this.page);
        this.signUpPage = new SignUpPage(this.page);
        this.accountDeletionPage = new AccountDeletionPage(this.page);
    }

    GetCommonFunctions() {
        return this.commonFunctions;
    }

    GetLoginPage() {
        return this.loginPage;
    }

    GetHomepage() {
        return this.homepage;
    }

    GetSignUpPage() {
        return this.signUpPage;
    }

    GetAccountDeletionPage() {
        return this.accountDeletionPage
    }
}

module.exports = { PageObjectManager };