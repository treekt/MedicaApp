import {Address, UserDetails} from "./user";

export class Visit {
  id: string;
  date: Date;
  dateRequest: DateRequest;
  userId: string;
  officeUserId: string;
  status: string;
  visitDetails: VisitDetails;

  constructor() {
    this.dateRequest = new DateRequest();
  }
}

export class VisitDetails {
  interview: string;
  opinion: string;
  diagnosis: number[];
  recommendation: number[];
}

export class DateRequest {
  dateFrom: Date;
  dateTo: Date;
}
