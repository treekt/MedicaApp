import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SemanticDropdownDirective} from '../directives/semantic-dropdown.directive';
import {SemanticCalendarDirective} from '../directives/semantic-calendar.directive';
import {ShowPrivilegedDirective} from '../directives/show-privileged.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SemanticDropdownDirective,
    SemanticCalendarDirective,
    ShowPrivilegedDirective
  ],
  exports: [
    SemanticDropdownDirective,
    SemanticCalendarDirective,
    ShowPrivilegedDirective
  ],

})
export class DirectiveModule { }
