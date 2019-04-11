import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { StylesChangerService } from '../../service/styles-changer.service';
import { ViewChangerComponent } from '../view-changer/view-changer.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends ViewChangerComponent {
  loginForm: FormGroup;

  constructor(private builder: FormBuilder, private authService: AuthService, private router: Router,
              stylesChangerService: StylesChangerService) {
    super(stylesChangerService);
    this.loginForm = builder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login() {
    const login = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.authService.auth(login, password);
  }
}
