export class Visit {
  id: string;
  date: string;
  status: string;
  type: string;
  visitDetails: VisitDetails;
  userId: string;
  officeUserId: string;

  constructor() {
    this.visitDetails = new VisitDetails();
    // this.dateRequest = new DateRequest();
  }
}

export class VisitDetails {
  interview: string;
  diagnosis: string;
  recommendation: string;
  deseases: number[];
  medicines: VisitMedicine[];

  constructor() {
    this.medicines = [];

  }
}

export class VisitMedicine {
  medicineId: string;
  packageId: string;

  constructor(medicineId: string, packageId) {
    this.medicineId = medicineId;
    this.packageId = packageId;
  }

}

export class SearchVisitDate {
  officeUserId: string;
  visitTypeId: string;
  eventTypeId: number;
  dateFrom: string;
  dateTo: string;
}

export class VisitType {
  id: string;
  name: string;
  duration: number;
}
