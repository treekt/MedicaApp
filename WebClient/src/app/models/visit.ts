export class Visit {
  id: string;
  date: Date;
  dateRequest: DateRequest;
  status: string;
  visitDetails: VisitDetails;
  userId: string;
  officeUserId: string;

  constructor() {
    this.dateRequest = new DateRequest();
  }
}

export class VisitDetails {
  interview: string;
  diagnosis: string;
  recommendation: string;
  deseases: number[];
  medicines: string[];
}

export class DateRequest {
  dateFrom: Date;
  dateTo: Date;
}
