import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

    constructor(private _commondata: CommonDataService) { }

    ngOnInit() {
        this._commondata.setExpandDiv('elements');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

}
