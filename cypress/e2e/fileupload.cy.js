describe('File Upload', ()=>{

    it('File upload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test1.png')
        cy.get('#file-submit').click()
        cy.wait(3000)
        cy.get('h3').should('have.text','File Uploaded!')
    })

    it('File upload - Rename', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'test1.png', fileName:'myfile.png'})
        cy.get('#file-submit').click()
        cy.wait(3000)
        cy.get('h3').should('have.text','File Uploaded!')
    })

    it('File upload - Drag-n-Drop', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test1.png', { subjectType: 'drag-n-drop' })
        cy.get('#file-submit').click()
        cy.wait(3000)
        cy.get('h3').should('have.text','File Uploaded!')
    })

    it('File upload - multiple', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['test1.png', 'test2.png'])
        cy.get('ul#fileList>li').should('have.length','2')
        .each((e)=>{
            cy.log(e.text())
        })
    })

    it.only('File upload - ShadowDOM', ()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile('test1.png')
        cy.get('.smart-item-name',  { includeShadowDom: true }).should('have.text','test1.png')
    })

})