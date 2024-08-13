import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState } from './core/auth/state/auth.reducers';
import { Store } from '@ngrx/store';
import { logout } from './core/auth/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router,
    private store: Store<AuthState>) {

}
  title = 'final-project';
 
}
