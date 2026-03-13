import { defineConfig } from "cypress";
import * as ccModule from '@cypress/code-coverage/task.js'
const registerCodeCoverageTaks = ccModule.default

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://127.0.0.1:5500",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      registerCodeCoverageTaks(on, config)
      return config
    },
  },
});
