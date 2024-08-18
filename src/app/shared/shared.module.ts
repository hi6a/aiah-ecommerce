import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCardComponent } from './components/view-card/view-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DiscountPipe } from './pipes/discount.pipe';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [],
})
export class SharedModule {}
