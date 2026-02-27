//Accès au website
describe('website connexion', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('loads skills.json', () => {
         cy.request({
            method: 'GET',
            url: '/data/skills.json'
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })   
    
    it('loads portfolio.json', () => {
         cy.request({
            method: 'GET',
            url: '/data/portfolio.json'
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('gets the home page', () => {
        cy.get('#home').should('be.visible')
        cy.getBySel('navlink-name').should('be.visible')
        cy.getBySel('navlink-home').should('be.visible')
        cy.getBySel('navlink-about').should('be.visible')
        cy.getBySel('navlink-skills').should('be.visible')
        cy.getBySel('navlink-portfolio').should('be.visible')
        cy.getBySel('navlink-contact').should('be.visible')
        cy.getBySel('hero-h1').should('be.visible')
        cy.getBySel('hero-h2').should('be.visible')
    })

    it('gets the sections', () => {
        cy.get('#about').should('exist')
        cy.get('#skills').should('exist')
        cy.get('#portfolio').should('exist')
        cy.get('#contact').should('exist')
    })

})

describe('link redirection', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('gets to about section via about link', () => {
        cy.getBySel('navlink-about').click()
        cy.url().should('include', '#about')
        cy.get('#about').should('be.visible')
    })

    it('gets to skills section via skills link', () => {
        cy.getBySel('navlink-skills').click()
        cy.url().should('include', '#skills')
        cy.get('#skills').should('be.visible')
    })

    it('gets to portfolio section via portfolio link', () => {
        cy.getBySel('navlink-portfolio').click()
        cy.url().should('include', '#portfolio')
        cy.get('#portfolio').should('be.visible')
    })

    it('gets to contact section via contact link', () => {
        cy.getBySel('navlink-contact').click()
        cy.url().should('include', '#contact')
        cy.get('#contact').should('be.visible')
    })

    it('gets to home section via home link', () => {
        cy.getBySel('navlink-contact').click()
        cy.url().should('include', '#contact')
        cy.get('#contact').should('be.visible')
        cy.getBySel('navlink-home').click()
        cy.url().should('include', '#home')
        cy.get('#home').should('be.visible')
    })

    it('gets to root section via name link', () => {
        cy.getBySel('navlink-contact').click()
        cy.url().should('include', '#contact')
        cy.get('#contact').should('be.visible')
        cy.getBySel('navlink-name').click()
        cy.url().should('include', '#')
        cy.get('#home').should('be.visible')
    })

})
