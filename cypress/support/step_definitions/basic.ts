import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('open index page', () => {
  cy.visit('/')
})

Then('I see home layout', () => {
  cy.contains('[Home Layout]')
    .should('exist')
})
When('type {string} then enter', (name) => {
  cy.get('#input')
    .type(`${name}{Enter}`)
})

Then('I see page redirect to {string}', (path) => {
  cy.url().should('eq', `http://localhost:3333${path}`)
})
Then('I see default layout', () => {
  cy.contains('[Default Layout]')
    .should('exist')
})
Given('redirect to {string}', (path: string) => {
  cy.visit(path)
})
When('click back button', () => {
  cy.findByRole('button', { name: /back/i })
    .click()
})
When('click about button', () => {
  cy.get('[title="About"]')
    .click()
})
Then('pre language exist', () => {
  cy.get('pre.language-js').should('exist')
})
