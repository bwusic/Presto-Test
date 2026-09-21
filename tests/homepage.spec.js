const { test, expect } = require('@playwright/test');
const { PageObjectManager } = require('../page/pageObjectManager');
const commonFunction = require('../page/commonFunctions');
const homePage = require ('../page/homePage');



test('Homepage Access', async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const commonFunctions = pageObjectManager.GetCommonFunctions();
    const homePage = pageObjectManager.GetHomePage();


    await page.goto('/'); 
    await homePage.validateHomePage()
    }
)



    /*
    aria spec document "https://www.w3.org/TR/html-aria/""
    */