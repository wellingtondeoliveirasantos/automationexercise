const fs = require('fs');
require('dotenv').config();

const config = {
  lambdatest_auth: {
    username: process.env.LT_USERNAME,
    access_key: process.env.LT_ACCESS_KEY
  },
  run_settings: {
    build_name: "Build Cypress Visual 17Jul",
    project_name: "AutomationExercise",
    specs: "cypress/e2e/**/*.cy.js",
    ignore_files: "",
    network: true,
    headless: false,
    parallels: 1
  },
  browsers: [
    {
      browser: "Chrome",
      platform: "macOS Ventura",
      versions: ["latest"]
    }
  ]
};

fs.writeFileSync('lambdatest-config.json', JSON.stringify(config, null, 2));
console.log('Arquivo lambdatest-config.json gerado com sucesso!');
