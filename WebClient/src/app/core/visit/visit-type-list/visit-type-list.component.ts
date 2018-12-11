import {Component, OnInit} from '@angular/core';
import {VisitType} from '../../../models/visit';
import {VisitRestService} from '../../../services/rest/visit-rest.service';

declare var $: any;

@Component({
  selector: 'app-visit-type-list',
  templateUrl: './visit-type-list.component.html'
})
export class VisitTypeListComponent implements OnInit {

  visitTypes: VisitType[] = [];

  visitTypeToDelete: VisitType;

  constructor(private visitRest: VisitRestService) {
  }


  ngOnInit() {
    this.initVisitTypes();
  }

  initVisitTypes() {
    this.visitRest.getVisitTypes().subscribe(visitTypesResult => this.visitTypes = visitTypesResult);
  }

  showModalToDelete(visitType: VisitType) {
    this.visitTypeToDelete = visitType;
    $('.ui.basic.modal').modal('show');
  }

  deleteVisitType(visitType: VisitType) {
    const index = this.visitTypes.indexOf(visitType);
    this.visitTypes.splice(index, 1);
    this.visitRest.deleteVisitType(visitType.id).subscribe(() => {
    });
  }
}
