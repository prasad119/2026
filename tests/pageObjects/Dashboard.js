const { expect } = require('@playwright/test');
const GlobalConstants = require('../../constants/GlobalConstants.json');
const { Utility } = require('../../utils/Utility');
// const { Utility, GlobalConstants } = require('./index');

class Dashboard extends Utility {
    constructor(page) {
        super();
        this.page = page;
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
        this.orangeHRMSLink = page.getByRole('link', { name: 'OrangeHRM, Inc' });
    }

    async navigateToDashboard() {
        await this.page.goto(GlobalConstants.dashboardURL);
    }

    async verifyDashboardLaunched() {
        await this.dashboardHeading.waitFor({ state: 'visible' });
        await expect(this.dashboardHeading).toBeVisible();
    }

    async clickOnOrangeHRMSLink() {
        await this.orangeHRMSLink.click();
    }

    async navigateToHRMSSalesWebsite() {
        const newPage = await this.clickAndSwitchToNewTab(this.orangeHRMSLink, this.page);
        return newPage;
    }
}
module.exports = { Dashboard };