import {Injectable} from '@angular/core';

@Injectable()
export class Permission {

  private static values: Permission[] = [];

  static readonly CREATE_USER_ACCOUNT = new Permission(201, 'Tworzenie konta pacjenta');
  static readonly USER_LIST = new Permission(202, 'Przeglądanie listy pacjentów');

  constructor(public readonly id: number, public readonly name: string) {
    Permission.values.push(this);
  }

  public static allValues() {
    return Permission.values;
  }


}


