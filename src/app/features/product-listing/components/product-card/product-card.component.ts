import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() src:string=''; 
  @Input() alt:string='';
  @Input() title:string='';
  @Input() price!:number;

}
