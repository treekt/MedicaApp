export interface User {
  id: string;
  isUserOffice: boolean;
  userDetails: UserDetails;
  address: Address;
  roleId: number;
}

export interface OfficeUser {
  id: string;
  pwz: number;
  degree: string;
  userId: string;
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  familyName: string;
  birthday: Date;
  gender: string;
  pesel: number;
  phone: number;
}

export interface Address {
  city: string;
  street: string;
  houseNr: number;
  apartmentNr: number;
  voivodeship: string;
  zip: string;
}


