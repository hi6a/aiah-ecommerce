import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../services/user-auth.service';
import { iSignInResponse } from '../user.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: UserAuthService,
              private router: Router
  ){
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted', this.loginForm.value);
      this.auth.signin(this.loginForm.value).subscribe((res: iSignInResponse) => {
      localStorage.setItem('token', res.Login.AccessToken)
      this.router.navigate(['']);
      })
    } else {
      console.log('Form is invalid');
    }
  }


  }

