import { Injectable } from '@angular/core';
import { ProductsApiService } from '../products/products-api.service';
import { CategoriesService } from './categories.service';
import { Product } from '../../models/products.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterByCategoryService {
  productList!: Product[];


  constructor(private pService: ProductsApiService,
    private cat: CategoriesService
){}

}