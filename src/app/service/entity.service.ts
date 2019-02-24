import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

export abstract class EntityService<T> {

  protected readonly url;
  protected readonly httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private rel: String) {
    this.url = `${environment.apiUrl}/${this.rel}`;
  }

  get(id: number): Observable<T> {
    return this.http.get(`${this.url}/${id}`).pipe(
      catchError(error => console.log(error))
    );
  }
  add(entity: T): Observable<{}> {
    return this.http.post(this.url, entity, this.httpOptions).pipe(
      catchError(error => console.log(error))
    );
  }
  getAll(): Observable<T[]> {
    return this.http.get(this.url).pipe(
      catchError(error => console.log(error))
    );
  }
  update(entity: T): Observable<{}> {
    return this.http.put(`${this.url}/${entity.id}`, entity, this.httpOptions).pipe(
      catchError(error => console.log(error))
    );
  }
  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError(error => console.log(error))
    );
  }
}
