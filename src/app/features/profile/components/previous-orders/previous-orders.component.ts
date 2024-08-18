import { Component, OnInit } from '@angular/core';
import { IUserCartLog } from '../../../cart/models/userCartLog.model';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { PreviousOrderDetailsComponent } from '../previous-order-details/previous-order-details.component';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.component.html',
  styleUrl: './previous-orders.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatDivider,
    RouterModule,
    PreviousOrderDetailsComponent,
  ],
})
export class PreviousOrdersComponent implements OnInit {
  previousItems!: IUserCartLog[];
  currentUser!: number;

  constructor(private profile: ProfileService) {}
  ngOnInit(): void {
    this.currentUser = this.profile.getCurrentUser();
    this.previousItems = this.profile.getPreviousItems(this.currentUser);
  }
}
