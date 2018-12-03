import {Component, OnInit} from '@angular/core';
import {ArchiveRestService} from '../../../services/rest/archive-rest.service';
import {Desease, Medicine, Package} from '../../../models/archive';
import {Subject} from 'rxjs';
import {Visit, VisitMedicine} from '../../../models/visit';
import {VisitRestService} from '../../../services/rest/visit-rest.service';

declare var $: any;

@Component({
  selector: 'app-make-visit',
  templateUrl: './make-visit.component.html',
  styleUrls: ['./make-visit.component.css']
})
export class MakeVisitComponent implements OnInit {

  step = 'interview';

  visit: Visit;

  deseaseTerm$ = new Subject<string>();
  deseases: Desease[];
  diagnosedDeseases: Desease[];

  medicineTerm$ = new Subject<string>();
  medicines: Medicine[];
  selectedMedicine: Medicine;
  prescribedMedicines: Medicine[];


  constructor(private archiveRest: ArchiveRestService, private visitRest: VisitRestService) {

    this.visit = new Visit();

    this.archiveRest.searchDesease(this.deseaseTerm$).subscribe(results => {
      this.deseases = results;
    });

    this.archiveRest.searchMedicine(this.medicineTerm$).subscribe(results => {
      this.medicines = results;
    });

    // this.deseaseTerm$.asObservable().subscribe(term => term === '' ? this.deseases = null : {});
    // this.medicineTerm$.asObservable().subscribe(term => term === '' ? this.medicines = null : {});

  }

  ngOnInit() {
  }


  goFromTo(fromStep: string, toStep: string) {
    $('#' + fromStep).removeClass('active');
    $('#' + toStep).addClass('active');
    this.step = toStep;
  }


  addToDiagnosedDeseases(desease: Desease) {
    if (this.diagnosedDeseases == null) {
      this.diagnosedDeseases = [];
    }
    if (!this.diagnosedDeseases.includes(desease)) {
      this.diagnosedDeseases.push(desease);
    }
  }

  deleteFromDiagnosedDeseases(desease: Desease) {
    if (this.diagnosedDeseases.includes(desease)) {
      if (this.diagnosedDeseases.length === 1) {
        this.diagnosedDeseases = null;
      } else {
        const index = this.diagnosedDeseases.indexOf(desease);
        this.diagnosedDeseases.splice(index, 1);
      }
    }
  }

  selectMedicineToDisplayPackages(medicine: Medicine) {
    this.selectedMedicine = medicine;
  }

  addToPrescribedMedicines(_package: Package) {
    if (this.prescribedMedicines == null) {
      this.prescribedMedicines = [];
    }
    let canAddFlag = true;
    for (const medicine of this.prescribedMedicines) {
      if (medicine.packages.includes(_package)) {
        canAddFlag = false;
      }
    }
    if (canAddFlag) {
      const tempMedicine = new Medicine();
      tempMedicine.productName = this.selectedMedicine.productName;
      tempMedicine.power = this.selectedMedicine.power;
      tempMedicine.form = this.selectedMedicine.form;
      tempMedicine.packages = [];
      tempMedicine.packages.push(_package);
      this.prescribedMedicines.push(tempMedicine);
    }
  }

  deleteFromPrescribedMedicines(medicine: Medicine) {
    if (this.prescribedMedicines.includes(medicine)) {
      if (this.prescribedMedicines.length === 1) {
        this.prescribedMedicines = null;
      } else {
        const index = this.prescribedMedicines.indexOf(medicine);
        this.prescribedMedicines.slice(index, 1);
      }
    }
  }

  finishVisit() {
    const visitDetails = this.visit.visitDetails;
    visitDetails.medicines = [];
    visitDetails.deseases = [];

    for (const desease of this.diagnosedDeseases) {
      visitDetails.deseases.push(desease.id);
    }
    for (const medicine of this.prescribedMedicines) {
      const visitMedicicine = new VisitMedicine(medicine.id, medicine.id);
      visitDetails.medicines.push(visitMedicicine);
    }

    this.visit.status = 'finished';
    this.saveVisit();
  }

  saveVisit() {
    this.visitRest.saveVisit(this.visit).subscribe(() => {
    });
  }
}
