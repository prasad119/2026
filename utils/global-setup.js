const { chromium } = require('@playwright/test');
const { Login } = require('../tests/pageObjects/Login');
const GlobalConstants = require('../constants/GlobalConstants.json');
const { Utility } = require('./Utility');
const path = require('node:path');
require('dotenv').config({ path: '.env' });
const globalSetupStatus = process.env.GLOBAL_SETUP === 'true';

async function globalSetup() {
    if (globalSetupStatus) {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();

        const utility = new Utility();
        await page.goto(GlobalConstants.baseURL);
        const login = new Login(page);
        await login.loginToApplication(GlobalConstants.username, GlobalConstants.password);
        await utility.saveStorageState(context);
        await browser.close();
    }
}

module.exports = globalSetup;