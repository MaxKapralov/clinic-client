import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../../../model/doctor';
import { Subject } from 'rxjs';
import { DoctorProxyService } from '../../../proxy/doctor-proxy.service';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.css']
})
export class NewDoctorComponent implements OnInit {
  @Output() updateEntities: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('modal') modal: ModalComponent;
  openSubject: Subject<void> = new Subject<void>();
  doctorForm: FormGroup;

  constructor(private builder: FormBuilder, private doctorProxy: DoctorProxyService) {
    this.doctorForm = builder.group({
      name: [null, Validators.required],
      surname: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  open() {
    this.openSubject.next();
  }

  addDoctor() {
    const newDoctor: Doctor = {
      name: this.doctorForm.controls['name'].value,
      surname: this.doctorForm.controls['surname'].value
    };
    this.doctorProxy.addDoctor(newDoctor).subscribe(() => {
      this.modal.closeModal();
      this.updateEntities.emit();
      this.doctorForm.reset();
    });
  }
}
