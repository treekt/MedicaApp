import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserRestService} from '../../services/rest/user-rest.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  isAdmin: boolean;

  officeUser: User;
  officeUsers: User[];


  constructor(private userRest: UserRestService) {
  }

  ngOnInit() {
    if (this.isAdmin) {
      this.initOfficeUsers();
    } else {
      this.officeUser = new User(); // TODO: Initialize authenticated user
    }
  }

  initOfficeUsers() {
    this.userRest.getAllUsersIfOfficeUser().subscribe(response => this.officeUsers = response);
  }

}
