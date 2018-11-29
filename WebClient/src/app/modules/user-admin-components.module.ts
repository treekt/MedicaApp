import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from '../core/user/user-list/user-list.component';
import {CreateUserComponent} from '../core/user/create-user/create-user.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    UserListComponent,
    CreateUserComponent,
  ],
  exports: [
    UserListComponent,
    CreateUserComponent,
  ]
})
export class UserAdminComponentsModule { }
