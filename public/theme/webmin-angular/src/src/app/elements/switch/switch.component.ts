import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

    constructor(private _commondata: CommonDataService) { }

  ngOnInit() {
      this._commondata.setExpandDiv('elements');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

}
