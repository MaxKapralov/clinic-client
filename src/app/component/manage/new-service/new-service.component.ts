import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from '../../../model/service';
import { ModalComponent } from '../../modal/modal.component';
import { Subject } from 'rxjs';
import { ServiceProxyService } from '../../../proxy/service-proxy.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent implements OnInit {
  @Output() updateEntities: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('modal') modal: ModalComponent;
  openSubject: Subject<void> = new Subject<void>();
  serviceForm: FormGroup;

  constructor(private builder: FormBuilder, private servicesProxy: ServiceProxyService) {
    this.serviceForm = builder.group({
      name: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  open() {
    this.openSubject.next();
  }

  addService() {
    const service: Service = {
      name: this.serviceForm.controls['name'].value
    };
    this.servicesProxy.addService(service).subscribe(() => {
      this.modal.closeModal();
      this.updateEntities.emit();
      this.serviceForm.reset();
    });
  }

}
