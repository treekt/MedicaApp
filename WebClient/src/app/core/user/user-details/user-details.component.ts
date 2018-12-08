import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {UserRestService} from '../../../services/rest/user-rest.service';
import {AuthRestService} from '../../../services/rest/auth-rest.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit {

  user: User;
  userEmail: string;

  constructor(private userRest: UserRestService, private authServie: AuthService) {
  }

  ngOnInit() {
    this.initUser();
  }

  initUser() {
    this.userRest.getAuthenticatedUser().subscribe(userResult => {this.user = userResult; console.log(userResult); });
    this.userEmail = this.authServie.getEmailOfAuthenticatedUser();
  }

}
