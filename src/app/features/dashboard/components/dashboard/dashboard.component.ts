import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthService, User } from '../../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../state/app.reducer';
import { selectAllProducts } from '../../../../features/products/store/products.selectors';
import { loadProducts } from '../../../../features/products/store/products.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../../../../features/products/models/product.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  user$ = this.authService.currentUser;
  totalProducts$!: Observable<number>;
  lowStockProducts$!: Observable<number>;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {
    this.totalProducts$ = this.store.select(selectAllProducts).pipe(
      map((products: Product[]) => products.length)
    );
    this.lowStockProducts$ = this.store
      .select(selectAllProducts)
      .pipe(
        map((products: Product[]) => products.filter((p: Product) => p.stock < 20).length)
      );
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  logout(): void {
    this.authService.logout();
  }
}

