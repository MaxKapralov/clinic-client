import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as utils from '../../../Utils';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {

  @Input() parentForm: FormGroup;
  @Input() placeholder: string;
  @Input() controlName: string;
  @Input() minDate: Date;
  utils = utils;

  constructor() {
  }

}
