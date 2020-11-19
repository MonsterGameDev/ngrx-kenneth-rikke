import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { ProductState } from './product.interface';

export const selectProductState = createFeatureSelector<ProductState>(
  'products'
);

export const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);
