const { test, expect } = require('@playwright/test');
const { PageObjectManager } = require('../page/pageObjectManager');

let commonFunctions;
let signUpPage;

test.beforeEach(async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    commonFunctions = pageObjectManager.GetCommonFunctions();
    signUpPage = pageObjectManager.GetSignUpPage();

    await page.goto('/');
});



test('Good Signup', async ({ page }) => {
    await signUpPage.goodSignUp();
});

test('Sign Up Mismatched Email Address', async ({ page }) => {
    await signUpPage.signUpMismatchedEmailAddress();
});


test('Unchecked Agreement Box', async ({ page }) => {
    await signUpPage.uncheckedAgreementBox();
});

test('Blank Fields And Unchecked Agreement Box', async ({ page }) => {
    await signUpPage.blankFieldsAndUncheckedAgreementBox();
});

test('Username With Special Characters', async({page}) => {
    await signUpPage.usernameWSpecialCharacters();
});