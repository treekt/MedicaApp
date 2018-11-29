import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
    const expectedRole = route.data.expectedRole;
    const userRole = this.authService.getRoleOfAuthenticatedUser();
    if (!this.authService.isTokenExpired() && userRole.indexOf(expectedRole) > -1) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
