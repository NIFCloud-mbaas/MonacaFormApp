import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('test demo 3-2', function () {
        var name = 'Tony'
        var email = 'tony@gmail.com'
        var content = 'content'
        var age = '32'
        var prefecture = '岩手県'
        var body = name + " (" + prefecture + ") -" + age + "- " + email
    
        var fromeAge = '10'
        var toAge = '33'
    
        beforeEach(() => {
            cy.viewport('iphone-x')
            cy.visit('http://localhost:8080')
    
            cy.get('#open_menu').click()
            cy.wait(2000)
            cy.get('#menu_4').click()
            cy.get('.center').contains('demo3-2：条件検索').should('be.visible')
            cy.wait(2000)
        })
    
        it('handling empty from age and to age', function () {
            cy.get('#searchAge').contains('検索').click()
            cy.wait(1000)
            cy.contains('値を入力してください').should('be.visible')
            cy.contains('OK').click()
        })
    
        it('handling empty from age', function () {
            cy.get('#inputAgeLessThan').select(toAge)
            cy.get('#searchAge').contains('検索').click()
            cy.wait(1000)
            cy.contains('値を入力してください').should('be.visible')
            cy.contains('OK').click()
        })
    
        it('handling empty to age', function () {
            cy.get('#inputAgeGreaterThan').select(fromeAge)
            cy.get('#searchAge').contains('検索').click()
            cy.wait(1000)
            cy.contains('値を入力してください').should('be.visible')
            cy.contains('OK').click()
        })
    
        it('handling from age greater than to age', function () {
            cy.get('#inputAgeGreaterThan').select(toAge)
            cy.get('#inputAgeLessThan').select(fromeAge)
            cy.get('#searchAge').contains('検索').click()
            cy.wait(1000)
            cy.contains('値が不正です').should('be.visible')
            cy.contains('OK').click()
        })
    
        it('handling search age', function () {
            cy.get('#inputAgeGreaterThan').select(fromeAge)
            cy.get('#inputAgeLessThan').select(toAge)
            cy.get('#searchAge').contains('検索').click()
            cy.wait(5000)
    
            cy.contains(body).should('be.visible')
            cy.contains(body).click()
            cy.wait(1000)
            cy.contains(content).should('be.visible')
            cy.contains('OK').click()
        })
    })
})