import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../service/products.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as productsActions from './products.actions';
import { of } from 'rxjs';

@Injectable()
export class ProductsEffects {
  constructor(
    private productsService: ProductsService,
    private actions$: Actions
  ) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productsActions.productsLoadAction),
      switchMap(() => {
        return this.productsService.getProducts().pipe(
          map((response) => {
            return productsActions.productsLoadSuccessAction({
              products: response,
            });
          }),
          catchError((error) => {
            return of(productsActions.produtsLoadErrorActions({ error }));
          })
        );
      })
    );
  });
}
