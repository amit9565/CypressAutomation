import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

Given(/^I launch the SwagLab site$/, () => {
	cy.LuanchApp();
});

Then(/^I insert the standard username$/, () => {
	cy.fixture('element').then((el)=>{
			cy.InsertUsername(el.username[0]);
	})
});

Then(/^I insert the password$/, () => {
	cy.InsertPassword();
});

When(/^I click the Login button$/, () => {
	cy.ClickLogin();
});

Then(/^I should see the products page$/, () => {
	cy.VerifyProduct();
});

Then(/^I insert the wrong username$/, () => {
	cy.fixture('element').then((el)=>{
		cy.InsertUsername(el.username[1]);
})
});

Then(/^I insert the  correct password$/, () => {
	cy.InsertPassword();
});

When(/^I click on the Login button$/, () => {
	cy.ClickLogin();
});

Then(/^I should not be able to login$/, () => {
	cy.AlertMessage()
});



