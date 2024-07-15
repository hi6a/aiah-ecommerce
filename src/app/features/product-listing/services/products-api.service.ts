import { Injectable } from '@angular/core';
import { Product } from '../products.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http:HttpClient) { }
  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('https://fakestoreapi.com/products');

  }

}
