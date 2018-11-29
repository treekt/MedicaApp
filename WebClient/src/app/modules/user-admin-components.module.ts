import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from '../core/user/user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserListComponent
  ],
  exports: [
    UserListComponent
  ]
})
export class UserAdminComponentsModule { }
