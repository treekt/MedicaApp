import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SemanticDropdownDirective} from './semantic-dropdown.directive';
import {SemanticCalendarDirective} from './semantic-calendar.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SemanticDropdownDirective,
    SemanticCalendarDirective
  ],
  exports: [
    SemanticDropdownDirective,
    SemanticCalendarDirective
  ]
})
export class DirectiveModule { }
