import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { CustomEncoderService } from '../service/custom-encoder-service.service';
import { AppointmentService } from '../service/appointment.service';
import * as moment from 'moment';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentProxyService {

  constructor(private appointmentService: AppointmentService, private customEncoderService: CustomEncoderService) {
  }

  getAllByServiceAndTerm(serviceId: string, from: Date, to: Date): Observable<Appointment[]> {
    const params = new HttpParams({ encoder: this.customEncoderService }).set('serviceId', serviceId)
      .set('from', moment(from).format()).set('to', moment(to).format());
    return this.appointmentService.getAll(params);
  }

  reserve(id: number, username: string): Observable<Appointment> {
    return this.appointmentService.reserve(id, username);
  }

  getHistory(username: string): Observable<Appointment[]> {
    return this.appointmentService.getHistory(username);
  }

  getHistoryForPatient(id: number): Observable<Appointment[]> {
    return this.appointmentService.getHistoryForPatient(id);
  }

  getAppointmentsForServiceAndDate(id: string, date: Date): Observable<Appointment[]> {
    let params = new HttpParams({ encoder: this.customEncoderService });
    if (id) {
      params = params.set('serviceId', id);
    }
    if (date) {
      params = params.set('date', moment(date).format());
    }
    return this.appointmentService.getAppointmentsForServiceAndDate(params);
  }

  getAppointmentsForWeek(monday: string, id: string): Observable<Appointment[]> {
    const params = new HttpParams({ encoder: this.customEncoderService }).set('date', moment(monday).format()).set('id', id);
    return this.appointmentService.getForWeek(params);
  }

  addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.appointmentService.add(appointment);
  }
}
