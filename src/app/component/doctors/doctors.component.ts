import { Component, OnInit } from '@angular/core';
import * as utils from '../../Utils';
import { AppointmentProxyService } from '../../proxy/appointment-proxy.service';
import { Appointment } from '../../model/appointment';
import { Service } from '../../model/service';
import { ServiceProxyService } from '../../proxy/service-proxy.service';
import { forkJoin } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoctorProxyService } from '../../proxy/doctor-proxy.service';
import { Doctor } from '../../model/doctor';
import { CellData, CellType } from '../table/table.component';
import { OptionLabelType } from '../form-controls/select/select.component';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  appointments: Appointment[];
  services: Service[];
  doctors: Doctor[];
  doctorForm: FormGroup;
  OptionLabelTypes = OptionLabelType;
  headers: string[] = ['Dzień Tygodnia', 'Data', 'Godzina', 'Operacje'];
  cellData: CellData[] = [{
    path: 'term',
    type: CellType.DAY_OF_WEEK
  }, {
    path: 'term',
    type: CellType.DATE
  }, {
    path: 'term',
    type: CellType.TIME
  }, {
    type: CellType.BUTTON,
    buttonLabel: 'Dodaj',
    disabled: () => false
  }];

  constructor(private appointmentProxy: AppointmentProxyService, private serviceProxy: ServiceProxyService, private builder: FormBuilder,
              private doctorProxy: DoctorProxyService) {
    this.doctorForm = builder.group({
      doctor: [null],
      service: [{ value: null, disabled: !this.appointments }]
    });
  }

  ngOnInit() {
    const $serv = this.serviceProxy.getAllServices();
    const $doctors = this.doctorProxy.getAllDoctors();
    forkJoin([$serv, $doctors]).subscribe(response => {
      this.doctors = response[1];
      this.services = response[0];
    });
  }

  doctorChanged(id: string) {
    this.doctorForm.controls['service'].enable();
    this.getAppointments(id);
  }

  getAppointments(id: string) {
    this.appointmentProxy.getAppointmentsForWeek(utils.getMonday(), id).subscribe(data => this.appointments = data);
  }

  add(appointment: Appointment) {
    appointment.doctor = this.doctors.find(d => d.id === +this.doctorForm.controls['doctor'].value);
    appointment.service = this.services.find(s => s.id === +this.doctorForm.controls['service'].value);
    if (appointment.service) {
      this.appointmentProxy.addAppointment(appointment).subscribe(() => this.getAppointments(this.doctorForm.controls['doctor'].value));
    } else {
      alert('Proszę wybrać usługę');
    }
  }
}
