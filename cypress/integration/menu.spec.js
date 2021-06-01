import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('test menu', function () {
        beforeEach(() => {
            cy.viewport('iphone-x')
            cy.visit('http://localhost:8080')
          })
    
        it('menu screen', function () {
            cy.wait(3000)
            cy.get('#open_menu').click()
            cy.wait(2000)
            cy.contains('demo1：保存').should('be.visible')
            cy.contains('demo2：全件検索').should('be.visible')
            cy.contains('demo3-1：条件検索').should('be.visible')
            cy.contains('demo3-2：条件検索').should('be.visible')
        })
    
        it('handling click', function () {
            cy.get('#open_menu').click()
            cy.wait(2000)
            cy.get('#menu_1').click()
            cy.get('.center').contains('demo1：保存').should('be.visible')
    
            cy.wait(3000)
            cy.get('#open_menu').click()
            cy.wait(2000)
            cy.get('#menu_2').click()
            cy.get('.center').contains('demo2：全件検索').should('be.visible')
    
            cy.wait(3000)
            cy.get('#open_menu').click()
            cy.wait(2000)
            cy.get('#menu_3').click()
            cy.get('.center').contains('demo3-1：条件検索').should('be.visible')
    
            cy.wait(3000)
            cy.get('#open_menu').click()
            cy.wait(2000)
            cy.get('#menu_4').click()
            cy.get('.center').contains('demo3-2：条件検索').should('be.visible')
        })
    })
})