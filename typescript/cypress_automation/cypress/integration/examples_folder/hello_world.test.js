/// <reference types="cypress" />

describe('Empty test',()=>{
    it('test one',() => {
        cy.visit('https://codedamn.com')

        // mocha
        cy.contains("Build projects, practice and learn to code from scratch - without leaving your browser.")
        .should('exist')

        cy.get('div#root').should('exist')
        //or
        cy.get('div[id=root]').should('exist')


// -------------- To check for containing / getting ---------------
        // -------------- Way 1 ------------
        cy.contains('Password')

        // -------------- Way 2------------ (not working)
            //cy.get('.asyncComponent > div > a')
            //cy.contains('.asyncComponent > div > a')

        // -------------- Way 3 ------------
        
        cy.contains('Explore All Roadmaps').click()
        // Not working
            //cy.get('[data-testid=submit-btn]').click()
            //cy.get('[data-testid=username]')
            // cy.get('[data-testid=homepage-cta]')




    })
})


