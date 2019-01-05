import {Component, OnInit} from '@angular/core';
import * as CanvasJS from './../../../../../canvas/canvasjs.min.js';
import {VisitRestService} from '../../../services/rest/visit-rest.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-monthly-visits-chart',
  templateUrl: './month-visits-chart.component.html'
})
export class MonthVisitsChartComponent implements OnInit {

  year: number;
  month: number;

  dataPoints: any;

  constructor(private visitRest: VisitRestService) {
  }

  ngOnInit() {
    const today = new Date();
    this.year = today.getFullYear();
    this.month = today.getMonth() + 1;
    this.constructChart();
  }

  constructChart() {
    if (this.year && this.month) {
      this.visitRest.countVisitsPerDayInMonthAndYear(this.year, this.month - 1).pipe(
        map(res =>
          res.map(item => ({
            y: Math.floor(Math.random() * Math.floor(100)),
            x: new Date(this.year, this.month - 1, item.day),
            name: new Date(this.year, this.month - 1, item.day + 1).toISOString().substr(0, 10)
          })))
      ).subscribe(result => {
        this.dataPoints = result;
        this.renderChart();
      });
    }
  }

  renderChart() {
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Wizyty w miesiącu'
      },
      axisX: {
        valueFormatString: 'YYYY-MM-DD',
        labelAngle: -50
      },
      toolTip: {
        content: '{name}: {y}'
      },
      data: [{
        type: 'area',
        color: 'green',
        dataPoints: this.dataPoints
      }]
    });

    chart.render();
  }
}
