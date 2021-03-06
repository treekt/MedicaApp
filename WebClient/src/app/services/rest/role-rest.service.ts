import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Role} from '../../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleRestService {

  endpoint = 'http://localhost:8762/user/role';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAllRoles(): Observable<any> {
    return this.http.get(this.endpoint + '/all');
  }

  saveRole(role: Role): Observable<any> {
    return this.http.post(this.endpoint, JSON.stringify(role), this.httpOptions);
  }

  deleteRole(name: string): Observable<any> {
    return this.http.delete(this.endpoint + '/' + name);
  }

  getPermissionsOfRole(name: string): Observable<any> {
    return this.http.get(this.endpoint + '/permissions/' + name);
  }


}
