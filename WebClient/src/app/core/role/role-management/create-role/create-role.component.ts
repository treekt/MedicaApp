import {Component, Input, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Permission} from '../../../../models/permission';
import {Role} from '../../../../models/role';
import {RoleRestService} from '../../../../services/rest/role-rest.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  permissions: Permission[];
  @Input()
  role: Role = new Role();

  constructor(private roleRestService: RoleRestService) {
  }

  ngOnInit() {
    this.initAvailablePermissions();
    if (this.role !== null) {
      this.fillCheckedPermissions();
    }
  }


  initAvailablePermissions() {
    this.roleRestService.getPermissions().pipe(
      map(response => response.map(permission => ({id: permission.id, name: permission.name, checked: true}))))
      .subscribe(result => this.permissions = result);
  }

  mapCheckedPermissionsToRole() {
    const permissionsList = [];
    for (const permission of this.permissions) {
      if (permission.checked) {
        permissionsList.push(permission.id);
      }
    }
    this.role.permissions = permissionsList;
  }

  saveRole() {
    this.mapCheckedPermissionsToRole();
    this.roleRestService.saveRole(this.role)
      .subscribe(result => console.log('success ' + result));
  }

  updateName($event) {
    this.role.name = $event.target.value;
  }

  fillCheckedPermissions() {
    for (const permissionId of this.role.permissions) {
      for (const permission of this.permissions) {
        if (permission.id === permissionId) {
          permission.checked = true;
        }
      }
    }
  }

}
