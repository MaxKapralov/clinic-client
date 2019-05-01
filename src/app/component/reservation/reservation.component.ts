import { Component, OnInit } from '@angular/core';
import { ServiceProxyService } from '../../proxy/service-proxy.service';
import { Service } from '../../model/service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../../model/doctor';
import { Appointment } from '../../model/appointment';
import { AppointmentProxyService } from '../../proxy/appointment-proxy.service';
import { AuthService } from '../../auth/auth.service';
import { MatDialog } from '@angular/material';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { CellData, CellType } from '../table/table.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  services: Service[];
  doctors: Doctor[];
  appointments: Appointment[];
  reservationForm: FormGroup;
  fromMinDate = new Date();
  toMinDate = new Date();
  headers: string[] = ['Nazwa usługi', 'Data realizacji', 'Godzina', 'Lekarz', 'Operacje'];
  cellData: CellData[] = [{
    path: 'service.name',
    type: CellType.STRING
  }, {
    path: 'term',
    type: CellType.DAY
  }, {
    path: 'term',
    type: CellType.TIME,
  }, {
    path: 'doctor',
    type: CellType.USER
  }, {
    type: CellType.BUTTON,
    buttonLabel: 'Zarezerwuj',
    disabled: (a) => !a.free
  }];

  constructor(private serviceProxyService: ServiceProxyService, private appointmentProxyService: AppointmentProxyService,
              private builder: FormBuilder, private authService: AuthService, private dialog: MatDialog) {
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
      this.appointments = data.sort((a, b) => new Date(a.term).getTime() - new Date(b.term).getTime());
    });
  }

  reserve(appointment: Appointment) {
    this.dialog.open(ConfirmationComponent, { data: appointment }).afterClosed().subscribe(doReservation => {
      if (doReservation) {
        this.appointmentProxyService.reserve(appointment.id, this.authService.getUsername()).subscribe(() => this.findReservations());
      }
    });
  }

}
