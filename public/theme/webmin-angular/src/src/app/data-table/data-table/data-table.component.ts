import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  constructor(private _commondata: CommonDataService) { }

  ngOnInit() {
  	this._commondata.setExpandDiv('Table');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

}
