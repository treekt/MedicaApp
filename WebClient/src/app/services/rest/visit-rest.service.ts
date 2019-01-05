import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SearchVisitDate, Visit, VisitType} from '../../models/visit';

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
    return this.http.post(this.endpoint + '/dates/available', JSON.stringify(searchVisitDate), this.httpOptions);
  }

  saveVisit(visit: Visit): Observable<any> {
    return this.http.post(this.endpoint, JSON.stringify(visit), this.httpOptions);
  }

  deleteVisit(id: string): Observable<any> {
    return this.http.delete(this.endpoint + '/' + id);
  }

  getVisitById(id: string): Observable<any> {
    return this.http.get(this.endpoint + '/' + id);
  }

  setDuringStatusOfVisit(id: string): Observable<any> {
    return this.http.post(this.endpoint + '/status/during/' + id, this.httpOptions);
  }

  getVisitTypeById(id: string): Observable<any> {
    return this.http.get(this.endpoint + '/types/' + id);
  }


  getAllPlannedAndDuringVisitsTodayForOfficeUser(id: string): Observable<any> {
    return this.http.get(this.endpoint + '/all/office/today/' + id);
  }


  getAllVisitByOfficeUserIdAndStatusAndVisitAll(officeUserId: string, status: string, visitAll: boolean): Observable<any> {
    return this.http.get(this.endpoint + '/all/office/' + officeUserId + '/' + status + '/' + visitAll);
  }

  getAllVisitByUserIdAndStatus(userId: string, status: string): Observable<any> {
    return this.http.get(this.endpoint + '/all/default/' + userId + '/' + status);
  }

  saveVisitType(visitType: VisitType) {
    return this.http.post(this.endpoint + '/types', JSON.stringify(visitType), this.httpOptions);
  }

  getVisitTypes(): Observable<any> {
    return this.http.get(this.endpoint + '/types/all');
  }

  deleteVisitType(id: string): Observable<any> {
    return this.http.delete(this.endpoint + '/types/' + id);
  }

  countVisitsPerDayInMonthAndYear(year: number, month: number): Observable<any> {
    return this.http.get(this.endpoint + '/count/' + year + '/' + month);
  }

  getMedicinesForVisit(id: string): Observable<any> {
    return this.http.get(this.endpoint + '/medicines/' + id);
  }

  getDeseasesForVisit(id: string): Observable<any> {
    return this.http.get(this.endpoint + '/deseases/' + id);
  }

}
