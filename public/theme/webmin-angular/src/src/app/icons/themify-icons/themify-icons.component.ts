import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-themify-icons',
  templateUrl: './themify-icons.component.html',
  styleUrls: ['./themify-icons.component.scss']
})
export class ThemifyIconsComponent implements OnInit {

    constructor(private _commondata: CommonDataService) { }

    ngOnInit() {
        this._commondata.setExpandDiv('font-icon');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

}
