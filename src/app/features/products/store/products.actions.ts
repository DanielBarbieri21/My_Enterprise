import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const loadProducts = createAction('[Products] Load');
export const loadProductsSuccess = createAction(
  '[Products] Load Success',
  props<{ products: Product[] }>()
);
export const loadProductsFail = createAction('[Products] Load Fail', props<{ error: unknown }>());

export const createProduct = createAction(
  '[Products] Create',
  props<{ product: Partial<Product> }>()
);
export const createProductSuccess = createAction(
  '[Products] Create Success',
  props<{ product: Product }>()
);
export const createProductFail = createAction(
  '[Products] Create Fail',
  props<{ error: unknown }>()
);

export const updateProduct = createAction(
  '[Products] Update',
  props<{ id: string; product: Partial<Product> }>()
);
export const updateProductSuccess = createAction(
  '[Products] Update Success',
  props<{ product: Product }>()
);
export const updateProductFail = createAction(
  '[Products] Update Fail',
  props<{ error: unknown }>()
);

export const deleteProduct = createAction('[Products] Delete', props<{ id: string }>());
export const deleteProductSuccess = createAction(
  '[Products] Delete Success',
  props<{ id: string }>()
);
export const deleteProductFail = createAction(
  '[Products] Delete Fail',
  props<{ error: unknown }>()
);
