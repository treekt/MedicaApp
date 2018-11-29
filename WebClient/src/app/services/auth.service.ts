import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {RoleRestService} from './rest/role-rest.service';
import {Permission} from '../models/permissions';


export const TOKEN_NAME = 'token';
export const helper = new JwtHelperService();

@Injectable()
export class AuthService {

  private static FULLY_PRIVILEGED_ROLE = 'ADMIN';
  private url = 'http://localhost:8762/auth/login';
  permissions: number[] = [];

  constructor(private http: HttpClient, private roleRest: RoleRestService) {
  }

  private initPermissions() {
    if (this.isAdministrator()) {
      for (const permission of Permission.allValues()) {
        this.permissions.push(permission.id);
      }
    } else {
      this.roleRest.getPermissionsOfRole(this.getRoleOfAuthenticatedUser()).subscribe(response => this.permissions = response);
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

  canAccess(permissionId: number): boolean {
    return !!this.permissions.find(id => id === permissionId);
  }

  isAdministrator() {
    return this.getEmailOfAuthenticatedUser().toUpperCase() === AuthService.FULLY_PRIVILEGED_ROLE.toUpperCase();
  }

}
