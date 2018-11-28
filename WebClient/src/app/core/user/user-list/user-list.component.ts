import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {UserRestService} from '../../../services/rest/user-rest.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  userType: string;

  users: User[];

  constructor(private userRest: UserRestService, private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.userType = data['userType'];
    });
  }

  ngOnInit() {
    this.initUsers();
  }

  private initUsers() {
    if (this.userType === 'all') {
      this.userRest.getAllUsers().subscribe(response => this.users = response);
    } else if (this.userType === 'office') {
      this.userRest.getAllUsersIfOfficeUser().subscribe(response => this.users = response);
    } else if (this.userType === 'default') {
      this.userRest.getAllUserIfDefaultUser().subscribe(response => this.users = response);
    }
  }

}
