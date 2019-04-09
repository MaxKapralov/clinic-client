import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  fonts: String[] = ['A', 'A+', 'A++'];
  contrasts: String[] = ['First', 'Second', 'Third'];
  languages: String[] = ['PL', 'EN'];
  @Output() openSidenav = new EventEmitter<any>();
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  openMenu() {
    this.openSidenav.emit();
  }
  logout() {
    this.authService.logout();
  }
}
