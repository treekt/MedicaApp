import { Component, OnInit } from '@angular/core';
import {UserRestService} from '../../services/rest/user-rest.service';
import {VisitRestService} from '../../services/rest/visit-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }


}
