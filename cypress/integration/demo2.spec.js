import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('test demo 2', function () {
        var name = 'Tony'
        var email = 'tony@gmail.com'
        var content = 'content'
        var age = '32'
        var prefecture = '岩手県'
        var body = name + " (" + prefecture + ") -" + age + "- " + email
    
        beforeEach(() => {
            cy.viewport('iphone-x')
            cy.visit('http://localhost:8080')
        })
    
        it('handling load Inquiry', function () {
            cy.get('#open_menu').click()
            cy.wait(2000)
            cy.get('#menu_2').click()
            cy.get('.center').contains('demo2：全件検索').should('be.visible')
            cy.wait(2000)
            cy.contains(body).should('be.visible')
            cy.contains(body).click()
            cy.wait(2000)
            cy.contains(content).should('be.visible')
        })
    })
})