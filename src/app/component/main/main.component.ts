import { Component } from '@angular/core';
import { ViewChangerComponent } from '../view-changer/view-changer.component';
import { StylesChangerService } from '../../service/styles-changer.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends ViewChangerComponent {

  constructor(stylesChangerService: StylesChangerService) {
    super(stylesChangerService);
  }

}
