import { Injectable } from '@angular/core';
import { EntityService } from './entity.service';
import { UserDetails } from '../model/user-details';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService extends EntityService<UserDetails> {

  constructor(http: HttpClient) {
    super(http, 'user-details');
  }
}
