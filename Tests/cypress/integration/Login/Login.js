import { Before, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Before({ tags: "@SignupPage" }, () => {
  cy.visit('/signup');
});

Then('SubmitButton is {string}', (isDisable) => {
  if (isDisable == "not Disable") {
    cy.get('#SubmitButton').click();
    cy.wait(10000)
    cy.url().should('eq', 'http://localhost:3000/otp/0926244589');
  }
  if (isDisable == "Disable") { 
    cy.get('#SubmitButton').click();
    cy.url().should('eq', 'http://localhost:3000/signup');
    //cy.get('[dataTestid="Sign-in-submit"]').should('be.disabled');
  }
});

When('I check the Policy-Checker', () => {
  cy.get('#PrivacyPolicy-Checker').dblclick();
});

When('I fill phone-number {string}', (phoneNumber) => {
  if (phoneNumber) {
    cy.get('#PhoneNumber').type(phoneNumber);
  }
});