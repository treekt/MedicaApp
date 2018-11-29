import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.component.html'
})
export class SelectCardComponent implements OnInit {

  @Input()
  iconClasses;
  @Input()
  title;
  @Input()
  description;
  @Input()
  buttonName;
  @Input()
  routeAddress;

  constructor() {
  }

  ngOnInit() {
  }


}
