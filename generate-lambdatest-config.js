const fs = require('fs');

function generateLambdaTestConfig() {
  const username = process.env.LT_USERNAME;
  const accessKey = process.env.LT_ACCESS_KEY;

  if (!username || !accessKey) {
    console.error('Erro: Variáveis LT_USERNAME e LT_ACCESS_KEY precisam estar definidas no ambiente.');
    process.exit(1);
  }

  const config = {
    lambdatest_auth: {
      username: username,
      access_key: accessKey
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
  console.log('LambdaTest config generated successfully.');
}

// Executa a função para gerar o arquivo
generateLambdaTestConfig();
