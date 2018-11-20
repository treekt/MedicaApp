import {Component, OnInit} from '@angular/core';
import {Role} from '../../../../models/role';
import {RoleRestService} from '../../../../services/rest/role-rest.service';
import {Permission} from '../../../../models/permissions';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html'
})
export class CreateRoleComponent implements OnInit {

  permissions: Permission[];
  role: Role;

  constructor(private roleRestService: RoleRestService) {
  }

  ngOnInit() {
    this.permissions = Permission.allValues();
    this.role = new Role();
  }


  saveRole() {
    this.roleRestService.saveRole(this.role)
      .subscribe(result => console.log('success ' + result));
  }

  onCheckboxChange(permission, $event) {
    if ($event.target.checked) {
      this.role.permissions.push(permission.id);
    } else {
      const permissionsIndex = this.role.permissions.indexOf(permission.id);
      this.role.permissions.splice(permissionsIndex, 1);
    }
  }


}
