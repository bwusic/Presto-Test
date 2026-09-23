const { test, expect } = require('@playwright/test');
const { PageObjectManager } = require('../page/pageObjectManager');
const commonFunction = require('../page/commonFunctions');


test('Good Signup', async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const commonFunctions = pageObjectManager.GetCommonFunctions();
    const signUpPage = pageObjectManager.GetSignUpPage();


    await page.goto('/'); 
    await signUpPage.goodSignUp();
});

test('Sign Up Mismatched Email Address', async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const commonFunctions = pageObjectManager.GetCommonFunctions();
    const signUpPage = pageObjectManager.GetSignUpPage();

    await page.goto('/'); 
    await signUpPage.signUpMismatchedEmailAddress();
});


test('Unchecked Agreement Box', async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const commonFunctions = pageObjectManager.GetCommonFunctions();
    const signUpPage = pageObjectManager.GetSignUpPage();

    await page.goto('/'); 
    await signUpPage.uncheckedAgreementBox();
});

test('Blank Fields And Unchecked Agreement Box', async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const commonFunctions = pageObjectManager.GetCommonFunctions();
    const signUpPage = pageObjectManager.GetSignUpPage();

    await page.goto('/'); 
    await signUpPage.blankFieldsAndUncheckedAgreementBox();
});

test('Username With Special Characters', async({page}) => {
    const pageObjectManager = new PageObjectManager(page);
    const commonFunctions = pageObjectManager.GetCommonFunctions();
    const signUpPage = pageObjectManager.GetSignUpPage();

    await page.goto('/'); 
    await signUpPage.usernameWSpecialCharacters();
});