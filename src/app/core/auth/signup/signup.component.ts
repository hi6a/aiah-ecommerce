import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../services/user-signup.service';
import { Router } from '@angular/router';
import { iSignUpResponse } from '../models/auth.model';
import { Store } from '@ngrx/store';
import * as AuthActions from '../state/auth.actions';
import { AuthState } from '../state/auth.reducers';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: SignupService,
    private router: Router,
    private store: Store<AuthState>
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form submitted', this.signupForm.value);

      this.auth
        .signup(this.signupForm.value)
        .subscribe((res: iSignUpResponse) => {
          console.log('Sign Up Response: ', res);
        });
    } else {
      console.log('form is invalid');
    }
  }
  //     this.store.dispatch(AuthActions.login({loginCreds: this.signupForm.value}));
  //     this.router.navigate(['/login']);
  //     })
  //   } else {
  //     console.log('Form is invalid');
  //     Object.keys(this.signupForm.controls).forEach(controlName => {
  //       this.signupForm.controls[controlName].markAsTouched();
  //       this.signupForm.controls[controlName].markAsDirty();
  //     });
  //   }
  // }

  get firstName() {
    return this.signupForm.get('firstName');
  }

  get lastName() {
    return this.signupForm.get('lastName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }
}
