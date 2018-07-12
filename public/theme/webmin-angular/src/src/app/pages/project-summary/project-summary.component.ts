import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent implements OnInit {

  constructor(private _commondata: CommonDataService) { }

  ngOnInit() {
  	this._commondata.setExpandDiv('custom-page');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

  // Doughnut start
    public doughnutChartLabels = ['Consulting', 'Sales', 'Commission'];
    public doughnutChartData = [40, 35,21];
    public doughnutChartType = 'doughnut';
    public doughnutChartColors = [{ backgroundColor: ["#84BA3F", '#E5E5E5','#45BBE0'] }];
    public doughnutChartOptions = {
        animation: false,
        responsive: true,
        maintainAspectRatio: false
    };

    // Pie
    public pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData = [300, 500, 100];
    public pieChartType = 'pie';
    public pieChartColors = [{ backgroundColor: ["rgba(0, 157, 160, 0.8)", "rgba(28, 188, 216, 0.8)", "rgba(255, 141, 96, 0.8)"] }];
    public pieChartOptions = {
        animation: false,
        responsive: true,
        maintainAspectRatio: false
    };

    // events
public chartClicked(e: any): void {
    //your code here
}

public chartHovered(e: any): void {
    //your code here
}
}
