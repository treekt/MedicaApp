import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SearchVisitDate, Visit} from '../../models/visit';

@Injectable({
  providedIn: 'root'
})
export class VisitRestService {

  endpoint = 'http://localhost:8762/visit';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAvailableVisitDates(searchVisitDate: SearchVisitDate): Observable<any> {
    return this.http.post(this.endpoint + '/availableDates', JSON.stringify(searchVisitDate), this.httpOptions);
  }

  saveVisit(visit: Visit): Observable<any> {
    return this.http.post(this.endpoint, JSON.stringify(visit), this.httpOptions);
  }

  getVisitTypes(): Observable<any> {
    return this.http.get(this.endpoint + '/types');
  }



}
