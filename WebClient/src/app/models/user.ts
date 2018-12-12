export class User {
  id: string;
  isOfficeUser: boolean;
  officeDetails: OfficeDetails;
  userDetails: UserDetails;
  address: Address;
  roleName: string;

  constructor() {
    this.userDetails = new UserDetails();
    this.address = new Address();
  }
}

export class OfficeDetails {
  pwz: number;
  degree: string;
  isSpecialist: boolean;
}

export class UserDetails {
  firstName: string;
  middleName: string;
  lastName: string;
  familyName: string;
  birthday: string;
  gender: string;
  pesel: number;
  phone: number;
}

export class Address {
  city: string;
  street: string;
  houseNumber: number;
  apartmentNumber: number;
  voivodeship: string;
  zip: string;
}


