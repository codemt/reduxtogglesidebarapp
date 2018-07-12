import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {

    constructor(private _commondata: CommonDataService) { }

    ngOnInit() {
        this._commondata.setExpandDiv('Form');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

}
