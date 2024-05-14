const LOGIN_PAGE = 'http://localhost:3000/login'
describe('login page', () => {
    it('should have a valid title', () => {
        cy.visit(LOGIN_PAGE)
        cy.title().should('not.be.empty').and('contain', 'login')
    })

    it('should have a valid login form', () => {
        cy.visit(LOGIN_PAGE)
        cy.get('form input[type=email]').should('have.attr', 'name')
        cy.get('form input[type=password]').should('have.attr', 'name')
        cy.get('form button[type=submit]').should('contain', 'iniciar sesion')
    })
})