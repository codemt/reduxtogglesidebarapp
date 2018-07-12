import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-fontawesome-icon',
  templateUrl: './fontawesome-icon.component.html',
  styleUrls: ['./fontawesome-icon.component.scss']
})
export class FontawesomeIconComponent implements OnInit {

    constructor(private _commondata: CommonDataService) { }

    ngOnInit() {
        this._commondata.setExpandDiv('font-icon');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

}
