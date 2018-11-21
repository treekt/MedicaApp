import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html'
})
export class RoleManagementComponent implements OnInit {

  selectedItem: string;


  constructor() {
  }

  ngOnInit() {
  }

  selectItem(itemName: string) {
    this.selectedItem = itemName;
  }
}
