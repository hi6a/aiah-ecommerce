import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../services/user-login.service';
import { ILoginRequest, ILoginResponse } from '../models/auth.model';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../state/auth.actions';
import { Observable } from 'rxjs';
import { AuthState } from '../state/auth.reducers';
import { tap,noop } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // isLoggedIn$!: Observable<boolean>;
  // user$!: Observable<{ email: string | null; token: string | null }>;

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: UserAuthService,
              private router: Router, private store: Store<AuthState>
  ){

    // this.user$ = this.store.select(selectUser);
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


  onSubmit(){
    const val: ILoginRequest = this.loginForm.value;
    console.log(val);
    this.auth.login(val)
        .pipe(
            tap(user => {
                this.store.dispatch(login({email: val.username,token: user.Login.AccessToken}));
                this.router.navigate(['/products']);

            })
        )          .subscribe(
            noop,
            () => alert('Login Failed')
        );
  }


  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     console.log('Form submitted', this.loginForm.value);
  //     const loginCreds: ILoginRequest = this.loginForm.value;
  //     this.store.dispatch(login({loginCreds}));

  // }
  // }






    // if (this.loginForm.valid) {
    //   console.log('Form submitted', this.loginForm.value);
    //   this.auth.login(this.loginForm.value).subscribe((res: iSignInResponse) => {
    //   localStorage.setItem('token', res.Login.AccessToken)
    //   this.router.navigate(['']);
    //   })
      
    // } else {
    //   console.log('Form is invalid');
    // }




  }

