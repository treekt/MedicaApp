import {Component, OnInit} from '@angular/core';
import * as CanvasJS from './../../../../../canvas/canvasjs.min.js';
import {UserRestService} from '../../../services/rest/user-rest.service';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-user-types-chart',
  templateUrl: './user-types-chart.component.html'
})
export class UserTypesChartComponent implements OnInit {

  dataPoints: any;

  constructor(private userService: UserRestService) {
  }

  ngOnInit() {
    this.userService.countUserTypes().pipe(
      map(res =>
        res.map(item => ({
          y: Math.floor(Math.random() * Math.floor(100)),
          name: item.name
        })))
    ).subscribe(result => {
      this.dataPoints = result;
      this.renderChart();
    });
    this.renderChart();
  }

  renderChart() {
    const chart = new CanvasJS.Chart('chartContainer', {
      theme: 'light2',
      animationEnabled: true,
      title: {
        text: 'Istniejący użytkownicy'
      },
      data: [{
        type: 'pie',
        showInLegend: true,
        toolTipContent: '<b>{name}</b>: {y} (#percent%)',
        indexLabel: '{name} - #percent%',
        dataPoints: this.dataPoints
      }]
    });

    chart.render();
  }

}
