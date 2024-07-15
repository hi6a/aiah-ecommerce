import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ProductCardComponent,
    ProductsComponent

  ]
})
export class ProductListingModule { }
