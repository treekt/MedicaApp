import {Component, OnInit} from '@angular/core';
import {Visit} from '../../../models/visit';
import {VisitRestService} from '../../../services/rest/visit-rest.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-visit-details',
  templateUrl: './visit-details.component.html'
})
export class VisitDetailsComponent implements OnInit {

  visit: Visit;

  constructor(private visitRest: VisitRestService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.initVisit();
  }

  initVisit() {
    this.route.params.subscribe(params => {
      this.visitRest.getVisitById(params['id']).subscribe(visitResult => {
        this.visit = visitResult;
      });
    });

  }

}
