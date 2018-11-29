import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  email: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.email = this.authService.isAdministrator() ? 'Aministrator' : this.authService.getEmailOfAuthenticatedUser();
  }

}
