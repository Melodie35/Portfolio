import { defineConfig } from "cypress";
import * as ccModule from '@cypress/code-coverage/task.js'
const registerCodeCoverageTaks = ccModule.default

export default defineConfig({
  video:true,
  e2e: {
    baseUrl: "http://127.0.0.1:5500",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      registerCodeCoverageTaks(on, config)
      return config
    },
  },
});
