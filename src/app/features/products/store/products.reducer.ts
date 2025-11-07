import { createReducer, on } from '@ngrx/store';
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
import { Product } from '../models/product.model';

export interface ProductsState {
  list: Product[];
  loading: boolean;
  error: unknown | null;
}

export const initialState: ProductsState = {
  list: [],
  loading: false,
  error: null,
};

export const productsReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({ ...state, loading: true, error: null })),
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    list: products,
    error: null,
  })),
  on(loadProductsFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(createProduct, (state) => ({ ...state, loading: true, error: null })),
  on(createProductSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    list: [...state.list, product],
    error: null,
  })),
  on(createProductFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(updateProduct, (state) => ({ ...state, loading: true, error: null })),
  on(updateProductSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    list: state.list.map((p) => (p.id === product.id ? product : p)),
    error: null,
  })),
  on(updateProductFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(deleteProduct, (state) => ({ ...state, loading: true, error: null })),
  on(deleteProductSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    list: state.list.filter((p) => p.id !== id),
    error: null,
  })),
  on(deleteProductFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
