import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open the Eurostar webpage', () => {
    cy.visit('https://www.eurostar.com/')
})
And('Click Trains', () => {
    cy.get('#consent_prompt_accept_all_cookies').click()
    cy.get('#tab-0').click()
})
And('Click Return Enter from as london st pancras', () => {
    cy.get('#journey-type-1').check()
    cy.get('input[name="from"]').type('london st pancras{downarrow}{enter}')
})
And('Enter to Paris Gare Du Nord', () => {
    cy.get('input[name="to"]').type('Paris Gare Du Nord{downarrow}{enter}')
})
And('Select two dates from and to', () => {
    cy.get('[name="calendar"]').click().then(($dates) => {
        cy.xpath('//*[@datetime="2023-07-30"]').click()
        cy.xpath('//*[@datetime="2023-08-07"]').click()
        cy.get('[class="sc-7w9xhz-0 elMkGB"]').click()
        }) 
})
And('Select passangers 2 adults', () => {
    cy.get('[name="passenger-type"]').click()
    cy.get('[class="nlcp7r-0 deDXRl addAdult"]').click()
    cy.get('[class="sc-7w9xhz-0 elMkGB"]').click()
})
When('Click on search button', () => {
    cy.get('[class="sc-7w9xhz-0 fpliFR SearchButton"]').click()
    cy.wait(10000)
})
And('Select Outbound price', () => {
    cy.xpath('//*[@data-testid="outbound-journey-search-results"]//*[@data-testid="journey-search-result"][1]').click().then(($dates) => {
    cy.xpath('//*[@id="9008-2023-07-30-08:01-11:20"]//*[@class="sc-173ffic-4 iqEDNA"][3]').click()
    cy.xpath('//*[@data-testid="journey-search-result"][1]//*[@data-testid="journey-fare-types"]//*[@data-testid="select-button"]').click()
    })
})
And('Select Return price', () => {
    cy.xpath('//*[@data-testid="outbound-journey-search-results"]//*[@data-testid="journey-search-result"][1]').click().then(($dates) => {
    cy.xpath('//*[@id="9007-2023-08-07-07:13-08:30"]//*[@class="sc-173ffic-4 iqEDNA"][3]').click()
    cy.xpath('//*[@id="9007-2023-08-07-07:13-08:30"]//*[@data-testid="journey-fare-types"]//*[@data-testid="select-button"]').click()
    })
})
And('Click on continue', () => {
    cy.get('[name="continueButton"]').click()
})

And('Click on check out as a guest', () => {
    cy.xpath('//*[text()="Check out as a guest"]').click()
})

Then('Verify the Screenshot of the Check Out Screen', () => {
    cy.screenshot('Eurostar')
})




