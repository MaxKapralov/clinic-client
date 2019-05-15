import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService, Roles } from '../../auth/auth.service';

export enum Themes {
  BLUE = 'blue-theme',
  YELLOW_BLACK = 'yellow-theme',
  BLACK_YELLOW = 'black-yellow-theme',
  BLAKC_WHITE = 'black-white-theme'
}

export enum Fonts {
  SMALL = 'font-size-small',
  MEDIUM = 'font-size-medium',
  BIG = 'font-size-big'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Roles = Roles;
  Themes = Themes;
  Fonts = Fonts;
  @Output() styleChange: EventEmitter<Themes> = new EventEmitter();
  @Output() fontSizeChange: EventEmitter<Fonts> = new EventEmitter();

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

  changeStyle(style: Themes) {
    this.styleChange.emit(style);
  }

  changeFontSize(f: Fonts) {
    this.fontSizeChange.emit(f);
  }

}
