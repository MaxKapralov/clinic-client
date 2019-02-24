import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthRequest } from '../model/auth-request';
import { environment } from '../environment';
import { AuthResponse } from '../model/auth-response';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, map, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Error } from 'tslint/lib/error';

export enum Roles {
  USER = 'ROLE_USER',
  ADMIN = 'ROLE_ADMIN',
  TRAINER = 'ROLE_TRAINER'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = `${environment.apiUrl}/login`;

  constructor(private tokenStorageService: TokenStorageService, private router: Router, private http: HttpClient,
              private jwtHelperService: JwtHelperService) {
  }

  auth(login: string, password: string): void {
    const authRequest: AuthRequest = {
      username: login,
      password: password
    };
    this.http.post(this.authUrl, authRequest, { observe: 'response' }).pipe(
      tap((response: HttpResponse<AuthResponse>) => {
        const authResponse: AuthResponse = response.body;
        this.tokenStorageService.setToken(authResponse.token);
        this.router.navigate(['main']);
      }),
      map(response => response.ok),
      catchError(err => {
        if (err.status === 401) {
          console.log('Bad credentials');
        }
        return EMPTY;
      })
    ).subscribe();
  }

  isAuthenticated(): boolean {
    return this.tokenStorageService.getToken() !== null;
  }

  getTokenRoles(): Roles[] {
    if (this.isAuthenticated()) {
      const token = this.tokenStorageService.getToken();
      return this.jwtHelperService.decodeToken(token)['roles'];
    }
    throw new Error('Not authenticated');
  }

  isAuthorize(...roles: Roles[]) {
    if (this.isAuthenticated()) {
      const tokenRoles = this.getTokenRoles();
      return roles.length === 0 || roles.some(role => tokenRoles.includes(role));
    }
    return false;
  }
  logout() {
    this.tokenStorageService.deleteToken();
    this.router.navigate(['/']);
  }
}
