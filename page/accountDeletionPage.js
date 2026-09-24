const { expect } = require('@playwright/test');
const testData = require('../utilities/testData');
const { CommonFunctions } = require('./commonFunctions');


class AccountDeletionPage {
    constructor(page) {
        this.page = page;
        //Homepage
        this.homepageLoginButton = page.getByRole('button', { name: 'Sign In'});
        //Login Page
        this.loginPageMessage = testData.loginPage.loginPageMessage
        this.loginEmailAddressTextbox = page.getByRole('textbox', { name: 'Email Address' });
        this.loginPasswordTextbox = page.getByRole('textbox', { name: 'Password'});
        this.loginPageLoginButton = page.getByRole('Button', { name: 'SIGN IN'});
        this.badLoginMessage = testData.loginPage.badLoginMessage;
        //Portal Page
        this.portalhomepagecheck = page.getByRole('heading', { name: 'Welcome, QA' });
        this.loginAndSecurityButton = page.getByText('Login and Security', { exact: true });
        this.deleteAccountButton1st = page.getByRole('link', { name: 'Delete Account' });
        this.deleteAccountButton2nd = page.getByRole('link', { name: 'Delete Account' });
        this.deleteAccountButtonlast = page.getByRole('link', { name: 'Yes, Delete Account' });
        this.deleteAccountcancelButton = page.getByRole('link', { name: 'Cancel' });
        this.deletionCompleteDoneButton = page.getByRole('button', { name: 'Done' })
    }

    async accountDeletionCancel() {
        await this.homepageLoginButton.click();
        //Sign in
        await this.loginEmailAddressTextbox.fill(this.goodUsername);
        await this.loginPasswordTextbox.fill(this.goodPassword);
        await this.loginPageLoginButton.click();
        await expect(this.portalhomepagecheck).toBeVisible({ timeout: 15_000 });
        //Nagigate to "Login And Security" page to delete account but cancel at the end
        await this.loginAndSecurityButton.click();
        await this.deleteAccountButton1st.click();
        await this.deleteAccountButtonlast.click();
        await this.deleteAccountcancelButton.click();
        //Sign out
        await this.profileIconButton.click();
        await this.signoutButton.click();        await this.homepageLoginButton.click();
        //Sign In Again
        await this.loginEmailAddressTextbox.fill(this.goodUsername);
        await this.loginPasswordTextbox.fill(this.goodPassword);
        await this.loginPageLoginButton.click();
        await expect(this.portalhomepagecheck).toBeVisible({ timeout: 15_000 });
    }

    async accountDeletionConfirm() {
        await this.homepageLoginButton.click();
        //Sign in
        await this.loginEmailAddressTextbox.fill(this.goodUsername);
        await this.loginPasswordTextbox.fill(this.goodPassword);
        await this.loginPageLoginButton.click();
        await expect(this.portalhomepagecheck).toBeVisible({ timeout: 15_000 });
        //Nagigate to "Login And Security" page to delete account and confirm deletion
        await this.loginAndSecurityButton.click();
        await this.deleteAccountButton1st.click();
        await this.deleteAccountButtonlast.click();
        await this.deletionCompleteDoneButton.click();
        //Attempt to sign in again
        await this.homepageLoginButton.click();
        await this.loginEmailAddressTextbox.fill(this.goodUsername);
        await this.loginPasswordTextbox.fill(this.goodPassword);
        await this.loginPageLoginButton.click();
        await expect(this.badLoginMessage).toBeVisible();
    }

/*
Tests to consider adding
1. Click on first "Delete Account" button but then back out by clicking portal homepage (or try logout)
2. Click on second "Delete Account" button but then back out by clicking portal homepage (or try logout)
3. Click on first "Delete Account" button but then back out by closing the page. Then re-open a new one and try logging in
3. Click on second "Delete Account" button but then back out by closing the page. Then re-open a new one and try logging in
4. Click on the final "Yes, Delete Account" button then click on portal homepage without clicking the "Done" button

- Before writing these test cases, find out what the expected results were so the test case would carry out the correct actions
*/
}

module.exports = { AccountDeletionPage };