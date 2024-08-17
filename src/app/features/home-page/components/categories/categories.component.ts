import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image: string;
}
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  tiles: Tile[] = [
    {
      text: `Men's Clothing`,
      cols: 3,
      rows: 1,
      color: 'lightblue',
      image: '../../../../../assets/mens-clothing.jpg',
    },
    {
      text: 'Electronics',
      cols: 1,
      rows: 2,
      color: 'lightgreen',
      image: '../../../../../assets/electronics.jpg',
    },
    {
      text: 'Jewelery',
      cols: 1,
      rows: 1,
      color: 'lightpink',
      image: '../../../../../assets/jewelery.jpg',
    },
    {
      text: `Women's Clothing`,
      cols: 2,
      rows: 1,
      color: '#DDBDF1',
      image: '../../../../../assets/womens-clothing.jpg',
    },
  ];
}
