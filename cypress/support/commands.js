// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('verifyColumnValue', (columnName) => {
    cy.get('table') 
      .contains('th', columnName)
      .invoke('index')
      .then((index) => {
        cy.get('table') 
          .find(`tbody > tr > td:nth-child(${index + 1})`) 
          .first() 
          .invoke('text')
          .then((text) => {
            cy.wrap(text.trim());
          });
      });
  });
  

  Cypress.Commands.add('getNthElementByTextAndTestId', (text, testId, index) => {
    return cy.get(`[data-testid="${testId}"]`)
      .contains(text)
      .eq(index)
      .then(($element) => {
        return $element;
      });
  });

  Cypress.Commands.add('clearAndType', { prevSubject: 'element' }, (subject, text) => {
    cy.wrap(subject).clear();
    cy.wrap(subject).type(text);
  });