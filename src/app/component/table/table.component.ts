import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as _ from 'lodash';
import * as utils from '../../Utils';

export enum CellType {
  STRING,
  DAY,
  DAY_OF_WEEK,
  TIME,
  DATE,
  USER,
  BUTTON,
  USER_ADDRESS
}

export interface CellData {
  path?: string;
  type: CellType;
  buttonLabel?: string;
  disabled?: (a: any) => boolean;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  CellType = CellType;
  @Input() headers: string[];
  @Input() cellData: string[];
  @Input() data: any[];
  @Output() operationClick: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  getValueForCell(d: any, c: CellData): string {
    const value = _.get(d, c.path);
    switch (c.type) {
      case CellType.STRING:
        return value;
      case CellType.TIME:
        return utils.getTime(value);
      case CellType.DAY:
        return utils.translateDayToPolish(utils.getDayFromDate(value)) + ' ' + utils.formatDate(value);
      case CellType.USER:
        return value.name + ' ' + value.surname;
      case CellType.BUTTON:
        return c.buttonLabel;
      case CellType.DAY_OF_WEEK:
        return utils.translateDayToPolish(utils.getDayFromDate(value));
      case CellType.DATE:
        return utils.formatDate(value);
      case CellType.USER_ADDRESS:
        return d.city + ', ul.' + d.street;
    }
  }

  buttonClicked(data: any) {
    this.operationClick.emit(data);
  }
}
