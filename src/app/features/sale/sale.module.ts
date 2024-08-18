import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSaleComponent } from './components/main-sale/main-sale.component';
import { MatDividerModule } from '@angular/material/divider';

import { ViewCardComponent } from '../../shared/components/view-card/view-card.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatDividerModule, ViewCardComponent],
})
export class SaleModule {
  constructor() {
    console.log('loaded module sale');
  }
}
