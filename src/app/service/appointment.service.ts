import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment';
import { EntityService } from './entity.service';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends EntityService<Appointment> {

  constructor(http: HttpClient) {
    super(http, 'appointments');
  }
  reserve(id: number, username: string): Observable<any> {
    return this.http.put(`${this.url}/${id}`, username).pipe(
      catchError(error => {
        return EMPTY;
      })
    );
  }
}
