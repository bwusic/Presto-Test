const { expect } = require('@playwright/test');

//const envConfig = settingsLoader.getEnvironmentConfig();

class CommonFunctions {
    constructor(page) {
        this.page = page;
        this.osanaClose = this.page.getByRole('button', { name: 'Close this dialog' });
    }  

    async ClearCookieMessage() {
        await this.osanaClose.click();
    }

    async SelectCommonRadioBox(radioboxID, position) {
        await this.page.locator(radioboxID).nth(position).check();
    }
}

module.exports = { CommonFunctions };