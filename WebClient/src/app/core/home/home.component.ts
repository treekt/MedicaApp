import {Component, OnInit} from '@angular/core';
import {UserRestService} from '../../services/rest/user-rest.service';
import {User} from "../../models/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(private userService: UserRestService) {
  }

  ngOnInit() {
    this.userService.getAuthenticatedUser().subscribe(userResult => this.user = userResult);
  }


}
