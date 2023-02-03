describe('alert testing', ()=>{

    it.skip('alert spec', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        .get('button[onclick="jsAlert()"]')
        .click()
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    //Confirm Alert
    it.skip('confirm Accept', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        .get('button[onclick="jsConfirm()"]')
        .click()
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })

    it.skip('confirm Cancel', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        .get('button[onclick="jsConfirm()"]')
        .click()
        cy.on('window:confirm', ()=> false)
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it('prompt Accept', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Balaji')
            cy.get('button[onclick="jsPrompt()"]').click()
            cy.get('#result').should('have.text','You entered: Balaji')
        })
       
    })

    it('prompt Cancel', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            cy.stub(win,'prompt').callsFake(()=> null);
            cy.get('button[onclick="jsPrompt()"]').click()
            cy.get('#result').should('have.text','You entered: null')
        })
    })
    
    it('Auth Confirm', ()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth:{username:'admin', password:'admin'}})
        cy.get('div.example>p').should('have.contain', 'Congratulations')
        
    })

    it('Auth Confirm 2', ()=>{
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('div.example>p').should('have.contain', 'Congratulations')
        
    })

    it.only('Auth Cancel', ()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth')
        cy.window().then(win => {
                cy.stub(win, 'prompt').callsFake(() => null);
        });
    })
})