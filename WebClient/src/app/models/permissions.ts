import {Injectable} from '@angular/core';

@Injectable()
export class Permission {

  private static values: Permission[] = [];

  static readonly CREATE_PATIENT_ACCOUNT = new Permission(201, 'Tworzenie konta pacjenta');
  static readonly DELETE_PATIENT = new Permission(202, 'Usuwanie konta pacjenta');
  static readonly DISPLAY_PATIENT_LIST = new Permission(203, 'Wyświetalnie listy pacjentów');
  static readonly CREATE_VISIT_FOR_SPECIALIST_AND_PATIENT = new Permission(204, 'Umawianie wizyty dla specjalisty i pacjenta');
  static readonly CREATE_VISIT_BY_SPECIALIST = new Permission(205, 'Umawianie wizyty przez specjaliste');
  static readonly DISPLAY_VISIT_LIST = new Permission(207, 'Wyświetlanie listy wizyt');
  static readonly DISPLAY_VISIT_DETAILS = new Permission(208, 'Wyświetlanie szczegółów wizyty');
  static readonly MAKE_VISIT = new Permission(209, 'Przeprowadzanie wizyty');
  static readonly DELETE_VISIT = new Permission(210, 'Odwoływanie wizyty');
  static readonly SEARCH_AND_DISPLAY_DESEASES = new Permission(211, 'Szukanie i wyświetlanie informacji o chorobie');
  static readonly SEARCH_AND_DISPLAY_MEDICINES = new Permission(212, 'Szukanie i wyświetlanie informacji o lekarstwach');
  static readonly FILTER_DISPLAYED_VISIT_LIST = new Permission(213, 'Filtrowanie wyświetlonej listy wizyt');
  static readonly DISPLAY_HOME_VISIT_LIST = new Permission(214, 'Wyświetlanie wizyt na stronie domowej');


  constructor(public readonly id: number, public readonly name: string) {
    Permission.values.push(this);
  }

  public static allValues() {
    return Permission.values;
  }


}


