import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Permission} from '../models/permissions';

@Directive({
  selector: '[showPrivileged]'
})
export class ShowPrivilegedDirective implements OnInit {

  permission: Permission;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private authService: AuthService) {
  }

  @Input() set showPrivileged(permission: Permission) {
    this.permission = permission;
  }

  ngOnInit(): void {
    if (this.authService.permissions.includes(this.permission.id)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }



}
