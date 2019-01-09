import {Component, OnInit} from '@angular/core';
import {Role} from '../../../models/role';
import {OfficeDetails, User} from '../../../models/user';
import {Credentials} from '../../../models/credentials';
import {RoleRestService} from '../../../services/rest/role-rest.service';
import {UserRestService} from '../../../services/rest/user-rest.service';
import {AuthRestService} from '../../../services/rest/auth-rest.service';
import {ActivatedRoute} from '@angular/router';

declare var $: any;


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
    this.initFormValidation();
  }

  initFormValidation() {
    const self = this;
    $('.ui.form').form({
      inline: true,
      fields: {
        email: {
          identifier: 'email',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, wpisz adres email'
            },
            {
              type: 'email',
              prompt: 'Proszę, wpisz poprawny adres email'
            }
          ]
        },
        role: {
          identifier: 'role',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, wybierz rolę'
            },
          ]
        },
        password: {
          identifier: 'password',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, wpisz swoje hasło'
            },
            {
              type: 'length[6]',
              prompt: 'Twoje hasło musi składać się z co najmniej 6 znaków'
            }
          ]
        },
        confirmPassword: {
          identifier: 'confirmPassword',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, potwierdź hasło'
            },
            {
              type: 'length[6]',
              prompt: 'Potwierdzone hasło musi spełniać te same wymagania'
            }
          ]
        },
        firstName: {
          identifier: 'firstName',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, podaj swoje imię'
            },
          ]
        },
        lastName: {
          identifier: 'lastName',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, podaj nazwisko'
            },
          ]
        },
        gender: {
          identifier: 'gender',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, wybierz płeć'
            }
          ]
        },
        birthday: {
          identifier: 'birthday',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, podaj swoją date urodzin'
            },
          ]
        },
        pesel: {
          identifier: 'pesel',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, podaj swój pesel'
            },
            {
              type: 'length[11]',
              prompt: 'Pesel musi składać się z 11 znaków'
            }
          ]
        },
        phone: {
          identifier: 'phone',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, podaj swój numer telefonu'
            },
            {
              type: 'length[9]',
              prompt: 'Numer telefonu musi składać się z 9 znaków'
            }
          ]
        },
        street: {
          identifier: 'street',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, podaj swoją ulicę'
            }
          ]
        },
        houseNumber: {
          identifier: 'houseNumber',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, podaj numer domu'
            }
          ]
        },
        city: {
          identifier: 'city',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, podaj swoje miasto'
            }
          ]
        },
        voivodeship: {
          identifier: 'voivodeship',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, podaj swoje województwo'
            }
          ]
        },
        zip: {
          identifier: 'zip',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, podaj swój kod pocztowy'
            }
          ]
        },
      },
      onSuccess: function () {
        self.saveUser();
      }
    });
  }

  private initAvailableRoles() {
    this.roleRestService.getAllRoles().subscribe(resultRoles => this.roles = resultRoles);
  }

  saveUser() {
    this.userRestService.checkIfExistsByEmail(this.credentials.email).subscribe(result => {
      if (result === false) {
        this.userRestService.saveUser(this.user).subscribe(userResult => {
          this.credentials.userId = userResult.id;
          this.credsRestService.saveCredentials(this.credentials).subscribe(() => {
          });
        });
      } else {
        alert('istnieje!');
      }
    });

  }

}
