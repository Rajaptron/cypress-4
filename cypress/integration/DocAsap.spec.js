import 'cypress-xpath'

describe('provider Search', () => {

      beforeEach( () => {
        cy.visit('https://docasap.com/provider-search/org_code/PREV');
        cy.wait(5000);
        cy.scrollTo(300,0)
      })

    it ('Should search for the primary care and verify title' ,() =>{
        cy.xpath("//input[@id='mat-input-0']").type('primary care').type('{enter}');
        cy.wait(5000);
        cy.title().should('eq', ''); 
    })
        it ('should search for the primary care aong with pin code and verify title',() =>{
        cy.xpath("//input[@id='mat-input-0']").type('primary care').type('{enter}');
        cy.viewport('macbook-11');
        cy.wait(5000)

        cy.xpath("//input[@id='mat-input-1']").type('19103');
        cy.wait(2000)
        cy.xpath("//input[@id='mat-input-1']").type('{downarrow}');
        cy.xpath("//input[@id='mat-input-1']").type('{downarrow}');
        cy.xpath("//input[@id='mat-input-1']").type('{enter}');
        cy.wait(2000)
        cy.title().should('eq', ''); 
        })
    it ('should search for the primary care ,pincode and infection reason and verify title',() =>{
        cy.xpath("//input[@id='mat-input-0']").type('primary care').type('{enter}');
        cy.wait(5000)
        cy.xpath("//input[@id='mat-input-1']").type('19103');
        cy.wait(2000)
        cy.xpath("//input[@id='mat-input-1']").type('{downarrow}');
        cy.xpath("//input[@id='mat-input-1']").type('{downarrow}');
        cy.xpath("//input[@id='mat-input-1']").type('{enter}');
        cy.wait(2000)
        cy.xpath("//input[@type='text']").type('infection')
        cy.wait(1000)
        cy.xpath("//input[@type='text']").type('{downarrow}');
        cy.xpath("//input[@type='text']").type('{enter}');
        cy.wait(2000)
        cy.title().should('eq', ''); 
    })
    it ('should click on the see all provider after search primay care pin code & infection and then verify title',() =>{
        cy.xpath("//input[@id='mat-input-0']").type('primary care').type('{enter}');
        cy.wait(5000)
        cy.xpath("//input[@id='mat-input-1']").type('19103');
        cy.wait(2000)
        cy.xpath("//input[@id='mat-input-1']").type('{downarrow}');
        cy.xpath("//input[@id='mat-input-1']").type('{downarrow}');
        cy.xpath("//input[@id='mat-input-1']").type('{enter}');
        cy.wait(2000)
        cy.xpath("//input[@type='text']").type('infection')
        cy.wait(1000)
        cy.xpath("//input[@type='text']").type('{downarrow}');
        cy.xpath("//input[@type='text']").type('{enter}');
        cy.wait(2000)
        cy.xpath("//span[@class='docasap-fw-sb']").click();
        cy.title().should('eq', '');
    })







})
