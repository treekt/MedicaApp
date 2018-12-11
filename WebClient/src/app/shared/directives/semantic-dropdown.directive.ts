import {AfterViewInit, Directive, ElementRef} from '@angular/core';

declare var $: any;

@Directive({
  selector: '[semanticDropdown]'
})
export class SemanticDropdownDirective implements AfterViewInit {

  constructor(private dropdown: ElementRef) {
  }

  ngAfterViewInit(): void {
    $(this.dropdown.nativeElement).dropdown();
  }
}
