import { Component, OnInit } from '@angular/core';
import { Product } from '../../products.model';
import { ProductsApiService } from '../../services/products-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  productList: Product[] = [];
  error: string | null = null;
  constructor(private pService: ProductsApiService){}
  
  ngOnInit(): void {
      this.pService.getAllProducts().subscribe({
        next: (products: Product[]) => {
          this.productList = products;
          console.log(this.productList);
        },
          error: (err: any) => {
          this.error = 'Failed to load products';
          
        }
      })
  }

}
