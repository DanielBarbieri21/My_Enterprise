import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFail,
  createProduct,
  createProductSuccess,
  createProductFail,
  updateProduct,
  updateProductSuccess,
  updateProductFail,
  deleteProduct,
  deleteProductSuccess,
  deleteProductFail,
} from './products.actions';

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  private productsService = inject(ProductsService);

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        this.productsService.list().pipe(
          map((products) => loadProductsSuccess({ products })),
          catchError((error) => of(loadProductsFail({ error })))
        )
      )
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProduct),
      switchMap(({ product }) =>
        this.productsService.create(product).pipe(
          map((newProduct) => createProductSuccess({ product: newProduct })),
          catchError((error) => of(createProductFail({ error })))
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProduct),
      switchMap(({ id, product }) =>
        this.productsService.update(id, product).pipe(
          map((updatedProduct) => updateProductSuccess({ product: updatedProduct })),
          catchError((error) => of(updateProductFail({ error })))
        )
      )
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProduct),
      switchMap(({ id }) =>
        this.productsService.delete(id).pipe(
          map(() => deleteProductSuccess({ id })),
          catchError((error) => of(deleteProductFail({ error })))
        )
      )
    )
  );
}

