import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SchedulerEvent} from '../../models/scheduler';

@Injectable({
  providedIn: 'root'
})
export class ScheduleRestService {

  endpoint = 'http://localhost:8762/user/schedule';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  saveSchedule(schedulerEvent: SchedulerEvent): Observable<any> {
    return this.http.post(this.endpoint, JSON.stringify(schedulerEvent), this.httpOptions);
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete(this.endpoint + '/' + id);
  }

  getAllSchedules(): Observable<any> {
    return this.http.get(this.endpoint + '/all');
  }

  getAllSchedulesByUserId(userId: string): Observable<any> {
    return this.http.get(this.endpoint + '/all/' + userId);
  }

  getAllSchedulesByUserIdAndType(userId: string, type: number): Observable<any> {
    return this.http.get(this.endpoint + '/all/' + userId + '/' + type);
  }
}
