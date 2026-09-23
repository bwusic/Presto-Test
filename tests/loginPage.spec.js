const { test, expect } = require('@playwright/test');
const { PageObjectManager } = require('../page/pageObjectManager');

let commonFunctions;
let loginPage;

test.beforeEach(async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    commonFunctions = pageObjectManager.GetCommonFunctions();
    loginPage = pageObjectManager.GetLoginPage();

    await page.goto('/');
});

test('Good Login', async ({ page }) => {
    await loginPage.goodLogin();
});

test('Bad Username Login', async ({ page }) => {
    await loginPage.badUsernameLogin();
});

test('Bad Password Login', async ({ page }) => {
    await loginPage.badPasswordLogin();
});

test('Bad Username Bad Password Login', async ({ page }) => {
    await loginPage.badUsernameBadPasswordLogin();
});

test('Good Username Blank Password Login', async ({ page }) => {
    await loginPage.goodUsernameBlankPasswordLogin();
});

test('Blank Username Good Password Login', async ({ page }) => {
    await loginPage.blankUsernameGoodPasswordLogin();
});

test('Blank Username Blank Password Login', async ({ page }) => {
    await loginPage.blankUsernameblankPasswordLogin();
});

test('Bad Email Format Login', async ({ page }) => {
    await loginPage.badEmailFormatLogin();
});

test('Password Reset', async ({ page }) => {
    await loginPage.passwordReset();
});

test('Cancel Password Reset', async ({ page }) => {
await loginPage.cancelPasswordReset();
});
