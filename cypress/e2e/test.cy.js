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

//Redirection via les liens de la barre de navigation
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


//Vérification section skills
describe('skills section', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.getBySel('navlink-skills').click()
    })

    it('should have Mes compétences', () => {
        cy.get('#skills h2').should('have.text', "Mes compétences")
    })

    it('should display 6 cards', () => {
        cy.get('#skills .card-body').should('have.length', 6)
    })

    it('should display correct information in each card', () => {
        cy.request({
            method: 'GET',
            url: '/data/skills.json'
        }).then((response) => {
            const skills = response.body
            cy.get('#skills .card-body').each(($card, index) => {
                const skill = skills[index]
            
                cy.wrap($card).find('.card-title').should('have.text', skill.title)
                cy.wrap($card).find('.card-text').should('have.text', skill.text)
                })
        })
    })

})

//Vérification section portfolio
describe('portfolio section', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.getBySel('navlink-portfolio').click()
    })

    it('should have Mes projets', () => {
        cy.get('#portfolio h2').should('have.text', "Mes projets")
    })

    it('should display 6 cards', () => {
        cy.get('#portfolio .card-body').should('have.length', 3)
    })

    it('should display correct information in each card', () => {
        cy.request({
            method: 'GET',
            url: '/data/portfolio.json'
        }).then((response) => {
            const portfolio = response.body
            cy.get('#portfolio .card-body').each(($card, index) => {
                const portfo = portfolio[index]
            
                cy.wrap($card).find('.card-title').should('have.text', portfo.title)
                cy.wrap($card).find('.card-text').should('have.text', portfo.text)
                })
        })
    })
})

// //Vérification section contact
// describe('contact section', () => {

//     beforeEach(() => {
//         cy.visit('/')
//         cy.getBySel('navlink-contact').click()
//     })

//     it('should have Mes projets', () => {
//         cy.get('#portfolio h2').should('have.text', "Mes projets")
//     })
// })
