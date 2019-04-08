import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatSidenav } from '@angular/material';
import { AuthService, Roles } from '../auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  roles = Roles;

  constructor(public authService: AuthService, private dialog: MatDialog) {
  }

  openSidenav() {
    this.sidenav.toggle();
  }
}
