
describe('index page', () => {
  it('should have a valid title', () => {
    cy.visit('http://localhost:3000/')
    cy.title().should('not.be.empty');
  });
  it('should have a valid header', () => {
    cy.visit('http://localhost:3000/')
    cy.get('header h1').should('be.visible');
  });
  it('should have a valid main content', () => {
    cy.visit('http://localhost:3000/');
    cy.get('main').should('be.visible');
  });
  it('should have a valid aside navigation', () => {
    cy.visit('http://localhost:3000/')
    cy.get('aside nav a')
    .should('contain', 'home')
    .and('have.attr', 'href');
    cy.get('aside nav a').click();
    cy.url().should('eq', 'http://localhost:3000/')
  });
  it('hould have a valid footer', () => {
    cy.visit('http://localhost:3000/');
    cy.get('footer time').should('contain', '2024');
  });
})