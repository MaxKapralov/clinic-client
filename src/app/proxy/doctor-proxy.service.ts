import { Injectable } from '@angular/core';
import { DoctorService } from '../service/doctor.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorProxyService {

  constructor(private doctorService: DoctorService) {
  }
}
