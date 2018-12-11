import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ArchiveRestService} from '../../../services/rest/archive-rest.service';
import {Desease} from '../../../models/archive';

@Component({
  selector: 'app-desease-list',
  templateUrl: './desease-list.component.html'
})
export class DeseaseListComponent implements OnInit {

  deseaseTerm$ = new Subject<string>();

  deseases: Desease[] = [];
  selectedDesease: Desease;

  constructor(private archiveRest: ArchiveRestService) {
    this.archiveRest.searchDesease(this.deseaseTerm$).subscribe(deseasesResult => this.deseases = deseasesResult);
  }

  ngOnInit() {
  }

  onSelectDesease(desease: Desease) {
    this.selectedDesease = desease;
  }
}
