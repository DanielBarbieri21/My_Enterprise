import { ActionReducerMap } from '@ngrx/store';
import { productsReducer, ProductsState } from '../features/products/store/products.reducer';

export interface AppState {
  products: ProductsState;
}

export const appReducer: ActionReducerMap<AppState> = {
  products: productsReducer,
};

