import { Component, OnInit } from '@angular/core';
import { LoginChartService } from '../login-chart/login-chart.service';
import { Chart } from 'chart.js';
import { GatewaysService } from '../../gateways.service';

@Component({
  selector: 'app-login-chart',
  templateUrl: './login-chart.component.html',
  styleUrls: ['./login-chart.component.css']
})
export class LoginChartComponent implements OnInit {

  constructor(private loginChartService: LoginChartService, private gatewayService: GatewaysService) { }
  chart = [];
  gateways: object;
  value: object;

  ngOnInit(): void {
    this.getChartData();
    this.getGateways();
  }

  getChartData() {
    // Get initial chart data
    this.loginChartService.getLogins(this.value).subscribe(res => {
      const labels = res.map(res => res.date);
      const data = res.map(res => res.logins);
      this.createChart(labels, data);
    });
    // Each 3 seconds get new data
    /*
    interval(3000)
      .pipe(
        startWith(1),
      switchMap(() => this.loginChartService.getNew()))
        .subscribe(res => {
          const labels = res.map(res => res.time);
          const data = res.map(res => res.Login);
          this.addData(this.chart, labels, data);
          this.removeData(this.chart);

    });
    */
  }
  getGateways() {
    this.gatewayService.getGateways().subscribe(res => {
      this.gateways = res;
    });
  }
  addData(chart, labels, data) {
    chart.data.labels.push(labels);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
  }
  removeData(chart) {
    if (chart.data.datasets[0].data.length >= 50) {
      chart.data.labels.shift();
      chart.data.datasets.forEach((dataset) => {
        dataset.data.shift();
      });
      chart.update();
    }
  }
  clearChart(chart) {
    chart.data.datasets = '';
  }
  createChart(labels, data) {
    // Chart Settings Object
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            borderColor: '#3cba9f',
            fill: true
          }
        ]
      },
      options: {
        animation: {
          duration: 3000
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true
            }
          }],
        }
      }
    });
  }
  updateDataSource() {
    this.loginChartService.getLogins(this.value).subscribe(res => {
      const labels = res.map(res => res.date);
      const data = res.map(res => res.logins);
      // Destrony current chart before drawing new one
      //this.chart.destroy();
      this.createChart(labels, data);
    });
  }

}
