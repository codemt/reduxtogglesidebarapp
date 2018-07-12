import { Component, OnInit, Input } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

	@Input()
    public notifications: Array<INotification> = [];

    constructor(private _commondata: CommonDataService) {
        this.notifications.push({
      id: 1,
      type: 'success',
      message: 'This is an success notifications',
    }, {
      id: 2,
      type: 'info',
      message: 'This is an info notifications',
    }, {
      id: 3,
      type: 'warning',
      message: 'This is a warning notifications',
    }, {
      id: 4,
      type: 'danger',
      message: 'This is a danger notifications',
    }, {
      id: 5,
      type: 'primary',
      message: 'This is a primary notifications',
    }, {
      id: 6,
      type: 'secondary',
      message: 'This is a secondary notifications',
    }, {
      id: 7,
      type: 'light',
      message: 'This is a light notifications',
    }, {
      id: 8,
      type: 'dark',
      message: 'This is a dark notifications',
    });

     }

    public closeNotification(notification: INotification) {
        const index: number = this.notifications.indexOf(notification);
        this.notifications.splice(index, 1);
  }


    ngOnInit() {
        this._commondata.setExpandDiv('elements');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }


}

export interface INotification {
  id: number;
  type: string;
  message: string;
}