import { Injectable } from '@angular/core';
import { environment } from '../../../../../env/env.dev';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/products.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {


  constructor(private http:HttpClient) { }
  
  getAllProductsDesc(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiURL}products?sort=desc`);

  }

  
  sortAlph(products: Product[], order: 'asc' | 'desc'): void{
    if(order=='asc'){
      products.sort((a, b) => a.title.localeCompare(b.title));
    }
    else{
      products.sort((a, b) => b.title.localeCompare(a.title));
    }
  }


  sortPrice(products: Product[], order: 'asc' | 'desc'): void{
    if(order=='asc'){
      products.sort((a, b) => a.price - b.price);
    }
    else{
      products.sort((a, b) => b.price - a.price);
    }
  }

  
  sortRating(products: Product[], order: 'asc' | 'desc'): void{
    if(order=='asc'){
      products.sort((a, b) => a.rating.rate - b.rating.rate);
    }
    else{
      products.sort((a, b) => b.rating.rate - a.rating.rate);
    }
  }
}

