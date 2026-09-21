const { test, expect } = require('@playwright/test');
const { PageObjectManager } = require('../page/pageObjectManager');
const commonFunction = require('../page/commonFunctions');


test('Good Login', async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const commonFunctions = pageObjectManager.GetCommonFunctions();
    const loginPage = pageObjectManager.GetLoginPage();
    
    await page.goto('/'); 
    await loginPage.goodLogin();
});

test('Bad Username Login', async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const commonFunctions = pageObjectManager.GetCommonFunctions();
    const loginPage = pageObjectManager.GetLoginPage();
    
    await page.goto('/'); 
    await loginPage.badUsernameLogin();
});

test('Bad Password Login', async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const commonFunctions = pageObjectManager.GetCommonFunctions();
    const loginPage = pageObjectManager.GetLoginPage();
    
    await page.goto('/'); 
    await loginPage.badPasswordLogin();
});

test('Bad Username Bad Password Login', async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const commonFunctions = pageObjectManager.GetCommonFunctions();
    const loginPage = pageObjectManager.GetLoginPage();
    
    await page.goto('/'); 
    await loginPage.badUsernameBadPasswordLogin();
});

test('Good Username Blank Password Login', async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const commonFunctions = pageObjectManager.GetCommonFunctions();
    const loginPage = pageObjectManager.GetLoginPage();
    
    await page.goto('/'); 
    await loginPage.goodUsernameBlankPasswordLogin();
});

test('Blank Username Good Password Login', async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const commonFunctions = pageObjectManager.GetCommonFunctions();
    const loginPage = pageObjectManager.GetLoginPage();
    
    await page.goto('/'); 
    await loginPage.blankUsernameGoodPasswordLogin();
});

test('Blank Username Blank Password Login', async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const commonFunctions = pageObjectManager.GetCommonFunctions();
    const loginPage = pageObjectManager.GetLoginPage();
    
    await page.goto('/'); 
    await loginPage.blankUsernameblankPasswordLogin();
});

test('Bad Email Format Login', async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const commonFunctions = pageObjectManager.GetCommonFunctions();
    const loginPage = pageObjectManager.GetLoginPage();
    
    await page.goto('/'); 
    await loginPage.badEmailFormatLogin();
});

test('Password Reset', async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const commonFunctions = pageObjectManager.GetCommonFunctions();
    const loginPage = pageObjectManager.GetLoginPage();
    
    await page.goto('/'); 
    await loginPage.passwordReset();
});

test('Cancel Password Reset', async ({ page }) => {
const pageObjectManager = new PageObjectManager(page);
const commonFunctions = pageObjectManager.GetCommonFunctions();
const loginPage = pageObjectManager.GetLoginPage();

await page.goto('/'); 
await loginPage.cancelPasswordReset();
});
