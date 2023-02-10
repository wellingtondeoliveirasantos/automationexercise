
const faker = require('faker');

Cypress.Commands.add('createUser', () => {

  cy.visit('/login')

  cy.get('[data-qa="signup-name"]').type(faker.internet.userName())
  cy.get('[data-qa="signup-email"]').type(faker.internet.email())
  cy.get('[data-qa="signup-button"]').click()

  cy.get('#id_gender1').click()

  cy.get('[data-qa="password"]').type(faker.internet.password())

  cy.get('[data-qa="first_name"]').type(faker.name.firstName())

  cy.get('[data-qa="last_name"]').type(faker.name.lastName())

  cy.get('[data-qa="address"]').type(faker.address.streetAddress())

  cy.get('[data-qa="country"]').select("Canada")

  cy.get('[data-qa="state"]').type(faker.address.state())

  cy.get('[data-qa="city"]').type(faker.address.city())

  cy.get('[data-qa="zipcode"]').type(faker.address.zipCode())

  cy.get('[data-qa="mobile_number"]').type(faker.phone.phoneNumber())

  cy.get('[data-qa="create-account"]').click()

  cy.contains("Congratulations! Your new account has been successfully created!")

  cy.get('[data-qa="continue-button"]').click()

})

Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password')
) => {
  cy.visit('/login')
  cy.get('[data-qa="login-email"]').type(user)
  cy.get('[data-qa="login-password"]').type(password, { log: false })
  cy.get('[data-qa="login-button"]').click()
})

Cypress.Commands.add('order', () => {

  function searchAndBuyProduct(productName, quantity) {
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('#search_product').type(productName);
    cy.get('#submit_search').click();
    cy.get('.choose > .nav > li > a').click();
    cy.get('#quantity').clear().type(quantity);
    cy.get(':nth-child(5) > .btn').click();
    cy.get('.modal-footer > .btn').click();
  }

  searchAndBuyProduct("Stylish Dress", 3)
  searchAndBuyProduct("Beautiful Peacock Blue Cotton Linen Saree", 2)
  searchAndBuyProduct("Men Tshirt", 1)

  cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
  cy.get('.col-sm-6 > .btn').click()
  cy.get(':nth-child(7) > .btn').click()

  cy.payOrder()

  cy.get('[data-qa="pay-button"]').click(2)
  cy.contains("Congratulations! Your order has been confirmed!")
  cy.get('[data-qa="continue-button"]').click()

})

Cypress.Commands.add('payOrder', (
  nameOnCard = Cypress.env('name_on_card'),
  cardNumber = Cypress.env('card_number'),
  cvc = Cypress.env('cvc'),
  expiryMonth = Cypress.env('expiry_month'),
  expiryYear = Cypress.env('expiry_year')
) => {
  cy.get('[data-qa="name-on-card"]')
    .type(nameOnCard)
  cy.get('[data-qa="card-number"]')
    .type(cardNumber, { log: false })
  cy.get('[data-qa="cvc"]')
    .type(cvc, { log: false })
  cy.get('[data-qa="expiry-month"]')
    .type(expiryMonth, { log: false })
  cy.get('[data-qa="expiry-year"]')
    .type(expiryYear, { log: false })
})