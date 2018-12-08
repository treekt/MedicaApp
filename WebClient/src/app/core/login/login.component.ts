import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  isLogin = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: new FormControl(null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(8)])
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLogin = true;

    this.authService.login({email: this.f.email.value, password: this.f.password.value})
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        });
  }
}
