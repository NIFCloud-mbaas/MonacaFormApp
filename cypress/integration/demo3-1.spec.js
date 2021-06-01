import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('test demo 3-1', function () {
        var name = 'Tony'
        var email = 'tony@gmail.com'
        var content = 'content'
        var age = '32'
        var prefecture = '岩手県'
        var body = name + " (" + prefecture + ") -" + age + "- " + email
    
        beforeEach(() => {
            cy.viewport('iphone-x')
            cy.visit('http://localhost:8080')
    
            cy.get('#open_menu').click()
            cy.wait(2000)
            cy.get('#menu_3').click()
            cy.get('.center').contains('demo3-1：条件検索').should('be.visible')
            cy.wait(2000)
        })
    
        it('handling empty email', function () {
            cy.get('#searchEmail').contains('検索').click()
            cy.wait(1000)
            cy.contains('値を入力してください').should('be.visible')
            cy.contains('OK').click()
        })
    
        it('handling search email', function () {
            cy.get('#inputSearchEmailAddress').type(email, { delay: 100 }).should('have.value', email)
            cy.get('#searchEmail').contains('検索').click()
            cy.wait(5000)
    
            cy.contains(body).should('be.visible')
            cy.contains(body).click()
            cy.wait(1000)
            cy.contains(content).should('be.visible')
            cy.contains('OK').click()
        })
    
        it('handling empty prefecture', function () {
            cy.get('#searchPrefecture').contains('検索').click()
            cy.wait(1000)
            cy.contains('値を入力してください').should('be.visible')
            cy.contains('OK').click()
        })
    
        it('handling search prefecture', function () {
            cy.get('#inputSearchPrefecture').select(prefecture)
            cy.get('#searchPrefecture').contains('検索').click()
            cy.wait(5000)
    
            cy.contains(body).should('be.visible')
            cy.contains(body).click()
            cy.wait(1000)
            cy.contains(content).should('be.visible')
            cy.contains('OK').click()
        })
    })
})