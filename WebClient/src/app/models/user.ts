export class User {
  id: string;
  isUserOffice: boolean;
  userDetails: UserDetails;
  address: Address;
  roleId: string;

  constructor() {
    this.userDetails = new UserDetails();
    this.address = new Address();
  }
}

export class OfficeUser {
  userId: string;
  pwz: number;
  degree: string;
}

export class UserDetails {
  firstName: string;
  secondName: string;
  lastName: string;
  familyName: string;
  birthday: Date;
  gender: string;
  pesel: number;
  phone: number;
}

export class Address {
  city: string;
  street: string;
  houseNr: number;
  apartmentNr: number;
  voivodeship: string;
  zip: string;
}


