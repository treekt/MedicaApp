import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Credentials} from '../../models/credentials';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRestService {

  endpoint = 'http://localhost:8762/auth/credentials';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  saveCredentials(credentials: Credentials): Observable<any> {
    return this.http.post(this.endpoint, JSON.stringify(credentials), this.httpOptions);
  }

}
