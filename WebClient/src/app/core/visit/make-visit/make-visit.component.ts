import {Component, OnInit} from '@angular/core';
import {ArchiveRestService} from '../../../services/rest/archive-rest.service';
import {Desease} from "../../../models/archive";
import {Subject} from "rxjs";

declare var $: any;

@Component({
  selector: 'app-make-visit',
  templateUrl: './make-visit.component.html',
  styleUrls: ['./make-visit.component.css']
})
export class MakeVisitComponent implements OnInit {

  step = 'interview';


  searchTerm$ = new Subject<string>();
  deseases: Desease[];

  constructor(private archiveRest: ArchiveRestService) {
    this.archiveRest.search(this.searchTerm$)
      .subscribe(results => {
        this.deseases = results;
      });
  }

  ngOnInit() {
  }

  goFromTo(fromStep: string, toStep: string) {
    $('#' + fromStep).removeClass('active');
    $('#' + toStep).addClass('active');
    this.step = toStep;
  }

}
