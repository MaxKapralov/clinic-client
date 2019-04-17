import { Component, OnInit } from '@angular/core';
import { ServiceProxyService } from '../../proxy/service-proxy.service';
import { Service } from '../../model/service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../../model/doctor';
import { Appointment } from '../../model/appointment';
import { AppointmentProxyService } from '../../proxy/appointment-proxy.service';
import * as utils from '../../Utils';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
// todo make group by day change html
  services: Service[];
  doctors: Doctor[];
  appointments: Appointment[];
  reservationForm: FormGroup;
  utils = utils;
  constructor(private serviceProxyService: ServiceProxyService, private appointmentProxyService: AppointmentProxyService,
              private builder: FormBuilder) {
    this.reservationForm = builder.group({
      serviceId: [null, Validators.required],
      from: [null, Validators.required],
      to: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.serviceProxyService.getAllServices().subscribe(data => {
      this.services = data;
    });
  }

  findReservations() {
    this.appointmentProxyService.getAllByServiceAndTerm(this.reservationForm.get('serviceId').value,
      this.reservationForm.get('from').value, this.reservationForm.get('to').value).subscribe(data => {
      console.log(data);
      this.appointments = data;
    });
  }

  // fixme also ask Alina if an appointment has own service or it only depends on doctor
}
