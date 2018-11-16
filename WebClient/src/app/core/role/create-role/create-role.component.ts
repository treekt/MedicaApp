import {Component, OnInit} from '@angular/core';
import {UserRestService} from '../../../services/rest/user-rest.service';
import {Permission} from '../../../models/permission';
import {map} from 'rxjs/operators';
import {Role} from '../../../models/role';
import {RoleRestService} from '../../../services/rest/role-rest.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {
  permissions: Permission[];
  role: Role;

  constructor(private roleRestService: RoleRestService) {
  }

  ngOnInit() {
    this.getAvailablePermissions();
    this.role = new Role();
  }


  getAvailablePermissions() {
    this.roleRestService.getPermissions().pipe(
      map(response => response.map(permission => ({id: permission.id, name: permission.name, checked: true}))))
      .subscribe(result => this.permissions = result);
  }

  addNameToRole($event) {
    this.role.name = $event.target.value;
  }

  addPermissionToRole(permission: Permission) {
    if (permission.checked) {
      this.role.permissions.push(permission.id);
    } else {
      const permissionIndex = this.role.permissions.indexOf(permission.id);
      if (permissionIndex !== -1) {
        this.role.permissions.splice(permissionIndex);
      }
    }
  }

  saveRole() {
    this.roleRestService.saveRole(this.role)
      .subscribe(result => console.log('success ' + result));
  }

}
