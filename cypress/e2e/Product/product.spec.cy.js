import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'



Given(/^product page url$/, () => {
	cy.luanchProductPage()
});

Then(/^A user should able to see product page by validating the title$/, () => {
	cy.logoAndTitle()
});

Then(/^Validate the number of products$/, () => {
	cy.validatingNumberOfProduct()
});

Then(/^Validate the name of the products$/, () => {
	return true;
});

Then(/^A user click on add to cart button it should change to remove cart status$/, () => {
	return true;
});

When(/^add the product$/, () => {
    cy.fixture('element').then((el)=>{
        let product = el.productName;
        product.forEach(Items => {
            cy.selectProducts(Items)
        });
    })
	
});

Then(/^click on cart$/, () => {
   cy.clickCartButton()
});


