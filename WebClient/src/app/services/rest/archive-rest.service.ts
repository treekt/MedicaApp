import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArchiveRestService {

  endpoint = 'http://localhost:8762/archive';
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
      switchMap(term => this.getAllDeseasesContainsCodeOrName(term))
    );
  }

  getAllDeseases(): Observable<any> {
    return this.http.get(this.endpoint + '/deseases/all');
  }

  getAllDeseasesContainsCodeOrName(codeOrName: string): Observable<any> {
    return this.http.get(this.endpoint + '/desease/all/' + codeOrName);
  }


}
