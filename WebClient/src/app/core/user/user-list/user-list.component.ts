import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {UserRestService} from '../../../services/rest/user-rest.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  onlyOfficeUsers: boolean;

  users: User[];

  constructor(private userRest: UserRestService, private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.onlyOfficeUsers = data['onlyOfficeUsers'];
    });
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
