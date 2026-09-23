// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://prestocard.ca/en',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    // Chromium chain
    {
      name: 'chromium-homepage',
      testMatch: 'homepage.spec.js',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'chromium-signuppage',
      testMatch: 'signUpPage.spec.js',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['chromium-homepage'],
    },
    {
      name: 'chromium-loginpage',
      testMatch: 'loginPage.spec.js',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['chromium-signuppage'],
    },
    {
      name: 'chromium-accountdeletion',
      testMatch: 'accountDeletion.spec.js',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['chromium-loginpage'],
    },

    // Firefox chain
    {
      name: 'firefox-homepage',
      testMatch: 'homepage.spec.js',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'firefox-signuppage',
      testMatch: 'signUpPage.spec.js',
      use: { ...devices['Desktop Firefox'] },
      dependencies: ['firefox-homepage'],
    },
    {
      name: 'firefox-loginpage',
      testMatch: 'loginPage.spec.js',
      use: { ...devices['Desktop Firefox'] },
      dependencies: ['firefox-signuppage'],
    },
    {
      name: 'firefox-accountdeletion',
      testMatch: 'accountDeletion.spec.js',
      use: { ...devices['Desktop Firefox'] },
      dependencies: ['firefox-loginpage'],
    },

    // WebKit chain
    {
      name: 'webkit-homepage',
      testMatch: 'homepage.spec.js',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'webkit-signuppage',
      testMatch: 'signUpPage.spec.js',
      use: { ...devices['Desktop Safari'] },
      dependencies: ['webkit-homepage'],
    },
    {
      name: 'webkit-loginpage',
      testMatch: 'loginPage.spec.js',
      use: { ...devices['Desktop Safari'] },
      dependencies: ['webkit-signuppage'],
    },
    {
      name: 'webkit-accountdeletion',
      testMatch: 'accountDeletion.spec.js',
      use: { ...devices['Desktop Safari'] },
      dependencies: ['webkit-loginpage'],
    },


    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

