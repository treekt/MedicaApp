import {Component, OnInit} from '@angular/core';
import {Visit, VisitDetails, VisitType} from '../../../models/visit';
import {VisitRestService} from '../../../services/rest/visit-rest.service';
import {ActivatedRoute} from '@angular/router';
import {UserRestService} from '../../../services/rest/user-rest.service';
import {User} from '../../../models/user';
import {Desease, Medicine} from '../../../models/archive';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html'
})
export class VisitDetailsComponent implements OnInit {

  visit: Visit;
  visitType: VisitType;
  user: User;
  officeUser: User;

  prescribedMedicines: Medicine[];
  diagnosedDeseases: Desease[];

  constructor(private visitRest: VisitRestService,
              private userRest: UserRestService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.initVisitAndAnotherData();
  }

  initVisitAndAnotherData() {
    this.route.params.subscribe(params => {
      this.visitRest.getVisitById(params['id']).subscribe(visitResult => {
        this.visit = visitResult;
        this.userRest.getUserById(this.visit.userId).subscribe(userResult => this.user = userResult);
        this.userRest.getUserById(this.visit.officeUserId).subscribe(officeUserResult => this.officeUser = officeUserResult);
        this.visitRest.getVisitTypeById(this.visit.visitTypeId).subscribe(visitTypeResult => this.visitType = visitTypeResult);
        this.visitRest.getMedicinesForVisit(this.visit.id).subscribe(medicinesResult => this.prescribedMedicines = medicinesResult);
        this.visitRest.getDeseasesForVisit(this.visit.id).subscribe(deseasesResult => this.diagnosedDeseases = deseasesResult);
      });
    });
  }

}
