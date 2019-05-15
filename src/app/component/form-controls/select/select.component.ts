import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as _ from 'lodash';

export enum OptionLabelType {
  NAME, FULLNAME
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() controlName: string;
  @Input() valuePath: string;
  @Input() optionLabelType: OptionLabelType;
  @Input() options: any[];
  @Input() label: string;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  getOptionLabel(option: any): string {
    switch (this.optionLabelType) {
      case OptionLabelType.FULLNAME:
        return `${_.get(option, 'name')} ${_.get(option, 'surname')}`;
      case OptionLabelType.NAME:
        return _.get(option, 'name');
    }
  }

  getValueByPath(option: any): string {
    return _.get(option, this.valuePath);
  }

  selectChange(event) {
    this.change.emit(event);
  }
}
