import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';
import { iSignUpResponse } from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{
 signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth:SignupService,
              private router: Router
  ){}

  ngOnInit(): void {
     this.signupForm = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['',[Validators.required]],
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.minLength(8)]]
      });
  }


  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form submitted', this.signupForm.value);
      this.auth.signup(this.signupForm.value).subscribe((res: iSignUpResponse) => {
      console.log('Sign Up Response: ', res);
      this.router.navigate(['/login']);
      })
    } else {
      console.log('Form is invalid');
    }
  }

}
