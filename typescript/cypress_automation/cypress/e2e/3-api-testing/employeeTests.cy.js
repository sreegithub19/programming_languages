/// <reference types="cypress" />


context('employees API', () => {
  it('verify request returns JSON', () => {
    cy.request('http://localhost:3000/employees').its('headers').its('content-type').should('include', 'application/json')
  })

  it('verify the request returns the correct status code', () => {
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
          cy.wait(5000);
          cy.request('http://localhost:3001').its('body').should('not.include', 'Hello World!')
  //})

  //it('check google images',() => {
    
  //         // cy.visit("https://www.google.com/");

          // Images
          // if get
           cy.get('body').then((body) => {
              if (body.find(':nth-child(2) > .gb_q').length > 0) {
                    cy.get(':nth-child(2) > .gb_q').click({force:true});
              }
            })

            cy.get('body').then((body) => {
              if (body.find('.gLFyf').length > 0) {
                  cy.fixture("images.json").then(kung => {
                    cy.get('.gLFyf').type(kung.one,{force:true});
                  });
              }
            })

            cy.get('body').then((body) => {
              if (body.find('.Tg7LZd').length > 0) {
                    cy.get('.Tg7LZd').click({force:true});
              }
            })

            // if xpath
            cy.xpath("count((//img[@alt='Domestic cat'])[1])").then(count => {  // check existence first
                    if (count) {
                            cy.xpath("(//img[@alt='Domestic cat'])[1]").rightclick({force:true})
                    }
            })           
           
  })


})