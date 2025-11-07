describe('Dashboard', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should display dashboard after login', () => {
    cy.visit('/dashboard');
    cy.contains('Dashboard').should('be.visible');
    cy.contains('Welcome to My Enterprise App').should('be.visible');
  });

  it('should display total products count', () => {
    cy.visit('/dashboard');
    cy.contains('Total Products').should('be.visible');
    // The count should be visible
    cy.get('h2').contains(/\d+/).should('exist');
  });

  it('should navigate to products from dashboard', () => {
    cy.visit('/dashboard');
    cy.get('button:contains("Products")').click();
    cy.url().should('include', '/products');
  });

  it('should navigate to create product from quick actions', () => {
    cy.visit('/dashboard');
    cy.get('a:contains("Add Product")').click();
    cy.url().should('include', '/products/new');
  });
});

