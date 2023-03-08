/// <reference types="cypress" />

describe('My First Test',function(){
    it('Does not do much!',function(){
        cy.visit("https://www.netlify.com/");

    // click on 'login with Github' button
    cy.origin("https://github.com", () => {

    });
    })
})






