// Vérification éléments de base
describe('basic elements', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('should have a header', () => {
        cy.get('header').should('exist')
    })

    it('should have a nav', () => {
        cy.get('nav').should('exist')
    })

    it('should have a main', () => {
        cy.get('main').should('exist')
    })

    it('should have a footer', () => {
        cy.get('footer').should('exist')
    })
})

//Vérification SEO
describe('SEO', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('should have a title tag', () => {
        cy.title().should('not.be.empty')
    })

    it('should have a meta description', () => {
        cy.get('meta[name="description"]')
            .should('exist')
            .and('have.attr', 'content')
            .and('not.be.empty')
    })

    it('should have a unique h1', () => {
        cy.get('h1').should('have.length', 1)
    })

    it('should have alt attributes on all images', () => {
        cy.get('img').each(($img) => {
            cy.wrap($img).should('have.attr', 'alt')
        })
    })

    it('should have a canonical link', () => {
        cy.get('link[rel="canonical"]').should('exist')
    })
})