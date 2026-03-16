const {chromium} = require('@playwright/test');
const GlobalConstants = require('../constants/GlobalConstants.json');
const { expect } = require('@playwright/test');
const path = require('path');

class Utility {
    async launchBrowser() {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        return {browser, context};
    }

    async saveStorageState(context) {
        await context.storageState({path: GlobalConstants.storageStatePath});
    }

    async switchToNewTab(context){
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
        ]);
        await newPage.waitForLoadState();
        return newPage;
    }

        async clickAndSwitchToNewTab(element,context){
        const [newPage] = await Promise.all([
            context.waitForEvent('popup'),
            element.click(),
        ]);
        await newPage.waitForLoadState();
        return newPage;
    }

    async downloadFile(element) {
        const downloadPath = path.resolve(__dirname, '../downloads');
        const [download] = await Promise.all([
            element.page().waitForEvent('download'),
            element.click()
        ]);
        const fileName = download.suggestedFilename();
        const filePath = path.join(downloadPath, fileName);
        await download.saveAs(filePath);
    }

    async waitForElementVisibleAndClick(element) {
        await element.waitFor({ state: 'visible' });
        await element.click();
    }

    async waitForElementToBeVisible(element) {
        await element.waitFor({ state: 'visible' });
    }

}

module.exports = { Utility };