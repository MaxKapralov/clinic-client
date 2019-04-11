import { StylesChangerService } from '../../service/styles-changer.service';
import { OnInit } from '@angular/core';

export abstract class ViewChangerComponent implements OnInit {
  classes: any = {};
  constructor(private stylesChangerService: StylesChangerService) {
    stylesChangerService.changeStyleEvent.subscribe(() => this.classes = stylesChangerService.classes);
  }
  ngOnInit() {
    this.initClasses();
  }
  initClasses() {
    this.classes = this.stylesChangerService.classes;
  }
}
