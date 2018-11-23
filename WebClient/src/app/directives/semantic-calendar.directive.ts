import {AfterViewInit, Directive, ElementRef} from '@angular/core';

declare var $: any;

@Directive({
  selector: '[semanticCalendar]'
})
export class SemanticCalendarDirective implements AfterViewInit {

  constructor(private calendar: ElementRef) {
  }

  ngAfterViewInit(): void {
    $(this.calendar.nativeElement).calendar();
  }

}
