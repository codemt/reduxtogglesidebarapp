import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../common-data.service';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    constructor(private _commondata: CommonDataService) { }
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

    areaChartShowXAxis = true;
    areaChartShowXAxisLabel = true;

    areaChartShowYAxis = true;
    areaChartShowYAxisLabel = true;
    areaChartShowLegend = false;
    areaChartXAxisLabel = 'Country';
    areaChartYAxisLabel = 'Population';
    areaChartAutoScale = true;
    areaChartLineInterpolation = shape.curveBasis;

    onAreaChartSelect(event) {
        //your code here
    }

  //Area Chart end


    //line Chart start
    lineChartColorScheme = {
        domain: ['#78C350', '#348CD4']
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

    lineChartShowXAxis = true;
    lineChartShowXAxisLabel = true;

    lineChartShowYAxis = true;
    lineChartShowYAxisLabel = true;
    lineChartShowLegend = false;
    lineChartXAxisLabel = 'Country';
    lineChartYAxisLabel = 'Population';
    lineChartAutoScale = true;
    lineChartLineInterpolation = shape.curveBasis;
    


    // barChart start
    public barChartOptions = {
        scaleShowVerticalLines: true,
        responsive: true,
        maintainAspectRatio: true

    };
    public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartLabels1 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    public barChartType = 'bar';
    public barChartLegend = true;
    public barChartData = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Apple' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Instagram' },
        { data: [35, 95, 15, 26, 85, 95, 85], label: 'Google' }
    ];

    public barChartData1 = [
        { data: [65, 59, 80, 81, 56, 70, 78, 65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 70, 78, 65, 59, 80, 81, 56], label: '' },
    ];

    public barChartLegend1 = false;
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

    onlineChartSelect(event) {
        //your code here
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
    // Doughnut end
    ngOnInit() {
setTimeout(_ => this._commondata.showLoader(false), 200);
  }


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


    // lineChart
    public lineChartData = [

        { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' },
        { data: [45, 25, 16, 36, 67, 18, 76], label: 'My Third dataset - No bezier' }

    ];
    public lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions = {
        animation: {
            duration: 1000, // general animation time
            easing: 'easeOutBack'
        },
        hover: {
            animationDuration: 1000, // duration of animations when hovering an item
            mode: 'label'
        },
        responsiveAnimationDuration: 1000, // animation duration after a resize
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
        },
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
        title: {
            display: true,
            text: 'Line Chart - Legend'
        }
    };
    public lineChartColors = [

        {

            fill: false,
            borderDash: [5, 5],
            borderColor: "#9C27B0",
            pointBorderColor: "#9C27B0",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        },
        {

            fill: false,
            borderDash: [5, 5],
            borderColor: "#00A5A8",
            pointBorderColor: "#00A5A8",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        },
        {
            lineTension: 0,
            fill: false,
            borderColor: "#FF7D4D",
            pointBorderColor: "#FF7D4D",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        },

    ];
    public lineChartLegend = true;
    public lineChartType = 'line';

    // events
    public chartClicked(e: any): void {
        //your code here
    }

    public chartHovered(e: any): void {
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
        legend:false,
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


    // Radar
    public radarChartLabels = ['Dancing', 'Coding', 'Sleeping', 'Designing', 'Debugging', 'Testing', 'Eating'];

    public radarChartData = [
        { data: [95, 80, 63, 21, 98, 78, 15], label: 'Series 1' },
        { data: [65, 33, 45, 95, 78, 65, 95], label: 'Series 2' }
    ];
    public radarChartType = 'radar';
    public radarChartColors = [
        {
            backgroundColor: ["rgba(255, 141, 96, 0.8)"]
        },
        {
            backgroundColor: ["rgba(0, 157, 160, 0.8)"]
        }
    ];
    public radarChartOptions = {
        animation: false,
        responsive: true,
        maintainAspectRatio: false
    };


    // scatterChart
    public scatterChartData = [

        {
            data: [
                {
                    x: 398,
                    y: 2.797e1,
                }, {
                    x: 501,
                    y: -2.996e1,
                }, {
                    x: 631,
                    y:  3.196e1,
                }, {
                    x: 794,
                    y: -3.396e1,
                }, {
                    x: 1000,
                    y: -3.596e1,
                },
                {
                    x: 1.26,
                    y: 1.711e-2,
                }, {
                    x: 1.84,
                    y: -2.708e-2,
                }, {
                    x: 1.95,
                    y: -4.285e-2,
                }, {
                    x: 2.5,
                    y: -6.772e-2,
                }, {
                    x: 2.75,
                    y: -1.068e-1,
                }, {
                    x: 3.26,
                    y: -1.681e-1,
                }, {
                    x: 3.78,
                    y: 2.635e-1,
                }, {
                    x: 5.63,
                    y: -4.106e-1,
                }, {
                    x: 6.65,
                    y: -6.339e-1,
                }, {
                    x: 7.78,
                    y: 9.659e-1,
                }, {
                    x: 10.66,
                    y: -1.445,
                }, {
                    x: 12.78,
                    y: -2.110,
                }, {
                    x: 15.85,
                    y: 2.992,
                }, {
                    x: 20.45,
                    y: -4.102,
                }, {
                    x: 25.45,
                    y: -5.429,
                }, {
                    x: 31.46,
                    y: -6.944,
                }, {
                    x: 39.18,
                    y: -8.607,
                }, {
                    x: 50.11,
                    y: -1.038e1,
                }, {
                    x: 63.11,
                    y: -1.223e1,
                }, {
                    x: 79.14,
                    y: -1.413e1,
                }, {
                    x: 100.19,
                    y: -1.607e1,
                }, {
                    x: 126.65,
                    y: -1.803e1,
                }, {
                    x: 158.45,
                    y: -2e1,
                }, {
                    x: 200.96,
                    y: -2.199e1,
                }, {
                    x: 251,
                    y: -2.398e1,
                }, {
                    x: 316,
                    y: -2.597e1,
                }
            ], label: 'V(node2)'
        }

    ];
    public scatterChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public scatterChartOptions = {
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
        title: {
            display: false,
            text: 'Chart.js Scatter Chart - Logarithmic X-Axis'
        },
        scales: {
            xAxes: [{
                type: 'logarithmic',
                position: 'bottom',
                gridLines: {
                    zeroLineColor: "rgba(0,0,0,.1)",
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    labelString: 'Frequency',
                    display: true,
                }
            }],
            yAxes: [{
                type: 'linear',
                ticks: {
                    userCallback: function (tick) {
                        return tick.toString() + "dB";
                    }
                },
                gridLines: {
                    zeroLineColor: "rgba(81,117,224,1)",
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    labelString: 'Voltage',
                    display: true
                }
            }]
        }
    };
    public scatterChartColors = [
        {

            backgroundColor: "rgba(81,117,224,.6)",
            borderColor: "transparent",
            pointBorderColor: "#5175E0",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        }

    ];
    public scatterChartLegend = true;
    public scatterChartType = 'scatter';



    // PolarArea
    public polarAreaChartLabels = ['Asp.net', 'PHP', 'Angular', 'JSON', 'Web Sevice'];
    public polarAreaChartData = [300, 500, 100, 40, 120];
    public polarAreaLegend = true;
    public ploarChartColors = [{ backgroundColor: ["rgba(0, 157, 160, 0.8)", "rgba(28, 188, 216, 0.8)", "rgba(255, 141, 96, 0.8)", "rgba(12, 194, 126, 0.8)", "rgba(255, 88, 107, 0.8)"] }];
    public polarAreaChartType = 'polarArea';
    public polarChartOptions = {
        animation: false,
        responsive: true,
        maintainAspectRatio: false
    };


    barChartColorScheme = {
        domain: ['#009DA0', '#FF8D60', '#FF586B', '#AAAAAA']
    };

    barChartmulti = this.lineChartMulti;

    barChartGradient = false;

    barChartShowXAxis = true;
    barChartShowXAxisLabel = true;
    barChartShowYAxis = true;
    barChartShowYAxisLabel = true;
    barChartShowLegend = false;
    barChartXAxisLabel = 'Country';
    barChartYAxisLabel = 'Population';


    //Pie Charts

 
    // options
    pieChartShowLegend = false;

    pieChartColorScheme = {
        domain: ['#009DA0', '#FF8D60', '#FF586B', '#AAAAAA']
    };

    // pie
    pieChartShowLabels = true;
    pieChartExplodeSlices = true;
    pieChartDoughnut = true;
    pieChartGradient = false;

    pieChart1ExplodeSlices = true;
    pieChart1Doughnut = false;

    pieChartSingle = [
        {
            "name": "Canada",
            "value": 365
        },
        {
            "name": "Austrelia",
            "value": 487
        },
        {
            "name": "China",
            "value": 698
        }
    ];

    onSelect(event) {
        //your code here
    }
}
