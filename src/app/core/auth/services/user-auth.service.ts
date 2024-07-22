import { Injectable } from '@angular/core';
import { environment } from '../../../../env/env.dev';
import { HttpClient } from '@angular/common/http';
import { iSignInRequest, iSignInResponse } from '../user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http: HttpClient) { }



  signin(req: iSignInRequest): Observable<iSignInResponse> {
    const loginURL = `${environment.authURL}User/Login()`;
    return this.http.post<iSignInResponse>(loginURL, req)
  }
  
  isLoggedIn(){
    return localStorage.getItem('token')!=null;
  }

  getToken(){
    return localStorage.getItem('token')||'';
  }


}
