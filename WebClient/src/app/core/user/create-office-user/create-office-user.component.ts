import {Component, OnInit} from '@angular/core';
import {Role} from '../../../../models/role';
import {RoleRestService} from '../../../../services/rest/role-rest.service';
import {OfficeUser, User} from '../../../../models/user';
import {Credentials} from '../../../../models/credentials';
import {UserRestService} from '../../../../services/rest/user-rest.service';
import {CredsRestService} from '../../../../services/rest/creds-rest.service';

@Component({
  selector: 'app-create-office-user',
  templateUrl: './create-office-user.component.html'
})
export class CreateOfficeUserComponent implements OnInit {
  roles: Role[];

  user: User;
  officeUser: OfficeUser;
  credentials: Credentials;
  confirmPassword: string;

  constructor(private roleRestService: RoleRestService,
              private userRestService: UserRestService,
              private credsRestService: CredsRestService) {
  }

  ngOnInit() {
    this.user = new User();
    this.officeUser = new OfficeUser();
    this.credentials = new Credentials();
    this.user.isUserOffice = true;
    this.initAvailableRoles();
  }

  private initAvailableRoles() {
    this.roleRestService.getAllRoles().subscribe(resultRoles => this.roles = resultRoles);
  }

  saveOfficeUser() {
    this.userRestService.saveUser(this.user).subscribe(response => {
      this.officeUser.userId = response.id;
    });
    this.userRestService.saveOfficeUser(this.officeUser).subscribe(() => {
    });
    this.credentials.userId = this.officeUser.userId;
    this.credsRestService.saveCredentials(this.credentials).subscribe(() => {
    });
  }

}
