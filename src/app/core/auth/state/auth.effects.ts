import { inject, Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { UserAuthService } from '../services/user-login.service';
import { EffectsModule, Actions, createEffect, ofType } from '@ngrx/effects';
import { login } from './auth.actions';
import { tap, catchError, map, of, switchMap } from 'rxjs';
import { ILoginRequest, ILoginResponse } from '../models/auth.model';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';
@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private router: Router
  ) {}
  private api = inject(UserAuthService);
  // actions$ = inject(Actions);

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap((action) => {
          // console.log('Effect triggered:', action);
          localStorage.setItem(
            'user',
            JSON.stringify({
              email: action.email,
              token: action.token,
              userId: action.userId,
            })
          );
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap((action) => {
          localStorage.removeItem('user');
          this.router.navigateByUrl('/login');
        })
      ),
    { dispatch: false }
  );
}
