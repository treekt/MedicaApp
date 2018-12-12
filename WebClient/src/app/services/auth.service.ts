import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {RoleRestService} from './rest/role-rest.service';


export const TOKEN_NAME = 'token';
export const helper = new JwtHelperService();

@Injectable()
export class AuthService {

  private static FULLY_PRIVILEGED_ROLE = 'Administrator';
  private url = 'http://localhost:8762/auth/login';

  constructor(private http: HttpClient, private roleRest: RoleRestService) {
  }


  private initPermissions() {
    if (!this.isAdministrator()) {
      this.roleRest.getPermissionsOfRole(this.getRoleOfAuthenticatedUser()).subscribe(permissionsResult => {
        localStorage.setItem('permissions', permissionsResult);
      });
    }
  }


  login(credentials) {
    return this.http.post(this.url, JSON.stringify(credentials), {observe: 'response'}).pipe(
      tap(resp => {
          this.setToken(resp.headers.get('Authorization'));
          this.initPermissions();
        }
      ));

  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
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

  getRoleOfAuthenticatedUser() {
    return this.getTokenPayload().roles[0];
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

  getPermissionsOfAuthenticatedUser() {
    return localStorage.getItem('permissions').split(',').map(function (i) {
      return parseInt(i, 10);
    });
  }

  hasPermission(permissionId: number) {
    if (this.getPermissionsOfAuthenticatedUser().indexOf(permissionId) > -1) {
      return true;
    }
    return false;
  }

  isAdministrator() {
    return this.getRoleOfAuthenticatedUser() === AuthService.FULLY_PRIVILEGED_ROLE;
  }


}
