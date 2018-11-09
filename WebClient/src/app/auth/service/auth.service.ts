import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Credentials} from '../credentials';
import {shareReplay, tap} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


export const TOKEN_NAME = 'token';
export const helper = new JwtHelperService();

@Injectable()
export class AuthService {


  constructor(private http: HttpClient) {
  }


  private url = '/auth';
  // private headers = new Headers({ 'Content-Type': 'application/json' });

  login(credentials) {
    return this.http.post(this.url, JSON.stringify(credentials)).pipe(
      tap(resp => this.setToken(resp)),
      shareReplay()
    );

  }

  logout() {
    localStorage.removeItem('token');
  }


  isTokenExpired(token?: string): boolean {
    return helper.isTokenExpired(token);
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(authResponse): void {
    localStorage.setItem(TOKEN_NAME, authResponse.header.get('authorization'));
  }

}
