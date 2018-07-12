import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-data-local',
  templateUrl: './data-local.component.html',
  styleUrls: ['./data-local.component.scss']
})
export class DataLocalComponent implements OnInit {

  constructor(private _commondata: CommonDataService) { 

  }

  ngOnInit() {
  	this._commondata.setExpandDiv('Table');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

}
