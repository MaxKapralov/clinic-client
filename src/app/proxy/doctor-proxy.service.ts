import { Injectable } from '@angular/core';
import { DoctorService } from '../service/doctor.service';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorProxyService {

  constructor(private doctorService: DoctorService) {
  }
  getAllDoctors(): Observable<Doctor[]> {
    return this.doctorService.getAll();
  }
  addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.doctorService.add(doctor);
  }
  deleteDoctor(id: number): Observable<Doctor> {
    return this.doctorService.delete(id);
  }
}
