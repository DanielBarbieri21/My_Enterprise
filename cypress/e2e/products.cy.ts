describe('Products Management', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should display products list', () => {
    cy.visit('/products');
    cy.contains('Products').should('be.visible');
    cy.get('table').should('be.visible');
  });

  it('should navigate to create product form', () => {
    cy.visit('/products');
    cy.get('a:contains("Add Product")').click();
    cy.url().should('include', '/products/new');
    cy.contains('Create Product').should('be.visible');
  });

  it('should create a new product', () => {
    cy.visit('/products/new');
    cy.get('input[formControlName="name"]').type('Test Product');
    cy.get('textarea[formControlName="description"]').type('Test Description');
    cy.get('input[formControlName="price"]').type('99.99');
    cy.get('input[formControlName="stock"]').type('50');
    cy.get('mat-select[formControlName="category"]').click();
    cy.get('mat-option').first().click();
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/products');
    cy.contains('Test Product').should('be.visible');
  });

  it('should show validation errors in product form', () => {
    cy.visit('/products/new');
    cy.get('button[type="submit"]').click();
    cy.contains('Name is required').should('be.visible');
    cy.contains('Description is required').should('be.visible');
  });

  it('should delete a product', () => {
    cy.visit('/products');
    cy.get('table').should('be.visible');
    // Assuming there are products in the list
    cy.get('button[aria-label*="Delete"]').first().click();
    cy.on('window:confirm', () => true);
    // Product should be removed from the list
  });
});

