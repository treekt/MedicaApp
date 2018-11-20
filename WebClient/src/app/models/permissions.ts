export class Permission {

  private static values: Permission[] = [];

  static readonly CREATE_PATIENT_ACCOUNT = new Permission(101, 'Tworzenie konta pacjenta');
  static readonly PATIENT_LIST = new Permission(102, 'Przeglądanie listy pacjentów');

  private constructor(public readonly id: number, public readonly name: string) {
    Permission.values.push(this);
  }

  public static allValues() {
    return Permission.values;
  }

}


