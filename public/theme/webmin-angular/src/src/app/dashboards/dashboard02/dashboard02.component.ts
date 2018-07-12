import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';
import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
import { ViewportCoordinate, Service } from './../../VectorService';

import * as shape from 'd3-shape';

@Component({
  selector: 'app-dashboard02',
  providers: [Service],
  templateUrl: './dashboard02.component.html',
  styleUrls: ['./dashboard02.component.scss']
})
export class Dashboard02Component implements OnInit {

  constructor(private _commondata: CommonDataService, service: Service ) {
    this.centerValue = "0.000, 46.036";
    this.zoomFactorValue = "1.00";
    this.viewportData = service.getCoordinates();
   }

   // Pie Chart
    public pieChartLabels = ['Iphone 7', 'Windows'];
    public pieChartData = [300, 500];
    public pieChartType = 'pie';
    public pieChartColors = [{ backgroundColor: ["#17a2b8 ", "#ffc107"] }];
    public pieChartOptions = {
        animation: false,
        responsive: true,
        maintainAspectRatio: false
    };

   // barChart start
    public barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: false,
        barPadding: 15,
        scales: {
            xAxes: [{
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        },

    };
    public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'];
    public barChartLabels1 = ['', '', '', '', '', '', '', '', '', '', '', ''];
    public barChartType = 'bar';
    public barChartLegend = false;
    public barChartLegend1 = false;
    public barChartData = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Apple' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Instagram' },
        { data: [35, 95, 15, 26, 85, 95, 85], label: 'Google' }
    ];

    public barChartData1 = [
        { data: [65, 59, 80, 81, 62, 64, 78, 65, 59, 80, 81, 63, 70, 66, 73, 66, 72, 76, 80, 64, 71], label: '' },
    ];


    public barChartData2 = [
        { data: [65, 59, 80, 81, 56, 55, 40, 50, 60, 70], label: 'Desktop' },
        { data: [28, 48, 40, 19, 86, 27, 90, 80, 40, 50], label: 'Mobile' }
    ];
    public barChartColors = [
        {

            backgroundColor: '#17A2B8',
            borderColor: '#17A2B8',
            pointBackgroundColor: '#17A2B8',
            pointBorderColor: '#17A2B8',
            pointHoverBackgroundColor: '#17A2B8',
            pointHoverBorderColor: '#17A2B8'
        },
        {

            backgroundColor: '#E56D45',
            borderColor: '#E56D45',
            pointBackgroundColor: '#E56D45',
            pointBorderColor: '#E56D45',
            pointHoverBackgroundColor: '#E56D45',
            pointHoverBorderColor: '#E56D45'
        },
        {

            backgroundColor: '#FFC107',
            borderColor: '#FFC107',
            pointBackgroundColor: '#FFC107',
            pointBorderColor: '#FFC107',
            pointHoverBackgroundColor: '#FFC107',
            pointHoverBorderColor: '#FFC107'
        }

    ];

    public barChartColors1 = [


        {

            backgroundColor: '#FFD351',
            borderColor: '#FFD351',
            pointBackgroundColor: '#FFD351',
            pointBorderColor: '#FFD351',
            pointHoverBackgroundColor: '#FFD351',
            pointHoverBorderColor: '#FFD351'
        }

    ];

    public barChartColors2 = [
        {

            backgroundColor: '#ffc107',
            borderColor: '#ffc107',
            pointBackgroundColor: '#ffc107',
            pointBorderColor: '#ffc107',
            pointHoverBackgroundColor: '#ffc107',
            pointHoverBorderColor: '#ffc107'
        },
        {

            backgroundColor: '#28a745',
            borderColor: '#28a745',
            pointBackgroundColor: '#28a745',
            pointBorderColor: '#28a745',
            pointHoverBackgroundColor: '#28a745',
            pointHoverBorderColor: '#28a745'
        }

    ];
    // barChart end

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

    // events
    public chartClicked(e: any): void {
        //your code here
    }

    public chartHovered(e: any): void {
        //your code here
    }

    onSelect(event) {
        //your code here
    }


    areaChartCurve = shape.curveBasis;

    //Arear Chart start
    areaChartColorScheme = {
        domain: ['#BBE4E0', '#FDCBBB']
    };

 

    areaChartMulti = [
        {
            "name": "Positive",
            "series": [
                {
                    "name": "1",
                    "value": 0
                },
                {
                    "name": "2",
                    "value": 23
                },
                {
                    "name": "3",
                    "value": 43
                },
                {
                    "name": "4",
                    "value": 35
                },
                {
                    "name": "5",
                    "value": 44
                },
                {
                    "name": "6",
                    "value": 45
                },
                {
                    "name": "7",
                    "value": 56
                }
                ,
                {
                    "name": "8",
                    "value": 37
                }
                ,
                {
                    "name": "9",
                    "value": 40
                }
            ]
        },

        {
            "name": "Negative",
            "series": [
                {
                    "name": "1",
                    "value": 25
                },
                {
                    "name": "2",
                    "value": 15
                },
                {
                    "name": "3",
                    "value": 26
                },
                {
                    "name": "4",
                    "value": 24
                },
                {
                    "name": "5",
                    "value": 25
                },
                {
                    "name": "6",
                    "value": 32
                },
                {
                    "name": "7",
                    "value": 30
                }
                ,
                {
                    "name": "8",
                    "value": 24
                }
                ,
                {
                    "name": "9",
                    "value": 19
                }
            ]
        },
    ];

    areaChartGradient = false;

    areaChartShowXAxis = false;
    areaChartShowXAxisLabel = false;

    areaChartShowYAxis = false;
    areaChartShowYAxisLabel = false;
    areaChartShowLegend = false;
    areaChartXAxisLabel = 'Country';
    areaChartYAxisLabel = 'Population';
    areaChartAutoScale = true;
    areaChartLineInterpolation = shape.curveBasis;

    onAreaChartSelect(event) {
        //your code here
    }

  //Arear Chart end

  // areaChart
    public areaChartData = [

        { data: [0, 100, 50, 120, 70, 140, 100], label: 'Series A' },
        { data: [50, 180, 110, 190, 120, 220, 150], label: 'Series B' }

    ];
    public areaChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public areaChartOptions = {
        animation: {
            duration: 1000, // general animation time
            easing: 'easeOutBack'
        },
        hover: {
            animationDuration: 1000, // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 1000, // animation duration after a resize
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        },
    };
    public areaChartColors = [
        {

            backgroundColor: 'rgba(30, 166, 154, 1)',
            borderColor: 'transparent',
            pointBackgroundColor: '#FFF',
            pointBorderColor: 'rgba(30, 166, 154, 1)',
            pointHoverBackgroundColor: 'rgba(30, 166, 154, 1)',
            pointRadius: '5',
            pointHoverBorderColor: '#FFF',
            pointHoverRadius: '5',
            pointBorderWidth: '2'
        },
        {

            backgroundColor: 'rgba(236, 236, 236, 1)',
            borderColor: 'transparent',
            pointBackgroundColor: '#FFF',
            pointBorderColor: 'rgba(236, 236, 236, 1)',
            pointHoverBackgroundColor: 'rgba(236, 236, 236, 1)',
            pointRadius: '5',
            pointHoverBorderColor: '#FFF',
            pointHoverRadius: '5',
            pointBorderWidth: '2'
        },

    ];
    public areaChartLegend = false;
    public areaChartType = 'line';
  //Arear Chart end

  //line Chart start
    lineChartColorScheme = {
        domain: ['#45bbe0', '#f06292']
    };

    lineChartSingleColorScheme = {
        domain: ['#BFE5C7']
    };


    lineChartMulti = [
        {
            "name": "",
            "series": [
                {
                    "name": "1",
                    "value": 0
                },
                {
                    "name": "2",
                    "value": 23
                },
                {
                    "name": "3",
                    "value": 43
                },
                {
                    "name": "4",
                    "value": 35
                },
                {
                    "name": "5",
                    "value": 44
                },
                {
                    "name": "6",
                    "value": 45
                },
                {
                    "name": "7",
                    "value": 56
                },
                {
                    "name": "8",
                    "value": 37
                }
                ,
                {
                    "name": "9",
                    "value": 40
                }


            ]
        },

        {
            "name": " ",
            "series": [
                {
                    "name": "1",
                    "value": 25
                },
                {
                    "name": "2",
                    "value": 23
                },
                {
                    "name": "3",
                    "value": 26
                },
                {
                    "name": "4",
                    "value": 24
                },
                {
                    "name": "5",
                    "value": 25
                },
                {
                    "name": "6",
                    "value": 32
                },
                {
                    "name": "7",
                    "value": 30
                }
                ,
                {
                    "name": "8",
                    "value": 24
                }
                ,
                {
                    "name": "9",
                    "value": 19
                }

            ]
        },
    ];

    lineChartSingle = [
        {
            "name": "",
            "series": [
                {
                    "name": "1",
                    "value": 0
                },
                {
                    "name": "2",
                    "value": 23
                },
                {
                    "name": "3",
                    "value": 43
                },
                {
                    "name": "4",
                    "value": 35
                },
                {
                    "name": "5",
                    "value": 44
                },
                {
                    "name": "6",
                    "value": 45
                },
                {
                    "name": "7",
                    "value": 56
                },
                {
                    "name": "8",
                    "value": 37
                }
                ,
                {
                    "name": "9",
                    "value": 40
                }


            ]
        }
    ];

    lineChartGradient = true;

    lineChartShowXAxis = false;
    lineChartShowXAxisLabel = false;

    lineChartShowYAxis = false;
    lineChartShowYAxisLabel = false;
    lineChartShowLegend = false;
    lineChartXAxisLabel = 'Country';
    lineChartYAxisLabel = 'Population';
    lineChartAutoScale = true;
    lineChartLineInterpolation = shape.curveBasis;
    

  ngOnInit() {
  	this._commondata.setExpandDiv('dashboard');
setTimeout(_ => this._commondata.showLoader(false), 200);

  }

  OpenMenu(sectionName, Wrapdiv) {
        var CurrentCls = document.getElementById(sectionName).getAttribute("class");
        if (CurrentCls == "dropdown-menu")
        {
            document.getElementById(sectionName).setAttribute("class", "dropdown-menu show");
            document.getElementById(sectionName).previousElementSibling.setAttribute("aria-expanded", "true");
            document.getElementById(Wrapdiv).setAttribute("class", "btn-group info-drop show");
        }
        else {
            document.getElementById(sectionName).setAttribute("class", "dropdown-menu");
            document.getElementById(sectionName).previousElementSibling.setAttribute("aria-expanded", "false");
            document.getElementById(Wrapdiv).setAttribute("class", "btn-group info-drop");
        }
}

  lat: number = -37.817214;
    lng: number = 144.955925;
    zoom: number = 16;
    decimalCurrentRate = 5;
    MaxRating = 5;
    ss = 'fa fa-sta';
    decimalCurrentRate1 = 4.5;
    decimalCurrentRate2 = 3.5;
    decimalCurrentRate3 = 2.5;
    decimalCurrentRate4 = 1.5;


    worldMap: any = mapsData.world;
    zoomFactorValue: string;
    centerValue: string;
    viewportData: ViewportCoordinate[];

   
    zoomChanged(e) {
        this.zoomFactorValue = e.zoomFactor.toFixed(2);
    }

    centerChanged(e) {
        this.centerValue = e.center[0].toFixed(3) +
            ", " + e.center[1].toFixed(3);
    }

}
