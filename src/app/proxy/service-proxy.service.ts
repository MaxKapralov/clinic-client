import { Injectable } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { Service } from '../model/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProxyService {

  constructor(private servicesService: ServicesService) { }
  getAllServices(): Observable<Service[]> {
    return this.servicesService.getAll();
  }
}
