import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as productsActions from './../+state/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(productsActions.productsLoadAction());
  }
}
