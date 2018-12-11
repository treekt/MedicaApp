import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VisitRestService} from '../../../services/rest/visit-rest.service';
import {VisitCompact} from '../../../models/visit';
import {User} from '../../../models/user';
import {UserRestService} from '../../../services/rest/user-rest.service';

declare var $: any;

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html'
})
export class VisitListComponent implements OnInit {

  @Input()
  homeMode: boolean;

  forOfficeUser: boolean;

  visits: VisitCompact[] = [];

  visitStatus = 'planned';
  visitAll = false;

  user: User;

  visitToDelete: VisitCompact;

  constructor(private userRest: UserRestService, private visitRest: VisitRestService, private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.forOfficeUser = data['forOfficeUser'];
    });
  }

  ngOnInit() {
    this.userRest.getAuthenticatedUser().subscribe(userResult => {
      this.user = userResult;
      if (this.user.isOfficeUser) {
        this.initVisitsForOfficeUser();
      } else {
        this.initVisitsForUser();
      }
    });
  }

  initVisitsForOfficeUser() {
    if (this.homeMode) {
      this.visitRest.getAllPlannedAndDuringVisitsTodayForOfficeUser(this.user.id).subscribe(visitsResult => this.visits = visitsResult);
    } else {
      this.visitRest.getAllVisitByOfficeUserIdAndStatusAndVisitAll(this.user.id, this.visitStatus, this.visitAll)
        .subscribe(visitsResult => this.visits = visitsResult);
    }
  }

  initVisitsForUser() {
    if (this.homeMode) {
      this.visitRest.getAllVisitByUserIdAndStatus(this.user.id, 'planned').subscribe(visitsResult => this.visits = visitsResult);
    } else {
      this.visitRest.getAllVisitByUserIdAndStatus(this.user.id, this.visitStatus).subscribe(visitsResult => this.visits = visitsResult);
    }
  }

  showModalToDelete(visit: VisitCompact) {
    this.visitToDelete = visit;
    $('.ui.basic.modal').modal('show');
  }

  deleteVisit(visit: VisitCompact) {
    const index = this.visits.indexOf(visit);
    this.visits.splice(index, 1);
    this.visitRest.deleteVisit(visit.id).subscribe(() => {
    });
  }
}
