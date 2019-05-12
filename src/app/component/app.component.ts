import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AuthService, Roles } from '../auth/auth.service';

@Component({
  selector: 'app-root',
  host: {
    '[class.blue-theme]': '(theme === \'blue\' )',
    '[class.yellow-theme]': '( theme === \'yellow\' )'
  },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  roles = Roles;
  theme = 'blue';

  constructor(public authService: AuthService) {
  }

  changeStyleTo(str: string) {
    this.theme = str;
  }
}
