import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Permission} from '../../models/permissions';
import {AuthService} from '../../services/auth.service';

@Directive({
  selector: '[showPrivileged]'
})
export class ShowPrivilegedDirective implements OnInit {


  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  // @Input('showPrivileged') set showPrivileged(permission: Permission) {
  //   this.giveAccess(this.authService.permissions.includes(permission.id));
  // }

  @Input('showPrivileged') set showPrivilegedMany(requiredPermissions: number[]) {
    let privileged = false;
    for (const permission of requiredPermissions) {
      if (this.authService.getPermissionsOfAuthenticatedUser().indexOf(permission) > -1) {
        privileged = true;
      }
    }
    this.giveAccess(privileged);
  }

  giveAccess(lever: boolean) {
    if (lever) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }


}
