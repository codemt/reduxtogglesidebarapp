import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-app-contacts',
  templateUrl: './app-contacts.component.html',
  styleUrls: ['./app-contacts.component.scss']
})
export class AppContactsComponent implements OnInit {

    constructor(private _commondata: CommonDataService) { }

    ngOnInit() {
        this._commondata.setExpandDiv('custom-page');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

}
