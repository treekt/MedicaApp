import {Component, OnInit} from '@angular/core';
import {ArchiveRestService} from '../../../services/rest/archive-rest.service';
import {Desease, Medicine, Package} from '../../../models/archive';
import {Subject} from 'rxjs';
import {Visit, VisitDetails, VisitMedicine, VisitType} from '../../../models/visit';
import {VisitRestService} from '../../../services/rest/visit-rest.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user';
import {UserRestService} from '../../../services/rest/user-rest.service';

declare var $: any;

@Component({
  selector: 'app-make-visit',
  templateUrl: './make-visit.component.html'
})
export class MakeVisitComponent implements OnInit {

  step = 'interview';

  visit: Visit;
  visitType: VisitType;
  user: User;
  officeUser: User;

  deseaseTerm$ = new Subject<string>();
  deseases: Desease[] = [];
  diagnosedDeseases: Desease[] = [];

  medicineTerm$ = new Subject<string>();
  medicines: Medicine[] = [];
  selectedMedicine: Medicine;
  prescribedMedicines: Medicine[] = [];


  constructor(private archiveRest: ArchiveRestService,
              private userRest: UserRestService,
              private visitRest: VisitRestService,
              private route: ActivatedRoute) {


    this.archiveRest.searchDesease(this.deseaseTerm$).subscribe(results => {
      this.deseases = results;
    });

    this.archiveRest.searchMedicine(this.medicineTerm$).subscribe(results => {
      this.medicines = results;
    });

  }

  ngOnInit() {
    this.initVisit();
  }

  initVisit() {
    this.route.params.subscribe(params => {
      this.visitRest.getVisitById(params['id']).subscribe(visitResult => {
        this.visit = visitResult;
        this.userRest.getUserById(this.visit.userId).subscribe(userResult => this.user = userResult);
        this.userRest.getUserById(this.visit.officeUserId).subscribe(officeUserResult => this.officeUser = officeUserResult);
        this.visitRest.getVisitTypeById(this.visit.visitTypeId).subscribe(visitTypeResult => this.visitType = visitTypeResult);

        this.visit.visitDetails = new VisitDetails();

        if (this.visit.status !== 'during') {
          this.setDuringStatusOfVisit();
        }
      });
    });
  }

  setDuringStatusOfVisit() {
    this.visitRest.setDuringStatusOfVisit(this.visit.id).subscribe(() => {
    });
  }


  goFromTo(fromStep: string, toStep: string) {
    $('#' + fromStep).removeClass('active');
    $('#' + toStep).addClass('active');
    this.step = toStep;
  }


  addToDiagnosedDeseases(desease: Desease) {
    if (!this.diagnosedDeseases.includes(desease)) {
      this.diagnosedDeseases.push(desease);
    }
  }

  deleteFromDiagnosedDeseases(desease: Desease) {
    if (this.diagnosedDeseases.includes(desease)) {
      const index = this.diagnosedDeseases.indexOf(desease);
      this.diagnosedDeseases.splice(index, 1);

    }
  }

  selectMedicineToDisplayPackages(medicine: Medicine) {
    this.selectedMedicine = medicine;
  }

  addToPrescribedMedicines(_package: Package) {
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
      const index = this.prescribedMedicines.indexOf(medicine);
      this.prescribedMedicines.slice(index, 1);

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
