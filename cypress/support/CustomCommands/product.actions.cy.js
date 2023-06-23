
Cypress.Commands.add('luanchProductPage',()=>{
    cy.LuanchApp();
    cy.fixture('element').then((el)=>{
        cy.InsertUsername(el.username[0]);
    });
    cy.InsertPassword();
    cy.ClickLogin();
    // cy.visit('/inventory')
})

Cypress.Commands.add('logoAndTitle',()=>{
    cy.fixture('element').then((el)=>{
        cy.get(el.productPageLogo).should('exist').and('be.visible')
        cy.get(el.productPageTitle).should('exist').and('have.text','Products')
    })
})

Cypress.Commands.add('validatingNumberOfProduct',()=>{
    cy.fixture('element').then((el)=>{
        cy.get(el.productPageList).should('have.length','6')
    })
})

Cypress.Commands.add('selectProducts',(productName)=>{
    cy.fixture('element').then((el)=>{
        cy.get(el.productPageItemname).each(($el,index,$list)=>{
            if($el.text().includes(productName)){
                cy.get(el.productPageAddtocartButton).eq(index).click()
            }
        })
    })
})

Cypress.Commands.add('clickCartButton',()=>{
    cy.fixture('element').then((el)=>{
        cy.get(el.productPageShoppingCart).click()

    })
})

