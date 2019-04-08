import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { Entity } from '../model/entity';

export abstract class EntityService<T extends Entity> {

  protected readonly url;
  protected readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(protected http: HttpClient, private rel: String) {
    this.url = `${environment.apiUrl}/${this.rel}`;
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`).pipe(
      catchError(error => {
        console.log(error);
        return EMPTY;
      })
    );
  }

  add(entity: T): Observable<{}> {
    return this.http.post(this.url, entity, this.httpOptions).pipe(
      catchError(error => {
        console.log(error);
        return EMPTY;
      })
    );
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url).pipe(
      catchError(error => {
        console.log(error);
        return EMPTY;
      })
    );
  }

  update(entity: T): Observable<{}> {
    return this.http.put(`${this.url}/${entity.id}`, entity, this.httpOptions).pipe(
      catchError(error => {
        console.log(error);
        return EMPTY;
      })
    );
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError(error => {
        console.log(error);
        return EMPTY;
      })
    );
  }
}
