import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment';
import { EntityService } from './entity.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends EntityService<Appointment> {

  constructor(http: HttpClient) {
    super(http, 'appointments');
  }
}
