import { Component, OnInit } from '@angular/core';
import { AuthService, Roles } from '../../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Roles = Roles;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
