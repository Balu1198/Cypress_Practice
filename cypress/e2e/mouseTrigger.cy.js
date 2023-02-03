describe('Mouse opertion using Trigger', ()=>{

    it('MouseOver', ()=>{
        cy.visit('https://demo.opencart.com/')
        cy.get('.nav.navbar-nav>li:first-child .dropdown-inner > ul >li').should('not.be.visible')
        cy.get('.nav.navbar-nav>li:first-child').trigger('mouseover').click()
        .find(' .dropdown-inner > ul > li:first-child').should('be.visible').click()
        cy.get('#content >h2').should('have.text','PC')
    })

    it('RightClick', ()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-icon-edit > span').should('not.be.visible')
        cy.get('.document > p > span').trigger('contextmenu')  //we can use .rightclick()
        cy.get('.context-menu-icon-edit > span').should('be.visible')
        cy.get('.context-menu-icon-quit > span').click()
    })

    it('DoubleClick', ()=>{
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.get('button').trigger('dblclick')
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('You double clicked me.. Thank You..')
        })
    })

    it('dragTest', ()=>{
        cy.uncaughtException()
        cy.visit('https://demoqa.com/droppable')
        cy.get('#draggable').drag('#simpleDropContainer > #droppable', {force:true}).then((res)=>{
            assert.isTrue(res)
        })
        
        cy.get('#droppableExample-tab-revertable').click()
        cy.get('#revertable').drag('#revertableDropContainer > #droppable', {force:true})
        cy.get('#revertableDropContainer > #droppable > p').should('have.text','Dropped!')
        cy.get('#notRevertable').drag('#revertableDropContainer > #droppable', {force:true}).then((res)=>{
            assert.isTrue(res)
        })

    })

    it.only('scroll', ()=>{
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
        cy.get('table:nth-child(1) > tbody > tr:nth-child(86) > td:nth-child(2)').scrollIntoView()
        .should('have.text', 'India')
    })
})