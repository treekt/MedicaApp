import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {VisitRestService} from '../../../services/rest/visit-rest.service';
import {UserRestService} from '../../../services/rest/user-rest.service';
import {Subject} from 'rxjs';
import {Visit} from '../../../models/visit';

declare var $: any;

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: ['./create-visit.component.css']
})
export class CreateVisitComponent implements OnInit {

  visit: Visit;

  users: User[];
  officeUsers: User[];
  visitDateProps: Date[];

  searchUser$ = new Subject<string>();
  searchOfficeUser$ = new Subject<string>();

  constructor(private userRest: UserRestService, private visitRest: VisitRestService) {
    this.visit = new Visit();
    this.searchUser$.asObservable().subscribe(response => console.log(response));
    // this.userRest.search(this.searchUser$).subscribe(response => this.users = response);
    // this.userRest.search(this.searchOfficeUser$).subscribe(response => this.officeUsers = response);
  }

  ngOnInit() {
  }

  searchVisitDates() {
    this.visitRest.getAvailableVisitDates(this.visit).subscribe(
      response => this.visitDateProps = response
    );
  }

  selectDateForVisit(date: Date) {
    $('#appointment').removeClass('disabled');
    this.visit.date = date;
  }

  makeAppointment() {
    this.visitRest.saveVisit(this.visit).subscribe(() => {});
  }
}
