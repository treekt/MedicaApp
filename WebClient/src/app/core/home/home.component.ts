import { Component, OnInit } from '@angular/core';
import {UserRestService} from '../../services/rest/user-rest.service';
import {VisitRestService} from '../../services/rest/visit-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  officeUsersCounter: number;
  finishedVisitsCounter: number;
  prescribedMedicinesCounter: number;
  diagnosedDeseasesCounter: number;

  constructor(private userRest: UserRestService, private visitRest: VisitRestService) { }

  ngOnInit() {
    this.initCounters();
  }

  initCounters() {
    this.userRest.countOfficeUsers().subscribe(valueResult => this.officeUsersCounter = valueResult);
    this.visitRest.countFinishedVisits().subscribe(valueResult => this.finishedVisitsCounter = valueResult);
    this.visitRest.countPrescribedMedicines().subscribe(valueResult => this.prescribedMedicinesCounter = valueResult);
    this.visitRest.countDiagnosedDeseases().subscribe(valueResult => this.diagnosedDeseasesCounter = valueResult);
  }

}
