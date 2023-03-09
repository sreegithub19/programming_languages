describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.task("log","This is consolelog : Navigatedtohomepage")
  })
})