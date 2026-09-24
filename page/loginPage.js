const { expect } = require('@playwright/test');
const testData = require('../utilities/testData');
const { CommonFunctions } = require('./commonFunctions');

//const envConfig = settingsLoader.getEnvironmentConfig();

class LoginPage {
    constructor(page) {
        this.page = page;
        //Homepage
        this.homepageLoginButton = page.getByRole('button', { name: 'Sign In'});
        //Login Page
        this.loginPageMessage = testData.loginPage.loginPageMessage
        this.loginEmailAddressTextbox = page.getByRole('textbox', { name: 'Email Address' });
        this.loginPasswordTextbox = page.getByRole('textbox', { name: 'Password'});
        this.loginPageLoginButton = page.getByRole('Button', { name: 'SIGN IN'});
        this.rememberMeCheckbox = page.getByRole('checkbox', { name: 'Remember me'});
        this.profileIconButton = page.getByRole('button', { name: 'Profile Icon'});
        this.signoutButton = page.getByRole('link', { name: 'Sign Out'});
        this.forgotPasswordButton = page.getByRole('link', { name: 'Forgot Password' })
        //Forgot Password Page
        this.forgotPwEmailAddressTextbox = page.getByRole('textbox', { name: 'Email Address' });
        this.nextButton = page.getByRole('button', { name: 'NEXT' });
        this.cancelButton = page.getByRole('button', { name: 'CANCEL' });
        this.passwordRecoveryEmail = testData.loginPage.passwordRecoveryEmail;
        this.sendVerificationCode = page.getByRole('button', { name: 'SEND VERIFICATION CODE' });
        //Account Details
        this.goodUsername = testData.loginPage.goodUsername;
        this.badUsername = testData.loginPage.badUsername;
        this.badUsernameFormat = testData.loginPage.badUsernameFormat;
        this.goodPassword = testData.loginPage.goodPassword;
        this.badPassword = testData.loginPage.badPassword;
        this.emptyField = testData.loginPage.emptyField;
        this.badLoginMessage = testData.loginPage.badLoginMessage;
        this.badEmailFormatMessage = testData.loginPage.badEmailFormatMessage;
        this.noEmailMessage = testData.loginPage.noEmailMessage;
        this.noPaswordMessage = testData.loginPage.noPaswordMessage;
        this.passwordRecoveryEmail = testData.loginPage.passwordRecoveryEmail;
        //Portal Page
        this.welcomeMessage = testData.portalHomepage.welcomeMessage;
    }

    async goodLogin() {
        await this.homepageLoginButton.click();
        await this.loginEmailAddressTextbox.fill(this.goodUsername);
        await this.loginPasswordTextbox.fill(this.goodPassword);
        await this.rememberMeCheckbox.check();
        await this.loginPageLoginButton.click();
        await expect(this.page.getByRole('heading', { name: 'Welcome, QA' })).toBeVisible({ timeout: 15_000 });
        await this.profileIconButton.click();
        await this.signoutButton.click();
        await expect(this.page.getByText('mrqaanalysttester@gmail.com', { exact: true }));
    }

    async badUsernameLogin() {
        await this.homepageLoginButton.click();
        await this.loginEmailAddressTextbox.fill(this.badUsername);
        await this.loginPasswordTextbox.fill(this.goodPassword);
        await this.loginPageLoginButton.click();
        await expect(this.page.getByText(this.badLoginMessage)).toBeVisible();
    }

    async badPasswordLogin() {
        await this.homepageLoginButton.click();
        await this.loginEmailAddressTextbox.fill(this.goodUsername);
        await this.loginPasswordTextbox.fill(this.badPassword);
        await this.loginPageLoginButton.click();
        await expect(this.page.getByText(this.badLoginMessage)).toBeVisible();
    }

    async badUsernameBadPasswordLogin() {
        await this.homepageLoginButton.click();
        await this.loginEmailAddressTextbox.fill(this.badUsername);
        await this.loginPasswordTextbox.fill(this.badPassword);
        await this.loginPageLoginButton.click();
        await expect(this.page.getByText(this.badLoginMessage)).toBeVisible();
    }

    async goodUsernameBlankPasswordLogin() {
        await this.homepageLoginButton.click();
        await this.loginEmailAddressTextbox.fill(this.goodUsername);
        await this.loginPasswordTextbox.fill(this.emptyField);
        await this.loginPageLoginButton.click();
        await expect(this.page.getByText(this.noPaswordMessage)).toBeVisible();
    }

    async blankUsernameGoodPasswordLogin() {
        await this.homepageLoginButton.click();
        await this.loginEmailAddressTextbox.fill(this.emptyField);
        await this.loginPasswordTextbox.fill(this.goodPassword);
        await this.loginPageLoginButton.click();
        await this.page.waitForTimeout(5_000);
        await expect(this.page.getByText(this.noEmailMessage)).toBeVisible();
    }

    async blankUsernameblankPasswordLogin() {
        await this.homepageLoginButton.click();
        await this.loginEmailAddressTextbox.fill(this.emptyField);
        await this.loginPasswordTextbox.fill(this.emptyField);
        await this.loginPageLoginButton.click();
        await expect(this.page.getByText(this.noEmailMessage)).toBeVisible();
        await expect(this.page.getByText(this.noPaswordMessage)).toBeVisible();
    }

    async badEmailFormatLogin() {
        await this.homepageLoginButton.click();
        await this.loginEmailAddressTextbox.fill(this.badUsernameFormat);
        await this.loginPasswordTextbox.fill(this.goodPassword);
        await this.loginPageLoginButton.click();
        await expect(this.page.getByText(this.badEmailFormatMessage)).toBeVisible();
    }

    async passwordReset() {
        await this.homepageLoginButton.click();
        await this.forgotPasswordButton.click();
        await this.forgotPwEmailAddressTextbox.fill(this.passwordRecoveryEmail);
        await this.nextButton.click();
        await this.sendVerificationCode.click();
        await this.page.waitForTimeout(15_000);
        await expect(this.page.getByText('Please enter 6-digit code', { exact: true })).toBeVisible();
    }

    async cancelPasswordReset() {
        await this.homepageLoginButton.click();
        await this.forgotPasswordButton.click();
        await this.cancelButton.click();
        await expect(this.page.getByText(this.loginPageMessage)).toBeVisible();
    }
}

module.exports = { LoginPage };