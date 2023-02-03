describe('iframe testing', ()=>{

    it('Iframe Method 1', ()=>{
        cy.uncaughtException()
        cy.visit('https://demoqa.com/frames')
        let iframe = cy.get('#frame1').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        iframe.should('contain.text','sample')
    })

    //With custom commends on commands.js
    it('Iframe Method 2', ()=>{
        cy.uncaughtException()
        cy.visit('https://demoqa.com/frames')
        cy.getIframe('#frame2').find('h1').should('contain.text','sample')
    })

    //Using Library
    it('Iframe Method 3', ()=>{
        cy.uncaughtException()
        cy.visit('https://demoqa.com/frames')
        cy.frameLoaded('#frame2')
        cy.iframe('#frame2').find('h1').should('contain.text','sample')
    })

    //method with enter for performing whole functions
    //check heroku nested frame
    it.only('Iframe Method 4', ()=>{
        cy.uncaughtException()
        cy.visit('https://demoqa.com/nestedframes')
        cy.getIframe('#frame1').should('have.text','Parent frame')
        cy.get('#frame1').then( ($frame1)=>{
            let iframe2 = $frame1.contents().find('iframe')
            cy.wrap(iframe2).as('ref')
            cy.get('@ref').then(($iframe2)=>{
                const txt = $iframe2.contents().find('p').text()
                cy.log(txt)
                expect('Child Iframe').to.equal(txt)
            })
        })
    })

})