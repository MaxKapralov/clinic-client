import { Subject } from 'rxjs';

export class StylesChangerService {

  classes: any = {
    textClass: 'default-theme-text',
    dialogClass: 'default-theme-dialog'
  };
  private changeStyle: Subject<void> = new Subject<void>();
  public changeStyleEvent = this.changeStyle.asObservable();

  constructor() {
  }

  changeStyleTo(styles: {}) {
    Object.keys(styles).forEach(key => this.classes[key] = styles[key]);
    this.changeStyle.next();
  }
}
