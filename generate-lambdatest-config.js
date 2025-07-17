const fs = require('fs');

const config = {
  lambdatest_auth: {
    username: process.env.LT_USERNAME,
    access_key: process.env.LT_ACCESS_KEY
  },
  run_settings: {
    build_name: `GitHub Actions Build - ${new Date().toISOString()}`,
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
console.log('LambdaTest config generated');
