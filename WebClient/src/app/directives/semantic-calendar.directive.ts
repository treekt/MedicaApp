import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';

declare var $: any;

@Directive({
  selector: '[semanticCalendar]'
})
export class SemanticCalendarDirective implements AfterViewInit {

  @Input()
  calendarType: string;

  @Output()
  changeDate = new EventEmitter();


  constructor(private calendar: ElementRef) {
  }

  ngAfterViewInit(): void {
    const self = this;
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
        ampm: false,
        type: this.calendarType,
        formatter: {
          date: function (date) {
            if (!date) { return ''; }
            let day = date.getDate() + '';
            if (day.length < 2) {
              day = '0' + day;
            }
            let month = (date.getMonth() + 1) + '';
            if (month.length < 2) {
              month = '0' + month;
            }
            const year = date.getFullYear();
            return year + '-' + month + '-' + day;
          }
        },
        onChange: function (date, text, mode) {
          self.changeDate.emit(text);
        },
      }
    );
  }



}
