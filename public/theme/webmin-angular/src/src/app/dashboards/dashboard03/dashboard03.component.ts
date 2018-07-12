import { Component,ChangeDetectionStrategy, OnInit, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import {startOfDay,endOfDay,subDays,addDays,endOfMonth,isSameDay,isSameMonth,addHours} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonDataService } from './../../common-data.service';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import {CalendarEvent,CalendarEventAction,CalendarEventTimesChangedEvent} from 'angular-calendar';

import * as shape from 'd3-shape';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-dashboard03',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard03.component.html',
  styleUrls: ['./dashboard03.component.scss']
})
export class Dashboard03Component implements OnInit {

    public scrollbarY = { axis: 'y', theme: 'minimal-dark'}

    @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen: boolean = true;

    constructor(public _commondata: CommonDataService, private modal: NgbModal) { 
    }

    
    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }


    ngOnInit() {
      this._commondata.setExpandDiv('dashboard');
      setTimeout(_ => this._commondata.showLoader(false), 200);
  }

  
    onSelect(event) {
        //your code here
    }

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

    // Doughnut end


    //Arear Chart start
    areaChartColorScheme = {
        domain: ['#BBE4E0', '#FDCBBB']
    };

    areaChartColorScheme1 = {
        domain: ['#E35D6A']
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

    lineChartGradient = false;

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
