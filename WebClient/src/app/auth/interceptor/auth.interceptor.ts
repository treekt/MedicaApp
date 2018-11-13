import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authRequest = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.auth.getToken()}`
      }
    });

    return next.handle(authRequest).pipe(
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
