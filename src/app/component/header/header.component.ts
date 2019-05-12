import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService, Roles } from '../../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Roles = Roles;
  @Output() styleChange: EventEmitter<any> = new EventEmitter();
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  changeStyle(style: string) {
    this.styleChange.emit(style);
  }

}
