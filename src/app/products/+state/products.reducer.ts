import { Action, createReducer, on } from '@ngrx/store';
import { Product, ProductState } from './product.interface';

import * as productsActions from './products.actions';

const reducer = createReducer(
  {} as ProductState,
  on(productsActions.productsLoadAction, (state) => {
    return {
      ...state,
      behaviors: {
        loading: true,
        error: null,
      },
    };
  }),
  on(productsActions.productsLoadSuccessAction, (state, action) => {
    return {
      ...state,
      products: action.products,
      behaviors: {
        ...state.behaviors,
        loading: false,
      },
    };
  }),
  on(productsActions.produtsLoadErrorActions, (state, action) => {
    return {
      ...state,
      behaviors: {
        loading: false,
        error: action.error,
      },
    };
  })
);

export function createProductsReducer(state: ProductState, action: Action) {
  return reducer(state, action);
}
