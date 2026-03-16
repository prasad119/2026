import { test } from '@playwright/test';
const { Dashboard, Admin, OrangeHRMSalesPage, Recruitment } = require('../pageObjects/index');

test.describe('storage state practice', async () => {
    test('storage state test', async ({ page }) => {
        const dashboard = new Dashboard(page);
        const admin = new Admin(page);
        await dashboard.navigateToDashboard();
        await dashboard.verifyDashboardLaunched();
        await admin.clickOnLeftNavOption("Admin");
        await admin.addUser();
    });

    test(`Validate contact sales in Orange HRMS website`, async ({ page }) => {
        const dashboard = new Dashboard(page);
        await dashboard.navigateToDashboard();
        await dashboard.verifyDashboardLaunched();
        const newPageDetails = await dashboard.navigateToHRMSSalesWebsite();
        const orangeHRMSalesPage = new OrangeHRMSalesPage(newPageDetails);
        await orangeHRMSalesPage.validateContactSalesPresent();
    });

    test(`Download the resume of the first candidate in the recruitment page`, async ({ page }) => {
        const dashboard = new Dashboard(page);
        const admin = new Admin(page);
        await dashboard.navigateToDashboard();
        await dashboard.verifyDashboardLaunched();
        await admin.clickOnLeftNavOption("Recruitment");
        const recruitment = new Recruitment(page);
        await recruitment.downloadFirstCandidateResume();
    });
});