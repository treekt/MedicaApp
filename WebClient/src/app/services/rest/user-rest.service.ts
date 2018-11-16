import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Role} from '../../models/role';
import {Permission} from '../../models/permission';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  endpoint = 'http://localhost:8762/user';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getPermissions(): Observable<any> {
    return this.http.get<Permission[]>(this.endpoint + '/permissions');
  }

  saveRole(role: Role): Observable<any> {
    return this.http.post(this.endpoint + '/role', JSON.stringify(role), this.httpOptions);
  }
}
