import { Injectable } from '@angular/core';

export const STORAGE_TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  setToken(token: string): void {
    sessionStorage.setItem(STORAGE_TOKEN_KEY, token);
  }
  getToken(): string {
    return sessionStorage.getItem(STORAGE_TOKEN_KEY);
  }
  deleteToken() {
    sessionStorage.removeItem(STORAGE_TOKEN_KEY);
  }
}
