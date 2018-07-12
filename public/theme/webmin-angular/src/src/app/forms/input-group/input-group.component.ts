import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements OnInit {

 constructor(private _commondata: CommonDataService) { }

 ngOnInit() {
     this._commondata.setExpandDiv('Form');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }


}
