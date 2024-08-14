import { Component, Input } from '@angular/core';
import { logout } from '../../auth/state/auth.actions';
import { AuthState } from '../../auth/state/auth.reducers';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(private store: Store<AuthState>){}

//  searchValue='';

  onLogout() {

    this.store.dispatch(logout());

}
}
