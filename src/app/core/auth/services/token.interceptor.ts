import { HttpClient, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { UserAuthService } from './user-login.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from '../state/auth.actions';
import { AuthState } from '../state/auth.reducers';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // let refreshService = inject(UserAuthService);
  const router = inject(Router);
  const store = inject(Store<AuthState>);
  const userString = localStorage.getItem('user');
  if (!userString) {
    return next(req);
  }
  const user = JSON.parse(userString);
  const token = user.token;
  if (token) {
    const decodedToken = jwtDecode(token);
    const isExpired =
      decodedToken && decodedToken.exp
        ? decodedToken.exp * 1000 < Date.now()
        : false;
    if (isExpired) {
      // refreshService.refresh(token).subscribe((newToken: string) => {
      //   localStorage.setItem(
      //     'user',
      //     JSON.stringify({ ...user, token: newToken })
      //   );
      //   let newReq = req.clone({
      //     setHeaders: { Authorization: 'Bearer ' + newToken },
      //   });
      //   return next(newReq);
      // });
      // localStorage.removeItem('user');
      // router.navigateByUrl('/login');

      store.dispatch(logout());
    } else {
      alert(`Token not expired`);
    }
  } else {
    alert(`Token not found`);
    localStorage.removeItem('user');
    router.navigateByUrl('/login');
  }
  return next(req);
};
