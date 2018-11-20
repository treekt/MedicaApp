import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {Credentials} from '../../../models/credentials';
import {UserRestService} from '../../../services/rest/user-rest.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html'
})
export class CreateUserComponent implements OnInit {

  user: User;
  credentials: Credentials;
  confirmPassword: string;

  constructor(private userRest: UserRestService) {
  }

  ngOnInit() {
    this.user = new User();
    this.credentials = new Credentials();
    this.user.isUserOffice = true;
  }

  saveUser() {
    this.userRest.saveUser(this.user).subscribe(response => this.credentials.userId = response.id);
    // TODO: Zapis credentials!
  }

}
