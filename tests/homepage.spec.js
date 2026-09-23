const { test } = require('@playwright/test');
const { PageObjectManager } = require('../page/pageObjectManager');

test('Homepage Access', async ({ page }) => {
    const pageObjectManager = new PageObjectManager(page);
    const homepage = pageObjectManager.GetHomepage();

    await page.goto('/'); 
    await homepage.validateHomePage()
    }
)



    /*
    aria spec document "https://www.w3.org/TR/html-aria/""
    */