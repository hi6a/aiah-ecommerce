import { Component, Input } from '@angular/core';
import { logout } from '../../auth/state/auth.actions';
import { AuthState } from '../../auth/state/auth.reducers';
import { Store } from '@ngrx/store';
import { CartService } from '../../../features/cart/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(
    private store: Store<AuthState>,
    public cart: CartService
  ) {}

  //  searchValue='';

  onLogout() {
    this.store.dispatch(logout());
  }
}
