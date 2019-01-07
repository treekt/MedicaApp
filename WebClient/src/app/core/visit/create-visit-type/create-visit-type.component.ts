import { Component, OnInit } from '@angular/core';
import {VisitType} from '../../../models/visit';
import {VisitRestService} from '../../../services/rest/visit-rest.service';

declare var $: any;


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
    this.initFormValidator();
  }

  initFormValidator() {
    const self = this;
    $('.ui.form').form({
      inline: true,
      fields: {
        visitTypeName: {
          identifier: 'visitTypeName',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, podaj nazwę rodzaju wizyty'
            }
          ]
        },
        visitTypeDuration: {
          identifier: 'visitTypeDuration',
          rules: [
            {
              type: 'empty',
              prompt: 'Proszę, podaj czas trwania wizyty'
            }
          ]
        }
      },
      onSuccess: function() {
        self.saveVisitType();
      }
    });
  }

  saveVisitType() {
    this.visitRest.saveVisitType(this.visitType).subscribe(() => {this.visitType = new VisitType()});
  }
}
