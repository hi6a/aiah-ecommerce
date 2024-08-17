import { Component, Input } from '@angular/core';
import { Product } from '../../../features/product-listing/models/products.model';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrl: './view-card.component.scss',
})
export class ViewCardComponent {
  @Input() productData!: Product;
}
