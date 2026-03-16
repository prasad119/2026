const playwright = require('@playwright/test');
const globals = require('globals');

module.exports = [
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**','utils/**'],
    ignores: [
      'node_modules/',
      // 'utils/**',
      'pageObjects/**',
      'reports/**',
      'playwright-report/**',
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: 'readonly',
        GlobalConstants: 'readonly',
        expect: 'readonly',
      }
    },
    rules: {
      'no-template-curly-in-string': 2,
      'playwright/missing-playwright-await': 2,
      'playwright/expect-expect': 0,
      'playwright/no-useless-await': 2,
      'playwright/prefer-hooks-in-order': 2,
      'playwright/valid-title': 2,
      'playwright/valid-expect': 2,
      'playwright/valid-describe-callback': 2,
      'playwright/valid-describe-promise': 2,
      'playwright/no-conditional-in-test': 0,
      'playwright/no-skipped-test': 0,
      'playwright/no-wait-for-selector': 2,
      'playwright/no-page-pause': 2,
      'playwright/no-useless-not': 2,
      'playwright/no-eval': 1,
      'playwright/prefer-web-first-assertions': 2,
      'playwright/no-element-handle': 2,
      'playwright/no-unsafe-references': 2,
      'playwright/no-commented-out-tests': 2,
      'playwright/no-duplicate-hooks': 2,
      'playwright/no-focused-tests': 2,
      'playwright/no-conditional-expect': 2,
      'playwright/no-get-by-title': 2,
      '@/no-redeclare': 2,
      'no-undef': 2,
      'no-undef-init': 2,
      'no-unused-vars': 2,
    }
  }];