import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private baseUrl = `${environment.apiUrl}/products`;

  // Mock data for development
  private mockProducts: Product[] = [
    {
      id: '1',
      name: 'Laptop Pro',
      description: 'High-performance laptop for professionals',
      price: 1299.99,
      category: 'Electronics',
      stock: 50,
    },
    {
      id: '2',
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse',
      price: 29.99,
      category: 'Accessories',
      stock: 200,
    },
    {
      id: '3',
      name: 'Mechanical Keyboard',
      description: 'RGB mechanical keyboard',
      price: 149.99,
      category: 'Accessories',
      stock: 100,
    },
  ];

  constructor(private http: HttpClient) {}

  list(): Observable<Product[]> {
    // Mock implementation - replace with actual API call
    return of([...this.mockProducts]).pipe(delay(500));
    // return this.http.get<Product[]>(this.baseUrl);
  }

  get(id: string): Observable<Product> {
    // Mock implementation
    const product = this.mockProducts.find((p) => p.id === id);
    if (product) {
      return of({ ...product }).pipe(delay(300));
    }
    throw new Error('Product not found');
    // return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  create(payload: Partial<Product>): Observable<Product> {
    // Mock implementation
    const newProduct: Product = {
      id: Date.now().toString(),
      name: payload.name || '',
      description: payload.description || '',
      price: payload.price || 0,
      category: payload.category || '',
      stock: payload.stock || 0,
      createdAt: new Date().toISOString(),
    };
    this.mockProducts.push(newProduct);
    return of(newProduct).pipe(delay(500));
    // return this.http.post<Product>(this.baseUrl, payload);
  }

  update(id: string, payload: Partial<Product>): Observable<Product> {
    // Mock implementation
    const index = this.mockProducts.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.mockProducts[index] = { ...this.mockProducts[index], ...payload, updatedAt: new Date().toISOString() };
      return of({ ...this.mockProducts[index] }).pipe(delay(500));
    }
    throw new Error('Product not found');
    // return this.http.put<Product>(`${this.baseUrl}/${id}`, payload);
  }

  delete(id: string): Observable<void> {
    // Mock implementation
    const index = this.mockProducts.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.mockProducts.splice(index, 1);
      return of(undefined).pipe(delay(300));
    }
    throw new Error('Product not found');
    // return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

