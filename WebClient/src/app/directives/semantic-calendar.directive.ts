import {AfterViewInit, Directive, ElementRef} from '@angular/core';

declare var $: any;

@Directive({
  selector: '[semanticCalendar]'
})
export class SemanticCalendarDirective implements AfterViewInit {

  constructor(private calendar: ElementRef) {
  }

  ngAfterViewInit(): void {
    $(this.calendar.nativeElement).calendar(
      {
        text: {
          days: ['Ndz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'],
          months: [
            'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
            'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
          monthsShort: [
            'Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze',
            'Lip', 'Sie', 'Wrz', 'Paz', 'Lis', 'Gru'],
          today: 'Dzisiaj',
          now: 'Teraz',
          am: 'AM',
          pm: 'PM'
        },
        type: 'date'
      }
    );
  }

}
