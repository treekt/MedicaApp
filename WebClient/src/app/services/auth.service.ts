import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';


export const TOKEN_NAME = 'token';
export const helper = new JwtHelperService();

@Injectable()
export class AuthService {


  constructor(private http: HttpClient) {
  }


  private url = 'http://localhost:8762/auth';

  // private headers = new Headers({ 'Content-Type': 'application/json' });

  login(credentials) {
    return this.http.post(this.url, JSON.stringify(credentials), {observe: 'response'}).pipe(
      tap(resp => {
          this.setToken(resp.headers.get('Authorization'));
        }
      ));

  }

  logout() {
    localStorage.removeItem('token');
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.getToken();
    }
    if (!token) {
      return true;
    }

    return helper.isTokenExpired(token);
  }


  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

}
