const { defineConfig } = require("cypress");

const locale = process.env.SITE_LOCALE;
module.exports = defineConfig({
  "reporterEnabled": "mochawesome, mocha-junit-reporter",

  "mochaJunitReporterReporterOptions": {
    "mochaFile": `./junit/${locale}/[hash].xml`
  },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'UpKeep Automation',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly : false,
    debug : false,
    override : false
  },

  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 500,
    viewportHeight: 500,
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
