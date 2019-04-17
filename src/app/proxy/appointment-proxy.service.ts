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
}
