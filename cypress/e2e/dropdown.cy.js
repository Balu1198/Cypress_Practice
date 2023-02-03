
describe ('dropdown automation', ()=>{

    it.skip('Simple Dropdown', ()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        .get('select.custom-select')
        .select('Turkey')
        .should('have.value', '3')
    })

    it.skip('Another Dropdown', ()=>{
        cy.visit('https://www.dummyticket.com/')
        .get('#menu-item-574')
        .click()

        cy.get('#select2-billing_country-container')
        .click()
        cy.get('input.select2-search__field')
        .type('Israel')
        .type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Israel')

    })

    it('Dynamic Dropdown', ()=>{
        cy.visit('https://www.google.com/')
        .get('input.gLFyf')
        .type('automation')
        cy.wait(1000)
        cy.get('div.wM6W7d>span').each( ($el, index, $list)=>{
            if($el.text() == 'automation meaning')
            {
                cy.wrap($el).click()
                
            }
        })
        cy.wait(1000)
        cy.get('input.gLFyf').should('have.value', 'automation meaning')

    })
})