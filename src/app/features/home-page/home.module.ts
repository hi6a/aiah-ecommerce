import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { CoverComponent } from './components/cover/cover.component';
import { JustLandedProductsComponent } from './components/just-landed-products/just-landed-products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SaleProductsComponent } from './components/sale-products/sale-products.component';

@NgModule({
  declarations: [
    HomeComponent,
    CoverComponent,
    JustLandedProductsComponent,
    CategoriesComponent,
    SaleProductsComponent,
  ],
  imports: [CommonModule, SharedModule, MatGridListModule],
})
export class HomeModule {}
