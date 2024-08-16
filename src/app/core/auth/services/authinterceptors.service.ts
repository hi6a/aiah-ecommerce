import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthinterceptorsService implements HttpInterceptor {
  constructor(private token: UserAuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userString = localStorage.getItem('user');

    // console.log("userString from interceptor: ", userString)
    if (userString) {
      const token = JSON.parse(userString).token;
      // console.log("token from interceptor: ", token)
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
        body: req.body,
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
