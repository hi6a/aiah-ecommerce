import { Component } from '@angular/core';
import { logout } from '../../auth/state/auth.actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  store: any;


  onLogout() {

    this.store.dispatch(logout());

}
}
