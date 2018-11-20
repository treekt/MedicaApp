import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
  }

}
