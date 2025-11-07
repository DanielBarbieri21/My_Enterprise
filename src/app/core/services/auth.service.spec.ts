import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    // Clear localStorage before each test
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return null token initially', () => {
    expect(service.getToken()).toBeNull();
  });

  it('should set and get token', () => {
    const token = 'test_token';
    service.setToken(token);
    expect(service.getToken()).toBe(token);
  });

  it('should return false for isAuthenticated when no token', () => {
    expect(service.isAuthenticated()).toBe(false);
  });

  it('should return true for isAuthenticated when token exists', () => {
    service.setToken('test_token');
    expect(service.isAuthenticated()).toBe(true);
  });

  it('should login successfully with valid credentials', (done) => {
    service.login('admin@example.com', 'admin123').subscribe({
      next: (response) => {
        expect(response.token).toBeTruthy();
        expect(response.user.email).toBe('admin@example.com');
        expect(service.isAuthenticated()).toBe(true);
        done();
      },
    });
  });

  it('should fail login with invalid credentials', (done) => {
    service.login('invalid@example.com', 'wrong').subscribe({
      error: (error: unknown) => {
        const errorObj = error instanceof Error ? error : new Error(String(error));
        expect(errorObj.message).toBe('Credenciais inválidas');
        expect(service.isAuthenticated()).toBe(false);
        done();
      },
    });
  });

  it('should logout and clear token', () => {
    service.setToken('test_token');
    service.logout();
    expect(service.getToken()).toBeNull();
    expect(service.isAuthenticated()).toBe(false);
    expect(service.currentUser()).toBeNull();
  });
});
