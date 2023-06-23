Cypress.Commands.add('LuanchApp',()=>{
    cy.visit('/')
})

Cypress.Commands.add('InsertUsername',(Name)=>{
    cy.fixture('element').then((el)=>{
      cy.get(el.usernameField).should('exist').type(Name)

    })
   
})

Cypress.Commands.add('InsertPassword',()=>{
    cy.fixture('element').then((el)=>{
        cy.get(el.passwordField).should('exist').type(el.password)
    })
})

Cypress.Commands.add('ClickLogin',()=>{
    cy.fixture('element').then((el)=>{
        cy.get(el.loginButton).should('exist').click()
    })
})

Cypress.Commands.add('VerifyProduct',()=>{
    cy.fixture('element').then((el)=>{
        cy.get(el.productTitle).should('exist').and('contain','Products')
    })
})
Cypress.Commands.add('AlertMessage',()=>{
    cy.fixture('element').then((el)=>{
        cy.get(el.alert).should('exist').and('have.text','Epic sadface: Sorry, this user has been locked out.')
    })
})