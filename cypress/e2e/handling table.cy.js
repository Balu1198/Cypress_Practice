describe('Handling Table', ()=>{

   beforeEach('setup', ()=>{ 
    cy.visit('https://demo.opencart.com/admin')
    cy.get('#input-username').type('demo')
    cy.get('#input-password').type('demo')
    cy.get('button').click()
    cy.get('button.btn-close').click()
    cy.get('ul>li#header-profile>a>span').should('contain', 'demo demo')
    cy.get('li#menu-customer').click()
    cy.get('#collapse-5 > li:first-child > a').click()
   })

   it('Counting Number of Rows and Columns ', ()=>{ 
    cy.get('table > tbody > tr').should('have.length','10')
    cy.get('table > thead > tr >td').should('have.length','7')

   })

   it('Accessing data from particular row', ()=>{
    cy.get('table > tbody > tr:nth-child(5) > td:nth-child(3)').contains('princytrainings4@gmail.com')
    .should('have.text','princytrainings4@gmail.com')
   })

    it('Accessing data', ()=>{ 
        cy.get('table > tbody > tr') .each(($row, index, $rows)=>{
            cy.wrap($row).find('td:nth-child(3)').then((data)=>{
                cy.log(data.text())
            })
        })
    })

    it('Accessing all data', ()=>{ 
        cy.get('table > tbody > tr') .each(($row, index, $rows)=>{
            cy.wrap($row).find('td').each(($col, index, $cols)=>{
                cy.log($col.text())
            })
        })
    })

    it.only('Pagination', ()=>{ 

        /*cy.get(".col-sm-6.text-end").then((e)=>{
            let count = e.text()
            let page = count.substring(count.indexOf('(')+1, count.lastIndexOf(" "));
            cy.log(page)
        })*/
        
        let count = 10;
        for(var i=1; i<10; i++)
        {
            cy.log('Active Page : '+i)
            cy.get('table > tbody > tr:nth-child(5) > td:nth-child(3)').then(e=>{
                cy.log(e.text())
            })
            cy.get('div.col-sm-6.text-start > ul > li:nth-child('+count+')').click()
            count = 12
            cy.wait(3000)
        }
        
    })

})