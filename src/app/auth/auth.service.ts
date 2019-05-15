import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, map, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Error } from 'tslint/lib/error';

export enum Roles {
  USER = 'ROLE_USER',
  ADMIN = 'ROLE_ADMIN',
}

export const AUTH_TOKEN_HEADER = 'Authorization';
export const AUTH_TOKEN_PREFIX = 'Bearer ';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = `${environment.apiUrl}/login`;

  constructor(private tokenStorageService: TokenStorageService, private router: Router, private http: HttpClient,
              private jwtHelperService: JwtHelperService) {
  }

  auth(username: string, password: string): void {
    this.http.post(this.authUrl, { username, password }, { observe: 'response' }).pipe(
      tap((response: HttpResponse<null>) => {
        const token = response.headers.get(AUTH_TOKEN_HEADER);
        this.tokenStorageService.setToken(token.replace(AUTH_TOKEN_PREFIX, ''));
        if (this.isAuthorize(Roles.USER)) {
          this.router.navigate(['personal-data']);
        } else if (this.isAuthorize(Roles.ADMIN)) {
          this.router.navigate(['calendar']);
        }
      }),
      map(response => response.ok),
      catchError(err => {
        if (err.status === 403) {
          alert('Wprowadzono błędne dane logowania');
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

  getUsername(): string {
    if (this.isAuthenticated()) {
      const token = this.tokenStorageService.getToken();
      return this.jwtHelperService.decodeToken(token)['sub'];
    }
    throw new Error('Not Authenticated');
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
    this.router.navigate(['login']);
  }
}
