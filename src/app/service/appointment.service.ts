import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment';
import { EntityService } from './entity.service';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  getHistory(username: string): Observable<Appointment[]> {
    const params = new HttpParams().set('username', username);
    return this.http.get<Appointment[]>(`${this.url}/history`, {params: params}).pipe(
      catchError(error => {
        return EMPTY;
      })
    );
  }
}
