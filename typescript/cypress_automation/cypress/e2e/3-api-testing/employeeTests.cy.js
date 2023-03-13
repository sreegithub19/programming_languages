/// <reference types="cypress" />

context('employees API', () => {
  it('verify request returns JSON', () => {
    cy.request('http://localhost:3000/employees').its('headers').its('content-type').should('include', 'application/json')
  })

  it('verify the request returns the correct status code', () => {
    cy.request('http://localhost:3000/employees').its('status').should('be.equal', 200)
  })

  it('verify the request returns 50 items',() => {
    cy.request('http://localhost:3000/employees').its('body').should('have.length', 50)
    cy.task("log",[
      `This is consolelog : Navigatedtohomepage`,
      2,
      33,
    ].join('\r\n'))


    cy.task("string_",`
     npm root -g && 
     python -c "print('Python script from cypress file says:',2)"
    `)


  })
  
  it('express works',() => {
          cy.request('http://localhost:3001').its('body').should('not.include', 'Hello World!')
  })


})