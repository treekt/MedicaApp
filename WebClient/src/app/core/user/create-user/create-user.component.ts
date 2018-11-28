import {Component, OnInit} from '@angular/core';
import {Role} from '../../../models/role';
import {OfficeUser, User} from '../../../models/user';
import {Credentials} from '../../../models/credentials';
import {RoleRestService} from '../../../services/rest/role-rest.service';
import {UserRestService} from '../../../services/rest/user-rest.service';
import {CredsRestService} from '../../../services/rest/creds-rest.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-create-office-user',
  templateUrl: './create-user.component.html'
})
export class CreateUserComponent implements OnInit {
  roles: Role[];

  user: User;
  officeUser: OfficeUser;
  credentials: Credentials;
  confirmPassword: string;

  isOfficeUser: boolean;

  constructor(private roleRestService: RoleRestService,
              private userRestService: UserRestService,
              private credsRestService: CredsRestService,
              private route: ActivatedRoute) {

    this.route.data.subscribe(data => {
      this.isOfficeUser = data['isOfficeUser'];
    });
  }

  ngOnInit() {
    this.user = new User();
    if (this.isOfficeUser) {
      this.officeUser = new OfficeUser();
    } else {
      // TODO: Ustaw dla uzytkowika role 'Pacjent'
    }
    this.credentials = new Credentials();
    this.user.isUserOffice = this.isOfficeUser;
    this.initAvailableRoles();
  }

  private initAvailableRoles() {
    this.roleRestService.getAllRoles().subscribe(resultRoles => this.roles = resultRoles);
  }

  saveOfficeUser() {
    this.userRestService.saveUser(this.user).subscribe(response => {
      if (this.isOfficeUser) {
        this.officeUser.userId = response.id;
        this.userRestService.saveOfficeUser(this.officeUser).subscribe(() => {
        });
      }
      this.credentials.userId = response.id;
      this.credsRestService.saveCredentials(this.credentials).subscribe(() => {
      });
    });

  }

}
