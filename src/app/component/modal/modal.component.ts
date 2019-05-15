import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() openEvent: Subject<any>;
  @Input() header: TemplateRef<any>;
  @Input() body: TemplateRef<any>;
  @Input() footer: TemplateRef<any>;
  @Input() modalId: string;

  constructor() {
  }

  ngOnInit() {
    this.openEvent.subscribe(() => {
      document.getElementById(this.modalId).style.display = 'block';
    });
  }

  closeModal() {
    document.getElementById(this.modalId).style.display = 'none';
  }

}
