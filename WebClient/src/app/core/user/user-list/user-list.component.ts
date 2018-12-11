import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {UserRestService} from '../../../services/rest/user-rest.service';
import {ActivatedRoute} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  forAdministration: boolean;
  userType: string;
  users: User[] = [];

  userToDelete: User;

  constructor(private userRest: UserRestService, private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.forAdministration = data['forAdministration'];
      this.userType = data['userType'];
      this.initUsers();
    });
  }

  ngOnInit() {
  }

  private initUsers() {
    if (this.userType === 'all') {
      this.userRest.getAllUsers().subscribe(response => this.users = response);
    } else if (this.userType === 'office') {
      this.userRest.getAllOfficeUsers().subscribe(response => this.users = response);
    } else if (this.userType === 'default') {
      this.userRest.getAllDefaultUsers().subscribe(response => this.users = response);
    }
  }

  selectUserType(userType: string) {
    this.userType = userType;
    this.initUsers();
  }

  showModalToDelete(user: User) {
    this.userToDelete = user;
    $('.ui.basic.modal').modal('show');
  }

  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    this.userRest.deleteUser(user.id).subscribe(() => {
    });
  }

}
