import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class EventService {
  public getEvents(): Observable<any> {
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    const data: any = [{
      title: 'All Day Event',
      start: yearMonth + '-01'
    },
      {
        title: 'Long Event',
        start: yearMonth + '-07',
        end: yearMonth + '-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: yearMonth + '-09 16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: yearMonth + '-16 16:00:00'
      },
      {
        title: 'Conference',
        start: yearMonth + '-11',
        end: yearMonth + '-13'
      }];
    return of(data);
  }
}
