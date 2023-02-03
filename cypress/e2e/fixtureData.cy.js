describe('fixtureData', ()=>{

    it('Single Data', ()=>{
        cy.fixture('example.json').then((data)=>{
            cy.visit('https://demo.opencart.com/admin')
            cy.get('#input-username').type(data.name)
            cy.get('#input-password').type(data.pass)
            cy.get('button').click()
            cy.get(".alert alert-danger alert-dismissible").should('be.hidden')
            cy.get('button.btn-close').click()
            cy.get('ul>li#header-profile>a>span').should('contain', data.expect)
        })
    })

    it.only('Single Data', ()=>{
        cy.fixture('example.json').then((element)=>{
            element.forEach(data => {
                cy.visit('https://demo.opencart.com/admin')
            cy.get('#input-username').type(data.name)
            cy.get('#input-password').type(data.pass)
            cy.get('button').click()
            if(data.name=='demo')
            {
                cy.get('button.btn-close').click()
                cy.get('ul>li#header-profile>a>span').should('contain', data.expect)
            }
            else
            {
                cy.get(".alert").should('have.text',data.expect)
            }
            })
        })
    })

})