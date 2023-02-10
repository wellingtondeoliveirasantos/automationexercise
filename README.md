# AutomationExercise 
## QA Challenge Linguagem utilizada no projeto: JavaScritp. 

### Clonando o projeto 
1. Acesse a URL [https://github.com/wellingtondeoliveirasantos/blogagi] 
2. Clique no botão 'Code' 
3.  Escolha uma das opções (_Clone with SSH_ ou _Clone with HTTPS_) e então clique no botão _Copy URL_ ao lado do campo da opção escolhida 
4. No terminal, no diretório onde você armazena seus projetos de software, digite `git clone [URL copiada no passo anteior]` e pressione ENTER 
5. Por fim, acesso o diretório do projeto recém clonado (`cd diretorio/pastadepreferencia`) 
6. Caso tenha o nodeJS em sua máquina realizar os passos mencionados no ITEM (Modo interativo) 
7. Caso não tenha o nodeJS em sua máquina realizar os proximos passos  

### Instalando nodeJs 
Acessar o site [https://nodejs.org/en/download/] e instalar a versão LTS de acordo com seu sistema operacional. 

### Inicializando o NPM 
No terminal, dentro do diretório `escolhido`, execute o comando `npm init -y` (este comando irá criar o arquivo `package.json` na raiz do projeto) 

###  Inicializando o arquivo .gitignore 
No mesmo diretório, crie um arquivo chamado `.gitignore`, com o seguinte conteúdo: 
```.gitignore cypress/downloads/ cypress/screenshots/ cypress/videos/ node_modules/ ``` 

### Instalando o Cypress 
No terminal, na raiz do projeto, execute o comando `npm install cypress --save-dev` (este comando irá instalar o Cypress como dependência de desenvolvimento, além de criar o arquivo `package-lock.json` e o diretório `node_modules/`)  

### Inicializando o Cypress 
No terminal, na raiz do projeto, execute o comando `npx cypress open` (este comando irá abrir o Cypress em modo interativo)  

#### Configurando o projeto de testes automatizados 
1. Feche a aplicação do Cypress
2. Abra o arquivo `cypress.config.js` criado na raiz do projeto e altere seu conteúdo pelo seguinte: 
```js 
const { defineConfig } =  require('cypress')
module.exports  =  defineConfig({
e2e: {
baseUrl: 'https://automationexercise.com',
experimentalRunAllSpecs: true,
},
fixturesFolder: false,
viewportWidth: 1200,
viewportHeight: 960,
})
 ```

## Stories 
### Estória buyThreeProducts
Eu como cliente cadastrado no site https://automationexercise.com/ 
Quero fazer a compra de três produtos 
Para que eu possa estar bem vestida(o) 
Os seguintes produtos do e-commerce devem ser adicionados ao carrinho de compra com os dados:

|     Produto    |Quantidade                     |
|----------------|-------------------------------|-----------------------------|
|Stylish Dress   |3|'
|Beautiful Peacock Blue Cotton Linen Saree|2     |
|Men Tshirt      |1                              |


### Estória newUserRegistrationCase 
Eu como novo cliente realizo o cadastrado no site https://automationexercise.com/ 
Quero fazer a compra de três produtos 
Para que eu possa estar bem vestida(o) 
Os seguintes produtos do e-commerce devem ser adicionados ao carrinho de compra com os dados:

|     Produto     |Quantidade    |
|----------------|-------------------------------|-----------------------------|
|Stylish Dress|3|'
|Beautiful Peacock Blue Cotton Linen Saree|2           |
|Men Tshirt          |1|

### Modo interativo 
1. No terminal, na raiz do projeto, execute o comando `npx cypress open` (este comando irá abrir a aplicação do Cypress) 
2. Para executar todos os testes em modo interativo, clique no botão 'Run specs'. Ou, para executar um arquivo de testes em específico, clique no mesmo na listagem de testes localizado no lado esquerdo da tela no menu Spec.
