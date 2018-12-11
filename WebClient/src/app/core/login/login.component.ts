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
  }

  login() {

    this.isLogin = true;

    this.authService.login({email: this.email, password: this.password})
      .subscribe(() => {
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        });
  }
}
