/*describe('spec1', () => {
  it('passes', () => {
    cy.visit('https://shop.demoqa.com/')
    cy.get('a.noo-search').click()
    cy.get('input.form-control').type('shirt').type('{enter}')
    cy.xpath("//div[@class='products noo-row']/div").should('have.length','7')
  })
})*/


/*describe('spec2', () => {
  it('Negative', () => {
    cy.visit('https://shop.demoqa.com/')
    cy.title().should('eq', 'ToolsQA')
  })
})*/

describe('spec3', () => {
  it('assertion', () => {
    cy.visit('https://shop.demoqa.com/')
    cy.title().should('eq', "ToolsQA Demo Site – ToolsQA – Demo E-Commerce Site")
    .and('include', 'QA')
    .and('not.contain', 'demo');

    cy.xpath("//div[@id='slide-6-layer-4']").then((x) => {
      let name = x.text()
      expect(name).to.include("umbra blue")
      assert.isString(name, name+" is a string")
      assert.notEqual("umbra", name, "not equal")
    })

    
  })
})