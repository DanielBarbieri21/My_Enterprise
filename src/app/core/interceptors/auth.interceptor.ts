import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoggerService } from '../services/logger.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private authService = inject(AuthService);
  private router = inject(Router);
  private logger = inject(LoggerService);

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();

    // Clone request and add authorization header if token exists
    let clonedRequest = req;
    if (token) {
      clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle 401 Unauthorized - redirect to login
        if (error.status === 401) {
          this.logger.warn('Unauthorized request - redirecting to login');
          this.authService.logout();
          this.router.navigate(['/auth/login']);
        }

        // Handle 403 Forbidden
        if (error.status === 403) {
          this.logger.warn('Forbidden request');
        }

        // Log other errors
        if (error.status >= 500) {
          this.logger.error('Server error', error);
        }

        return throwError(() => error);
      })
    );
  }
}

