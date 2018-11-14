import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.getToken()) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.authService.getToken()}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err) => {
        console.error(err);

        if (err instanceof HttpErrorResponse && err.statusText === 'Unauthorized') {

          // return this.auth.refreshToken().mapTo(retry)
        }

        return Observable.throw(err);
        // return retry;
      })
    );
  }
}
