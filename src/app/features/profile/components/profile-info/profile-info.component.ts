import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.scss',
})
export class ProfileInfoComponent {
  currentUser!: number;
  userName!: string;
  email!: string;

  constructor(private profile: ProfileService) {
    this.currentUser = this.profile.getCurrentUser();
    this.userName = this.profile.getUsername();
    this.email = this.profile.getEmail();
  }
}
