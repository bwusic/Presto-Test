const { test, expect } = require('@playwright/test');
const { PageObjectManager } = require('../page/pageObjectManager');

let commonFunctions;
let loginPage;

test.beforeEach(async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    commonFunctions = pageObjectManager.GetCommonFunctions();
    loginPage = pageObjectManager.GetLoginPage();
    accountDeletionPage = pageObjectManager.GetAccountDeletionPage();

    await page.goto('/');
});


/*
Work in Progress - Please add test cases here once tests are set up in accountDeletionPage.js.
*/