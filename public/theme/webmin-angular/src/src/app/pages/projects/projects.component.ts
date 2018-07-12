import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    constructor(private _commondata: CommonDataService) { }

    ngOnInit() {
        this._commondata.setExpandDiv('custom-page');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

}
