import {Component, OnInit} from '@angular/core';
import {Role} from '../../../models/role';
import {OfficeDetails, User} from '../../../models/user';
import {Credentials} from '../../../models/credentials';
import {RoleRestService} from '../../../services/rest/role-rest.service';
import {UserRestService} from '../../../services/rest/user-rest.service';
import {AuthRestService} from '../../../services/rest/auth-rest.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-create-office-user',
  templateUrl: './create-user.component.html'
})
export class CreateUserComponent implements OnInit {
  roles: Role[];

  user: User;
  credentials: Credentials;
  confirmPassword: string;

  isOfficeUser: boolean;

  constructor(private roleRestService: RoleRestService,
              private userRestService: UserRestService,
              private credsRestService: AuthRestService,
              private route: ActivatedRoute) {

    this.route.data.subscribe(data => {
      this.isOfficeUser = data['isOfficeUser'];
    });
  }

  ngOnInit() {
    this.user = new User();
    if (this.isOfficeUser) {
      this.user.officeDetails = new OfficeDetails();
      this.user.isOfficeUser = this.isOfficeUser;
    } else {
      // TODO: Ustaw dla uzytkowika role 'Pacjent'
    }
    this.credentials = new Credentials();
    this.initAvailableRoles();
  }

  private initAvailableRoles() {
    this.roleRestService.getAllRoles().subscribe(resultRoles => this.roles = resultRoles);
  }

  saveOfficeUser() {
    this.userRestService.saveUser(this.user).subscribe(response => {
      this.credentials.userId = response.id;
      this.credsRestService.saveCredentials(this.credentials).subscribe(() => {
      });
    });

  }

}
