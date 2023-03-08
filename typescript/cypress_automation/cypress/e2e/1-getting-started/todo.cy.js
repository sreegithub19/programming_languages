/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress


// solution: https://stackoverflow.com/questions/72460992/error-when-i-use-cy-xpath-inside-cy-origin


describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://example.cypress.io/todo')
  })

  it('displays two todo items by default', () => {
  cy.visit("https://www.netlify.com/");
  cy.xpath("//div[@class='masthead-nav-compact-links']//a[@id='mainNav-login']").click({force:"true"});

    // click on 'login with Github' button
    cy.origin("https://github.com", () => {
        cy.visit("/");
        cy.get('div.width-full > :nth-child(2) > .d-inline-block').click({force:"true"});
        cy.get('.font-mktg > .color-fg-on-emphasis').click({force:"true"});
    });


    cy.origin("https://www.vercel.com/", () => {
        cy.visit("/");
          //   cy.origin("https://www.yahoo.com", () => {
          //     cy.visit("/");
          // });
      
    });
    cy.get('[data-testid="landing-page/hero/get-demo-cta"]').click({force:"true"});
    })
})
