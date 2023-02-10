describe('Pesquisa', () => {
 
    beforeEach(() => {

        cy.login() 
        
    });
    
    it('buy three products', () => {

        const searchAndBuyProduct = (productName, quantity) => {
            cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
            cy.get('#search_product').type(productName)
            cy.get('#submit_search').click()
            cy.get('.choose > .nav > li > a').click()
            cy.get('#quantity').clear().type(quantity)
            cy.get(':nth-child(5) > .btn').click()
            cy.get('.modal-footer > .btn').click()
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

})