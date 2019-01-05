import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

declare var $: any;

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin = false;

  email: string;
  password: string;

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.initFormValidator();
  }

  initFormValidator() {
    const self = this;
    $('.ui.form').form({
      fields: {
        email: {
          identifier: 'email',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, wpisz swój adres email'
            },
            // {
            //   type: 'email',
            //   prompt: 'Proszę, wpisz poprawny adres email'
            // }
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
              type: 'length[5]',
              prompt: 'Twoje hasło musi składać się z co najmniej 6 znaków'
            }
          ]
        }
      },
      onSuccess: function() {
        self.login();
      }
    });
  }

  login() {
    this.isLogin = true;
    this.authService.login({email: this.email, password: this.password})
      .subscribe(() => {
          this.router.navigate(['/']);
          console.log('loguje');
        },
        error => {
          console.log(error);
        });
  }
}
