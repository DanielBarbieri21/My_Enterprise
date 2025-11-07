describe('Authentication Flow', () => {
  beforeEach(() => {
    cy.visit('/auth/login');
  });

  it('should display login form', () => {
    cy.contains('Welcome Back').should('be.visible');
    cy.get('input[formControlName="email"]').should('be.visible');
    cy.get('input[formControlName="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should show validation errors for invalid inputs', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Email is required').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });

  it('should login successfully with valid credentials', () => {
    cy.login('admin@example.com', 'admin123');
    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
  });

  it('should show error for invalid credentials', () => {
    cy.get('input[formControlName="email"]').type('invalid@example.com');
    cy.get('input[formControlName="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid credentials').should('be.visible');
  });

  it('should logout successfully', () => {
    cy.login();
    cy.get('button:contains("Logout")').click();
    cy.url().should('include', '/auth/login');
  });
});

