import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';


export const TOKEN_NAME = 'token';
export const helper = new JwtHelperService();

@Injectable()
export class AuthService {


  constructor(private http: HttpClient) {
  }

  private url = 'http://localhost:8762/auth';


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

  getTokenPayload() {
    return helper.decodeToken(this.getToken());
  }

  getRolesOfAuthenticatedUser() {
    return this.getTokenPayload().roles;
  }

  getEmailOfAuthenticatedUser() {
    return this.getTokenPayload().sub;
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

}
