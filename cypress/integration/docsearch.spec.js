import 'cypress-xpath'
describe('Search validation', () => {

it ('Should redirect on the DocAsap search website',()=>{
   cy.visit('https://docasap.com/search/org_code/PREV');
   cy.title().should('eq', 'DocASAP | Search doctors. See ratings. Book appointments online. '); 
})



})