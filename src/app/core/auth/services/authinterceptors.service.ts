import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, flatMap, Observable, switchMap } from 'rxjs';
import { UserAuthService } from './user-login.service';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../state/auth.reducers';
import { token } from '../state/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthinterceptorsService implements HttpInterceptor {
  constructor(private store: Store<AuthState>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(token).pipe(
      first(),
      switchMap((token) => {
        const authReq = !!token
          ? req.clone({
              setHeaders: { Authorization: 'Bearer ' + token },
            })
          : req;
        return next.handle(authReq);
      })
    );
  }
}
// const userString = localStorage.getItem('user');

// console.log("userString from interceptor: ", userString)
// if (userString) {
//   const token = JSON.parse(userString).token;
// console.log("token from interceptor: ", token)
// const authReq = req.clone({
//   headers: req.headers.set('Authorization', `Bearer ${token}`),
//   body: req.body,
// });

//   return next.handle(authReq);
// }

// return next.handle(req);
