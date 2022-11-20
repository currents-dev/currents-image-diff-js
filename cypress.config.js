const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");
const { createServer } = require("http-server");

module.exports = defineConfig({
  projectId: "Ij0RfK",
  video: true,
  videoUploadOnPasses: false,
  e2e: {
    specPattern: "cypress/integration/*.spec.js",
    supportFile: "cypress/support/e2e.js",
    env: {
      preserveOriginalScreenshot: true,
    },
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      const port = 8081;
      const server = createServer({
        root: "./",
        showDir: true,
        https: {
          key: "key.pem",
          cert: "cert.pem",
        },
      });
      server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
      });
      getCompareSnapshotsPlugin(on, config);
      // implement node event listeners here
    },
  },
});
