import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { Product } from '../models/product.model';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products list', (done) => {
    service.list().subscribe({
      next: (products) => {
        expect(Array.isArray(products)).toBe(true);
        done();
      },
    });
  });

  it('should create a product', (done) => {
    const newProduct: Partial<Product> = {
      name: 'Test Product',
      description: 'Test Description',
      price: 99.99,
      category: 'Test',
      stock: 10,
    };

    service.create(newProduct).subscribe({
      next: (product) => {
        expect(product.id).toBeTruthy();
        expect(product.name).toBe(newProduct.name);
        done();
      },
    });
  });

  it('should get a product by id', (done) => {
    service.list().subscribe({
      next: (products) => {
        if (products.length > 0) {
          const firstProduct = products[0];
          service.get(firstProduct.id).subscribe({
            next: (product) => {
              expect(product.id).toBe(firstProduct.id);
              done();
            },
          });
        } else {
          done();
        }
      },
    });
  });
});
