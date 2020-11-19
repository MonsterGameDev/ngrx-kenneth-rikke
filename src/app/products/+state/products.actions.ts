import { createAction, props } from '@ngrx/store';
import { Product } from './product.interface';

export const productsInitializeAction = createAction('[Initialize Products]');

export const productsLoadAction = createAction('[Load Products]');

export const productsLoadSuccessAction = createAction(
  '[Products Load Success]',
  props<{ products: Product[] }>()
);

export const produtsLoadErrorActions = createAction(
  '[Products Load Actions]',
  props<{ error: any }>()
);
