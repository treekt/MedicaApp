import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-make-visit',
  templateUrl: './make-visit.component.html',
  styleUrls: ['./make-visit.component.css']
})
export class MakeVisitComponent implements OnInit {

  step = 'interview';

  constructor() {
  }

  ngOnInit() {
  }

  goFromTo(fromStep: string, toStep: string) {
    $('#' + fromStep).removeClass('active');
    $('#' + toStep).addClass('active');
    this.step = toStep;
  }

}
