import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
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

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getPermissions(): Observable<any> {
    return this.http.get<Permission[]>(this.endpoint + '/permissions');
  }

  saveRole(role: Role): Observable<any> {
    return this.http.post(this.endpoint + '/role', JSON.stringify(role), this.httpOptions);
  }
}
