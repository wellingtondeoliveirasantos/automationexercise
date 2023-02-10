
Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password')
  ) => {
    cy.visit('/login')
    cy.get('[data-qa="login-email"]').type(user)
    cy.get('[data-qa="login-password"]').type(password, { log: false })
    cy.get('[data-qa="login-button"]').click()  
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