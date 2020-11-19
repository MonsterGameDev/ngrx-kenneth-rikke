import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { createProductsReducer } from './+state/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './+state/products.effects';

@NgModule({
  declarations: [
    CreateProductComponent,
    ProductsHomeComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', createProductsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
})
export class ProductsModule {}
