describe('handling child tabs testing', ()=>{

    it('Method 1', ()=>{
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/');
        cy.get('div[rel-title="Open New Tab"]> a').invoke('removeAttr','target').click();
        cy.url().should('include','https://www.globalsqa.com/demo-site/frames-and-windows/#')
        cy.go("back")
        cy.url().should('include','https://www.globalsqa.com/demo-site/frames-and-windows/')
        cy.wait(2000)
        cy.get('li[id="Open New Window"]').should('be.visible').click()
        cy.get('div[rel-title="Open New Window"]').invoke('css','display','block').should('be.visible')
        cy.get('div[rel-title="Open New Window"] > a').invoke('removeAttr','target').click();
        cy.url().should('include','https://www.globalsqa.com/demo-site/frames-and-windows/#')
        cy.go("back")
        cy.url().should('include','https://www.globalsqa.com/demo-site/frames-and-windows/')
    })

    it.only('Method 2', ()=>{
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('https://demoqa.com/browser-windows', {
            onBeforeLoad(win) {
              cy.stub(win, 'open')
            }
        })
        cy.get('#tabButton').click()
        cy.window().its('open').should('be.called');
        
        cy.get('#windowButton').click()
        cy.window().its('open').should('be.called')
        
    })
})