import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  permissions = [
    {id: 1, name: 'Przyjmowanie wizyt', checked: false},
    {id: 2, name: 'Umawianie pacjentów', checked: true},
    {id: 3, name: 'Wystawianie recept', checked: false},
    {id: 4, name: 'Wystawianie zwolnień lekarskich', checked: false},
    {id: 5, name: 'Przeprowadzanie badań', checked: false}
  ];

  constructor() { }

  ngOnInit() {
  }


}
