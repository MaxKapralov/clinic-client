import { Component, HostBinding, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AuthService, Roles } from '../auth/auth.service';
import { Fonts, Themes } from './header/header.component';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  roles = Roles;
  theme = Themes.BLUE;
  fontSize = Fonts.SMALL;
  @HostBinding('class') classes = `${this.theme} ${this.fontSize}`;

  constructor(public authService: AuthService) {
  }

  changeStyleTo(t: Themes) {
    this.theme = t;
    this.classes = `${this.theme} ${this.fontSize}`;
  }

  changeFontSizeTo(f: Fonts) {
    this.fontSize = f;
    this.classes = `${this.theme} ${this.fontSize}`;
  }
}
