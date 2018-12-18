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


  constructor(private roleRestService: RoleRestService,
              private userRestService: UserRestService,
              private credsRestService: AuthRestService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = new User();
    this.route.data.subscribe(data => {
      this.user.isOfficeUser = data['isOfficeUser'];

      if (this.user.isOfficeUser) {
        this.user.officeDetails = new OfficeDetails();
      } else {
        this.user.roleName = 'Pacjent';
      }
      this.credentials = new Credentials();
    });




    this.initAvailableRoles();
  }

  private initAvailableRoles() {
    this.roleRestService.getAllRoles().subscribe(resultRoles => this.roles = resultRoles);
  }

  saveOfficeUser() {
    this.userRestService.saveUser(this.user).subscribe(userResult => {
      this.credentials.userId = userResult.id;
      this.credsRestService.saveCredentials(this.credentials).subscribe(() => {
      });
    });

  }

}
