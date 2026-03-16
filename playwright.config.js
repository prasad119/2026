import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  timeout: 60 * 1000,
  actionTimeout: 20 * 1000,
  navigationTimeout: 50 * 1000,
  globalSetup: './utils/global-setup.js',
  use: {
    storageState: 'state.json',
    headless: false,
    ignoreHTTPSErrors: true,
    video: 'on',
    screenshot: 'only-on-failure',
    trace: 'on',
    launchOptions: {
      args: ['--start-maximized'],
    }
  },
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  browserName: 'chromium',
  channel: 'chrome',
});

