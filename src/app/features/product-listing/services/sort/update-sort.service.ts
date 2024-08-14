import { Injectable } from '@angular/core';
import { SortService } from './sort.service';
import { Product } from '../../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateSortService {

  constructor(private sortService: SortService) { }

  sort(value: string,  products:Product[]):void{
    switch (value) {
      case 'Ascending':
        this.sortService.sortAlph(products,'asc');
      break;

      case 'Descending':
        this.sortService.sortAlph(products,'desc');
        break;

      case 'Price Ascending':
        this.sortService.sortPrice(products,'asc');
        break;

      case 'Price Descending':
        this.sortService.sortPrice(products,'desc');
        break;

      case 'Rate Ascending':
        this.sortService.sortRating(products,'asc');
        break;

      case 'Rate Descending':
        this.sortService.sortRating(products,'desc');
        break;
    
      default:
    }
  }
}
