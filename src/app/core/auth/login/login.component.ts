import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../services/user-login.service';
import { ILoginRequest, ILoginResponse } from '../models/auth.model';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../state/auth.actions';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthState } from '../state/auth.reducers';
import { tap, noop } from 'rxjs';
import { GenerateUserIdService } from '../services/generate-user-id.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: UserAuthService,
    private router: Router,
    private store: Store<AuthState>,
    private generateID: GenerateUserIdService
  ) {
    // this.user$ = this.store.select(selectUser);
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    const val: ILoginRequest = this.loginForm.value;
    console.log(val);
    this.auth
      .login(val)
      .pipe(
        tap((user) => {
          this.store.dispatch(
            login({
              email: val.username,
              token: user.Login.AccessToken,
              userId: this.generateID.stringToHex(val.username),
            })
          );
          this.router.navigate(['']);
        }),
        catchError((err) => {
          console.error('Login error:', err);
          alert('Login Failed');
          return throwError(err); // Ensure the error is propagated if necessary
        })
      )
      .subscribe({
        error: (err) => console.error('Subscription error:', err),
      });
  }
}
