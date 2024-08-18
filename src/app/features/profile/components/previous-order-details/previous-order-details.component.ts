import { Component } from '@angular/core';

@Component({
  selector: 'app-previous-order-details',
  standalone: true,
  imports: [],
  templateUrl: './previous-order-details.component.html',
  styleUrl: './previous-order-details.component.scss',
})
export class PreviousOrderDetailsComponent {
  constructor() {
    console.log('details logged');
  }
}
