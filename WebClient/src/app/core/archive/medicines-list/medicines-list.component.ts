import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {Desease, Medicine} from '../../../models/archive';
import {ArchiveRestService} from '../../../services/rest/archive-rest.service';

@Component({
  selector: 'app-medicines-list',
  templateUrl: './medicines-list.component.html'
})
export class MedicinesListComponent implements OnInit {


  medicineTerm$ = new Subject<string>();

  medicines: Medicine[] = [];
  selectedMedicine: Medicine;

  constructor(private archiveRest: ArchiveRestService) {
    this.archiveRest.searchMedicine(this.medicineTerm$).subscribe(medicinesResult => this.medicines = medicinesResult);
  }

  ngOnInit() {
  }

  onSelectMedicine(medicine: Medicine) {
    this.selectedMedicine = medicine;
  }
}
