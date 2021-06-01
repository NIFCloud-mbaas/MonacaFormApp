import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('test demo 1', function () {
        var name = 'Tony'
        var email = 'tony@gmail.com'
        var title = 'title'
        var content = 'content'
        var age = '32'
        var prefecture = '岩手県'
    
        beforeEach(() => {
            cy.viewport('iphone-x')
            cy.visit('http://localhost:8080')
        })
    
        it('handling empty name', function () {
            cy.contains('送信').click()
            cy.wait(1000)
            cy.contains('名前が入力されていません').should('be.visible')
            cy.contains('OK').click()
        })
    
        it('handling empty email', function () {
            cy.get('#inputName').type(name, { delay: 100 }).should('have.value', name)
            cy.contains('送信').click()
            cy.wait(1000)
            cy.contains('メールアドレスが入力されていません').should('be.visible')
            cy.contains('OK').click()
        })
    
        it('handling empty age', function () {
            cy.get('#inputName').type(name, { delay: 100 }).should('have.value', name)
            cy.get('#inputEmailAddress').type(email, { delay: 100 }).should('have.value', email)
            cy.contains('送信').click()
            cy.wait(1000)
            cy.contains('年齢が入力されていません').should('be.visible')
            cy.contains('OK').click()
        })
    
        it('handling empty prefecture', function () {
            cy.get('#inputName').type(name, { delay: 100 }).should('have.value', name)
            cy.get('#inputEmailAddress').type(email, { delay: 100 }).should('have.value', email)
            cy.get('#inputAge').select(age)
            cy.contains('送信').click()
            cy.wait(1000)
            cy.contains('都道府県が入力されていません').should('be.visible')
            cy.contains('OK').click()
        })
    
        it('handling empty title', function () {
            cy.get('#inputName').type(name, { delay: 100 }).should('have.value', name)
            cy.get('#inputEmailAddress').type(email, { delay: 100 }).should('have.value', email)
            cy.get('#inputAge').select(age)
            cy.get('#inputPrefecture').select(prefecture)
            cy.contains('送信').click()
            cy.wait(1000)
            cy.contains('問い合わせタイトルが入力されていません').should('be.visible')
            cy.contains('OK').click()
        })
    
        it('handling empty content', function () {
            cy.get('#inputName').type(name, { delay: 100 }).should('have.value', name)
            cy.get('#inputEmailAddress').type(email, { delay: 100 }).should('have.value', email)
            cy.get('#inputAge').select(age)
            cy.get('#inputPrefecture').select(prefecture)
            cy.get('#inputTitle').type(title, { delay: 100 }).should('have.value', title)
            cy.contains('送信').click()
            cy.wait(1000)
            cy.contains('問い合わせ内容が入力されていません').should('be.visible')
            cy.contains('OK').click()
        })
    
        it('handling save', function () {
            cy.get('.center').contains('demo1：保存').should('be.visible')
            cy.wait(2000)
            cy.get('#inputName').type(name, { delay: 100 }).should('have.value', name)
            cy.get('#inputEmailAddress').type(email, { delay: 100 }).should('have.value', email)
            cy.get('#inputAge').select(age)
            cy.get('#inputPrefecture').select(prefecture)
            cy.get('#inputTitle').type(title, { delay: 100 }).should('have.value', title)
            cy.get('#inputContents').type(content, { delay: 100 }).should('have.value', content)
            cy.contains('送信').click()
            cy.wait(3000)
            cy.contains('問い合わせを受け付けました').should('be.visible')
            cy.contains('OK').click()
        })
    })
})