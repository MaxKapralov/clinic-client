import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { StylesChangerService } from '../../service/styles-changer.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  fonts: String[] = ['A', 'A+', 'A++'];
  contrasts: String[] = ['First', 'Second', 'Third'];
  languages: String[] = ['PL', 'EN'];

  constructor(private authService: AuthService, private stylesChangerService: StylesChangerService) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  change() {
    this.stylesChangerService.changeStyleTo({ textClass: 'red' });
  }
}
