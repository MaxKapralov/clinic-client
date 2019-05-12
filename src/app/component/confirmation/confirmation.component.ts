import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import * as utils from '../../Utils';
import { Appointment } from '../../model/appointment';
import { Subject } from 'rxjs';
import { AppointmentProxyService } from '../../proxy/appointment-proxy.service';
import { AuthService } from '../../auth/auth.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  utils = utils;
  openSubject: Subject<void> = new Subject<void>();
  data: Appointment;

  @ViewChild('modal') modal: ModalComponent;
  @Output() onAccept: EventEmitter<void> = new EventEmitter();
  constructor(private appointmentProxyService: AppointmentProxyService, private authService: AuthService) {
  }

  ngOnInit() {
  }

  open(appointment: Appointment) {
    this.data = appointment;
    this.openSubject.next();
  }
  acceptReservation() {
    this.appointmentProxyService.reserve(this.data.id, this.authService.getUsername()).subscribe(() => {
      this.modal.closeModal();
      this.onAccept.emit();
    });
  }
}
