export class User {
  id: string;
  isUserOffice: boolean;
  userDetails: UserDetails;
  address: Address;
  roleId: number;
}

export class OfficeUser {
  id: string;
  pwz: number;
  degree: string;
  userId: string;
}

export class UserDetails {
  firstName: string;
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


