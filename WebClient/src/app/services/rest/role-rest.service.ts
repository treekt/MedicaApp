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

  // private extractData(res: Response) {
  //   const body = res;
  //   return body || {};
  // }

  getAllRoles(): Observable<any> {
    return this.http.get<Role[]>(this.endpoint + '/all');
  }

  saveRole(role: Role): Observable<any> {
    return this.http.post(this.endpoint, JSON.stringify(role), this.httpOptions);
  }

  deleteRole(id: string): Observable<any> {
    return this.http.delete(this.endpoint + '/' + id);
  }


}
