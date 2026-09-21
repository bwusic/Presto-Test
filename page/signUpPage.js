const { expect } = require('@playwright/test');
const testData = require('../utilities/testData');
const { CommonFunctions } = require('./commonFunctions');


class SignUpPage {
    constructor(page) {
        this.page = page;
        //Homepage
        this.homepageSignUpButton = page.getByRole('button', { name: 'Sign Up' });
        //Sign Up Page
        this.emailAddressTextbox = page.getByRole('textbox', { name: 'Email Address', exact: true });
        this.confirmEmailAddressTextbox = page.getByRole('textbox', { name: 'Confirm Email Address', exact: true });
        this.agreeTermsAndConditionsCheckbox = page.getByRole('checkbox');
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.sendVerificationCodeButton = page.getByRole('button', { name: 'SEND VERIFICATION CODE' });
        this.verificationNumberTextbox = page.getByRole('textbox', { name: 'Verification Code' })
        this.verificationNextButton = page.getByRole('button', { name: 'NEXT' });
        //Account Details
        this.goodUsername = testData.signUpPage.goodUsername;
        this.existingUsername = testData.signUpPage.existingUsername;
    }

    async goodSignUp() {
        await this.homepageSignUpButton.click();
        await this.emailAddressTextbox.fill(this.goodUsername);
        await this.confirmEmailAddressTextbox.fill(this.goodUsername);
        await this.agreeTermsAndConditionsCheckbox.check();
        await this.nextButton.click();
        await this.sendVerificationCodeButton.click();
        /*
        await this.verificationNumberTextbox.fill();                --Need to find out on how to retrieve verification code from email
        await this verificationNextButton.click();

        --Include a test for "Send New Code"
        */
    }

    async signUpMismatchedEmailAddress() {
        await this.homepageSignUpButton.click();
        await this.emailAddressTextbox.fill(this.goodUsername);
        await this.confirmEmailAddressTextbox.fill(this.existingUsername);
        await this.nextButton.click();
        await expect(this.page.getByText('Email addresses do not match.', { exact: true })).toBeVisible();
    }

    async uncheckedAgreementBox() {
        await this.homepageSignUpButton.click();
        await this.emailAddressTextbox.fill(this.goodUsername);
        await this.confirmEmailAddressTextbox.fill(this.goodUsername);
        await this.nextButton.click();
        await expect(this.page.getByText('Please read and accept the terms and conditions.', { exact: true })).toBeVisible();
    }

    async blankFieldsAndUncheckedAgreementBox() {
        await this.homepageSignUpButton.click();
        await this.nextButton.click({ timeout: 15_000 });
        await expect(this.page.getByText('Enter email address.', { exact: true })).toBeVisible({ timeout: 15_000 });
        await expect(this.page.getByText('Please confirm your email address', { exact: true })).toBeVisible({ timeout: 15_000 });
        await expect(this.page.getByText('Please read and accept the terms and conditions.', { exact: true })).toBeVisible({ timeout: 15_000 });
    }
}

module.exports = { SignUpPage };