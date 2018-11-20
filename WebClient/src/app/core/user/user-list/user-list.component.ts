import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {UserRestService} from '../../../services/rest/user-rest.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  @Input()
  onlyOfficeUsers: boolean;

  users: User[];

  constructor(private userRest: UserRestService) {
  }

  ngOnInit() {
    // this.initUsers();
  }

  private initUsers() {
    if (this.onlyOfficeUsers === null) {
      this.userRest.getAllUsers().subscribe(response => this.users = response);
    } else if (this.onlyOfficeUsers) {
      this.userRest.getAllUsersIfOfficeUser().subscribe(response => this.users = response);
    } else {
      this.userRest.getAllUserIfDefaultUser().subscribe(response => this.users = response);
    }
  }

}
