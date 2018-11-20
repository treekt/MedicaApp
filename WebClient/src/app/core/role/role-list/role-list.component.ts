import {Component, OnInit} from '@angular/core';
import {Role} from '../../../models/role';
import {RoleRestService} from '../../../services/rest/role-rest.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html'
})
export class RoleListComponent implements OnInit {
  roles: Role[];



  constructor(private roleRestService: RoleRestService) {
  }

  ngOnInit() {
    this.getAllRoles();
  }

  getAllRoles() {
    this.roleRestService.getAllRoles().subscribe(success => this.roles = success);
  }

  delete(role: Role) {
    this.roleRestService.deleteRole(role.id).subscribe(success => console.log(success));
    const roleIndex = this.roles.indexOf(role);
    this.roles.splice(roleIndex, 1);
  }

  edit(role: Role) {
  }
}
