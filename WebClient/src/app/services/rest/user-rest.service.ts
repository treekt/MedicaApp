import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OfficeUser, User} from '../../models/user';

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

  saveUser(user: User): Observable<any> {
    return this.http.post(this.endpoint, JSON.stringify(user), this.httpOptions);
  }

  saveOfficeUser(officeUser: OfficeUser): Observable<any> {
    return this.http.post(this.endpoint + '/office', JSON.stringify(officeUser), this.httpOptions);
  }
}
