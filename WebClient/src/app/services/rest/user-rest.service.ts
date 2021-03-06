import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {AuthService} from '../auth.service';

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

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getAuthenticatedUser(): Observable<any> {
    const email = this.authService.getEmailOfAuthenticatedUser();
    return this.http.get(this.endpoint + '/email/' + email);
  }

  search(terms: Observable<string>, isOfficeUser: boolean) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.getAllUsersContainsFirstNameOrLastName(term, isOfficeUser))
    );
  }

  getAllUsersContainsFirstNameOrLastName(firstNameOrLastName: string, isOfficeUser: boolean): Observable<any> {
    return this.http.get(
      this.endpoint + '/all/' + (firstNameOrLastName === '' ? 'nothing' : firstNameOrLastName) + '/' + isOfficeUser + '/' + true);
  }


  getUserById(id: string): Observable<any> {
    return this.http.get(this.endpoint + '/' + id);
  }

  saveUser(user: User): Observable<any> {
    return this.http.post(this.endpoint, JSON.stringify(user), this.httpOptions);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.endpoint + '/' + id);
  }

  checkIfExistsByEmail(email: string): Observable<any> {
    return this.http.get(this.endpoint + '/email/exists/' + email);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.endpoint + '/all');
  }

  getAllDefaultUsers(): Observable<any> {
    return this.http.get(this.endpoint + '/default/all');
  }

  getAllOfficeUsers(): Observable<any> {
    return this.http.get(this.endpoint + '/office/all');
  }

  countUserTypes(): Observable<any> {
    return this.http.get(this.endpoint + '/count/types');
  }

}
