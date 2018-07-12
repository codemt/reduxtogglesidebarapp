import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { CommonDataService } from './../../common-data.service';
import * as shape from 'd3-shape';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-dashboard05',
  templateUrl: './dashboard05.component.html',
  styleUrls: ['./dashboard05.component.scss']
})
export class Dashboard05Component implements OnInit {

    public scrollbarY = { axis: 'y', theme: 'minimal-dark'}

  constructor(public _commondata: CommonDataService) { }

  // Doughnut start
  public doughnutChartLabels = ['Used','Not-used'];
  public doughnutChartData = [77,23];
  public doughnutChartType = 'doughnut';
  public doughnutChartColors =[{ backgroundColor: ["#84BA3F",'#E5E5E5'] }];
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

    // Doughnut end


    //Arear Chart start
    areaChartColorScheme = {
        domain: ['#BBE4E0', '#FDCBBB']
    };

    areaChartColorScheme1 = {
        domain: ['#fff']
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
                display: true,
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
                display: true,
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
    public areaChartLegend = true;
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

    onlineChartSelect(event) {
        //your code here
    }

  //Arear Chart end


    // barChart start
    public barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: false

    };
    public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartLabels1 = ['', '', '', '', '', '', '', '', '', '', '', ''];
    public barChartType = 'bar';
    public barChartLegend = false;
    public barChartData = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Apple' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Instagram' },
        { data: [35, 95, 15, 26, 85, 95, 85], label: 'Google' }
    ];

    public barChartData1 = [
        { data: [65, 59, 80, 81, 56, 55, 78, 65, 59, 80, 81, 56], label: '' },
    ];


    public barChartData2 = [
        { data: [65, 59, 80, 81, 56, 55, 78, 65, 59, 80, 81, 56], label: '' },
        { data: [-65, -59, -80, -81, -56, -55, -78, -65, -59, -80, -81, -56], label: '' }
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

            backgroundColor: '#C2C4C6',
            borderColor: '#C2C4C6',
            pointBackgroundColor: '#C2C4C6',
            pointBorderColor: '#C2C4C6',
            pointHoverBackgroundColor: '#C2C4C6',
            pointHoverBorderColor: '#C2C4C6'
        },
        {

            backgroundColor: '#DC3545',
            borderColor: '#DC3545',
            pointBackgroundColor: '#DC3545',
            pointBorderColor: '#DC3545',
            pointHoverBackgroundColor: '#DC3545',
            pointHoverBorderColor: '#DC3545'
        }

    ];
    // barChart end



    // Doughnut Site visit start
    public SVdoughnutChartLabels = [' ', ' '];
    public SVdoughnutChartData = [77, 23];
    public SVdoughnutChartType = 'doughnut';
    public SVdoughnutChartColors = [{ backgroundColor: ["#DC3545", '#E5E5E5'] }];
    public SVdoughnutChartColors1 = [{ backgroundColor: ["#28A745", '#E5E5E5'] }];
    public SVdoughnutChartColors2 = [{ backgroundColor: ["#17A2B8", '#E5E5E5'] }];
    public SVdoughnutChartColors3 = [{ backgroundColor: ["#ffc107", '#E5E5E5'] }];
    public SVdoughnutChartOptions = {
        animation: false,
        responsive: true,
        maintainAspectRatio: false
    };
    // Doughnut Site visit end

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
}
