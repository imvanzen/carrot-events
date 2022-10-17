const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    setupNodeEvents(on, config) {},
    specPattern: "src/**/*.test.{js,ts,jsx,tsx}",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
