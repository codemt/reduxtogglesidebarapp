import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-popover-tooltips',
  templateUrl: './popover-tooltips.component.html',
  styleUrls: ['./popover-tooltips.component.scss']
})
export class PopoverTooltipsComponent implements OnInit {

    constructor(private _commondata: CommonDataService) { }

    ngOnInit() {
        this._commondata.setExpandDiv('elements');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

}
