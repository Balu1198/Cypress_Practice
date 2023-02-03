describe('Hooks', ()=>{
    
    before(()=>{
        
    })

    after(()=>{
       
        
    })

    beforeEach(()=>{
        cy.visit('https://demo.opencart.com/admin')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('button').click()
        cy.get('button.btn-close').click()
        cy.get('ul>li#header-profile>a>span').should('contain', 'demo demo')
        cy.get('h1').should('have.text', 'Dashboard')
        
    })

    afterEach(()=>{
        cy.get('#header-logout > .nav-link > .d-none').click()
        cy.wait(3000)
        cy.get('.card-header').should('contain','login')
    })

    it('verify Customer', ()=>{
        cy.get('#menu-customer').click()
        cy.get('#collapse-5 > li:first-child > a').click()
        cy.get('h1').should('have.text', 'Customers')
        cy.get('table > tbody > tr').should('have.length','10')
        cy.get('table > thead > tr >td').should('have.length','7')
    })

    it('Verify Catalog', ()=>{
        cy.get('#menu-catalog').click()
        cy.get('#menu-catalog > ul >li:nth-child(2)').click()
        cy.get('table > tbody > tr:nth-child(3) > td:nth-child(3)').should('have.text','HP LP3065\n\nEnabled\n')
    })

})