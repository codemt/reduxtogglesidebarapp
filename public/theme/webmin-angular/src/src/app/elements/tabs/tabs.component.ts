import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

    constructor(private _commondata: CommonDataService) { }

    ngOnInit() {
        this._commondata.setExpandDiv('elements');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

}
