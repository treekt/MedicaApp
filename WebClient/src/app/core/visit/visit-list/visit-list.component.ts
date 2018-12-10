import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VisitRestService} from '../../../services/rest/visit-rest.service';
import {Visit} from '../../../models/visit';
import {User} from '../../../models/user';
import {UserRestService} from '../../../services/rest/user-rest.service';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html'
})
export class VisitListComponent implements OnInit {

  forOfficeUser: boolean;

  visits: Visit[];

  visitStatus = 'planned';
  visitAll = false;

  user: User;

  constructor(private userRest: UserRestService, private visitRest: VisitRestService, private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.forOfficeUser = data['forOfficeUser'];
    });
  }

  ngOnInit() {
    this.userRest.getAuthenticatedUser().subscribe(userResult => {
      this.user = userResult;
      if (this.forOfficeUser) {
        this.initVisitsForOfficeUser();
      } else {
        this.initVisitsForUser();
      }
    });
  }

  initVisitsForOfficeUser() {
    this.visitRest.getAllVisitByOfficeUserIdAndStatusAndVisitAll(this.user.id, this.visitStatus, this.visitAll)
      .subscribe(visitsResult => this.visits = visitsResult);
  }

  initVisitsForUser() {
    this.visitRest.getAllVisitByUserIdAndStatus(this.user.id, this.visitStatus).subscribe(visitsResult => this.visits = visitsResult);
  }

}
