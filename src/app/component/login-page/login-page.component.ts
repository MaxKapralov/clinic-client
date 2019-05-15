import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private builder: FormBuilder, private authService: AuthService) {
    this.loginForm = builder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;
    this.authService.auth(username, password);
  }
}
