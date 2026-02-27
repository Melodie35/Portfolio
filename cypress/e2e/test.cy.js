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
        cy.getBySel('navlink-name').should('be.visible')
        cy.getBySel('navlink-home').should('be.visible')
        cy.getBySel('navlink-about').should('be.visible')
        cy.getBySel('navlink-portfolio').should('be.visible')
        cy.getBySel('navlink-contact').should('be.visible')
        cy.getBySel('hero-h1').should('be.visible')
        cy.getBySel('hero-h2').should('be.visible')
    })

    it('gets the sections', () => {
        cy.getBySel('container-about').should('be.visible')
        cy.getBySel('container-skills').should('be.visible')
        cy.getBySel('container-portfolio').should('be.visible')
        cy.getBySel('container-contact').should('be.visible')
    })

})
