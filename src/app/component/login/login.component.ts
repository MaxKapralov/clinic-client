import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private builder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = builder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    const login = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.authService.auth(login, password);
  }
}
