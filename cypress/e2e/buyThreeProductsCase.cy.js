describe('buy products', () => {
 
    beforeEach(() => {

        cy.login() 
        
    });
    
    it('buy three products', () => {

        cy.order()

    })

})