import { Component, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { ServiceProxyService } from '../../proxy/service-proxy.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentProxyService } from '../../proxy/appointment-proxy.service';
import { Appointment } from '../../model/appointment';
import { CellData, CellType } from '../table/table.component';
import { OptionLabelType } from '../form-controls/select/select.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  services: Service[];
  appointments: Appointment[];
  minDate = new Date();
  calendarForm: FormGroup;
  OptionLabelTypes = OptionLabelType;
  headers = ['Data', 'Godzina', 'Usługa', 'Lekarz', 'Pacjent'];
  cellData: CellData[] = [{
    path: 'term',
    type: CellType.DAY
  }, {
    path: 'term',
    type: CellType.TIME
  }, {
    path: 'service.name',
    type: CellType.STRING
  }, {
    path: 'doctor',
    type: CellType.USER
  }, {
    path: 'patient',
    type: CellType.USER
  }];

  constructor(private servicesProxy: ServiceProxyService, private builder: FormBuilder, private appointmentProxy: AppointmentProxyService) {
    this.calendarForm = builder.group({
      serviceId: [null, Validators.required],
      date: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.servicesProxy.getAllServices().subscribe(data => this.services = data);
  }

  findAppointments() {
    this.appointmentProxy
      .getAppointmentsForServiceAndDate(this.calendarForm.controls['serviceId'].value, this.calendarForm.controls['date'].value)
      .subscribe(data => this.appointments = data);
  }
}
