
describe('user registration', () => {
     
    it('buy three products with new user', () => {
        
        cy.createUser()
        cy.order()

    })
})