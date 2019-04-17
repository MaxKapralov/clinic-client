import { Injectable } from '@angular/core';
import { EntityService } from './entity.service';
import { Service } from '../model/service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService extends EntityService<Service> {

  constructor(http: HttpClient) {
    super(http, 'services');
  }
}
