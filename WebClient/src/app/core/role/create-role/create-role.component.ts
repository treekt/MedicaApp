import {Component, Input, OnInit} from '@angular/core';
import {UserRestService} from '../../../services/rest/user-rest.service';
import {Permission} from '../../../models/permission';
import {map} from 'rxjs/operators';
import {Role} from '../../../models/role';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {
  permissions: Permission[];
  role: Role;

  constructor(private userRestService: UserRestService) {
  }

  ngOnInit() {
    this.userRestService.getPermissions().pipe(
      map(response => response.map(permission => ({id: permission.id, name: permission.name, checked: true})))).subscribe(
      result => this.permissions = result
    );

    this.role = new Role();
  }


  saveRole() {
    this.role.id = 4;
    this.userRestService.saveRole(this.role).subscribe(result => console.log('success ' + result));
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

  addNameToRole($event) {
    this.role.name = $event.target.value;
  }
}
