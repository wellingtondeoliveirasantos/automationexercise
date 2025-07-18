
# 🛒 AutomationExercise - Cypress Automation Project

Projeto de automação de testes end-to-end usando **Cypress** para o site [Automation Exercise](https://automationexercise.com). Desenvolvido como um desafio de QA, com execução local e integração contínua via **GitHub Actions + LambdaTest**.

---

## 🚀 Tecnologias

- ✅ **JavaScript**
- ✅ **Cypress 13**
- ✅ **GitHub Actions**
- ✅ **LambdaTest** (Execução em nuvem)

---

## 📦 Pré-requisitos

- Node.js (v18.14.0 recomendado)
- npm (v9.3.1 recomendado)

> Caso não tenha instalado, acesse: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

---

## 🔧 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/wellingtondeoliveirasantos/automationexercise.git
   cd automationexercise
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

---

## 🧪 Executando os testes

### ✅ Localmente

- Headless:
  ```bash
  npm run cy:run
  ```

- Interativo (com interface do Cypress):
  ```bash
  npm run cy:open
  ```

---

## ☁️ Executando no LambdaTest via GitHub Actions

### Configuração

1. Crie duas variáveis secretas no GitHub:
   - `LT_USERNAME`
   - `LT_ACCESS_KEY`

2. Assegure-se de que o arquivo `generate-lambdatest-config.js` esteja presente com a lógica de geração do `lambdatest-config.json`.

3. O workflow do GitHub Actions já está configurado em:

```
.github/workflows/cypress.yml
```

A execução será feita automaticamente em cada push na branch `main` ou manualmente via **"Run workflow"**.

Você pode acompanhar os testes diretamente no [Painel do LambdaTest](https://automation.lambdatest.com/builds/).

---

## 🧾 Estórias Automatizadas

### 🛍️ buyThreeProducts

**Cenário:** Cliente cadastrado realiza a compra de três produtos.

| Produto | Quantidade |
|---------|------------|
| Stylish Dress | 3 |
| Beautiful Peacock Blue Cotton Linen Saree | 2 |
| Men Tshirt | 1 |

---

### 🧑‍💻 newUserRegistrationCase

**Cenário:** Novo cliente se cadastra e realiza a compra dos mesmos produtos acima.

| Produto | Quantidade |
|---------|------------|
| Stylish Dress | 3 |
| Beautiful Peacock Blue Cotton Linen Saree | 2 |
| Men Tshirt | 1 |

---

## 👨‍💻 Autor

Este projeto foi desenvolvido com 💚 por **Wellington Santos**.

- [LinkedIn](https://www.linkedin.com/in/wellingtondeoliveirasantos/)
- [GitHub](https://github.com/wellingtondeoliveirasantos)