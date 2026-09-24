const { expect } = require('@playwright/test');
const testData = require('../utilities/testData');
const { CommonFunctions } = require('./commonFunctions');


class Homepage {    
    constructor(page) {
        this.page = page;
        this.homePageUrl = testData.pageUrls.homePageUrl;
        this.signUpButton = page.getByRole('button', { name: 'Sign Up' });
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.languangeSettingsMenu = page.getByRole('button', { name: 'Language Settings' });
        this.searchButton = page.getByRole('button', { name: 'Search Icon' });
        this.previousBannerButton = page.getByRole('button', { name: 'btn-banner-slide-prev'});
    }

    async validateHomePage() {
        await expect(this.page).toHaveURL(this.homePageUrl);
        await expect(this.signUpButton).toBeVisible();
        await expect(this.signInButton).toBeVisible();
        await expect(this.searchButton).toBeVisible(); 
        }
}

module.exports = { Homepage };

