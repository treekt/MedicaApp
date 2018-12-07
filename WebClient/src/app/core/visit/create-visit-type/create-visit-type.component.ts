import { Component, OnInit } from '@angular/core';
import {VisitType} from '../../../models/visit';
import {VisitRestService} from '../../../services/rest/visit-rest.service';

@Component({
  selector: 'app-create-visit-type',
  templateUrl: './create-visit-type.component.html'
})
export class CreateVisitTypeComponent implements OnInit {

  visitType: VisitType;

  constructor(private visitRest: VisitRestService) {
    this.visitType = new VisitType();
  }

  ngOnInit() {
  }

  saveVisitType() {
    this.visitRest.saveVisitType(this.visitType).subscribe(() => {this.visitType = new VisitType()});
  }
}
