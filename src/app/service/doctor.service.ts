import { Injectable } from '@angular/core';
import { Doctor } from '../model/doctor';
import { EntityService } from './entity.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService extends EntityService<Doctor> {

  constructor(http: HttpClient) {
    super(http, 'doctors');
  }
}
