import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user';
import {VisitRestService} from '../../../services/rest/visit-rest.service';
import {UserRestService} from '../../../services/rest/user-rest.service';
import {Subject} from 'rxjs';
import {SearchVisitDate, Visit, VisitType} from '../../../models/visit';

declare var $: any;

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html'
})
export class CreateVisitComponent implements OnInit {

  visit: Visit;

  users: User[];
  officeUsers: User[];

  visitTypes: VisitType[];

  searchVisitDate: SearchVisitDate;
  availableVisitDates: string[];

  userTerm$ = new Subject<string>();
  officeUserTerm$ = new Subject<string>();

  constructor(private userRest: UserRestService, private visitRest: VisitRestService) {
    this.visit = new Visit();
    this.searchVisitDate = new SearchVisitDate();
    this.userRest.search(this.userTerm$, false).subscribe(usersResult => this.users = usersResult);
    this.userRest.search(this.officeUserTerm$, true).subscribe(officeUsersResult => this.officeUsers = officeUsersResult);
  }

  ngOnInit() {
    this.initVisitTypes();
  }

  initVisitTypes() {
    this.visitRest.getVisitTypes().subscribe(visitTypesResult => this.visitTypes = visitTypesResult);
  }


  selectDateForVisit(date: string) {
    $('#appointment').removeClass('disabled');
    this.visit.date = date;
  }

  makeAppointment() {
    this.visitRest.saveVisit(this.visit).subscribe(() => {
    });
  }

  searchVisitDates() {
    this.searchVisitDate.officeUserId = this.visit.officeUserId;
    this.searchVisitDate.visitTypeId = this.visit.type;
    this.searchVisitDate.eventTypeId = 0;
    this.visitRest.getAvailableVisitDates(this.searchVisitDate).subscribe(visitDatesResult => this.availableVisitDates = visitDatesResult);
  }

  onSelectOfficeUser(officeUser: User) {
    this.availableVisitDates = null;
    this.visit.officeUserId = officeUser.id;
  }

  onSelectUser(user: User) {
    this.visit.userId = user.id;
  }
}
