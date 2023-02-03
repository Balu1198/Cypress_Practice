
describe('checkbox testing', ()=>{
    it('radiobutton',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('input#female').should('be.visible')
        cy.get('input#male').should('be.visible')

        cy.get('input#female').check().should('be.checked')
        cy.get('input#male').should('not.be.checked')

        cy.get('input#male').check().should('be.checked')
        cy.get('input#female').should('not.be.checked')
    })

    it('check_box',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get("input.form-check-input[type='checkbox']").should('be.visible')
        .check().should('be.checked')
        .uncheck().should('not.be.checked')
        .first().check().should('be.checked')
        .last().check().should('be.checked')

    })
})