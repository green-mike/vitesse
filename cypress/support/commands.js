/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
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
// Cypress.Commands.add('login', (email, password) => {})
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
//

// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

/// <reference types="./commands.d.ts" />
import '@testing-library/cypress/add-commands';

Cypress.Commands.add(
  'isInViewport',
  {
    prevSubject: 'element',
  },
  (element) => {
    const bottom = Cypress.$(cy.state('window')).height();
    const right = Cypress.$(cy.state('window')).width();
    const rect = element[0].getBoundingClientRect();
    expect(rect.top).to.be.lessThan(bottom, 'element center not below viewport: #{this}');
    expect(rect.bottom).to.be.greaterThan(0, 'element center not above viewport: #{this}');
    expect(rect.right).to.be.greaterThan(0, 'element center not left of viewport: #{this}');
    expect(rect.left).to.be.lessThan(right, 'element center not right of viewport: #{this}');
  },
);
