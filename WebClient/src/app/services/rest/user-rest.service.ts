import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OfficeUser, User} from '../../models/user';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

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

  search(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.searchUsers(term))
    );
  }

  searchUsers(term): Observable<any> {
    return this.http.get(this.endpoint + '/search/' + term);
  }

  saveUser(user: User): Observable<any> {
    return this.http.post(this.endpoint, JSON.stringify(user), this.httpOptions);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.endpoint + '/all');
  }

  getAllUserIfDefaultUser(): Observable<any> {
    return this.http.get(this.endpoint + '/allDefault');
  }

  getAllUsersIfOfficeUser(): Observable<any> {
    return this.http.get(this.endpoint + '/allOffice');
  }

  saveOfficeUser(officeUser: OfficeUser): Observable<any> {
    return this.http.post(this.endpoint + '/office', JSON.stringify(officeUser), this.httpOptions);
  }
}
