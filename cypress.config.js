import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "5d4pte",
  video:true,
  e2e: {
    baseUrl: "http://127.0.0.1:5500",
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config
    },
  },
});
