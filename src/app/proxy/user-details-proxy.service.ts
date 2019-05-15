import { Injectable } from '@angular/core';
import { UserDetailsService } from '../service/user-details.service';
import { AuthService } from '../auth/auth.service';
import { HttpParams } from '@angular/common/http';
import { UserDetails } from '../model/user-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsProxyService {

  constructor(private userDetailsService: UserDetailsService, private authService: AuthService) {
  }

  getUserByUsername(): Observable<UserDetails[]> {
    return this.userDetailsService.getAll(new HttpParams().set('username', this.authService.getUsername()));
  }

  updateUserDetails(user: UserDetails): void {
    this.userDetailsService.update(user).subscribe();
  }

  getAllUsers(): Observable<UserDetails[]> {
    return this.userDetailsService.getAll();
  }
}
