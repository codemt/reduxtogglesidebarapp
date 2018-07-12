import { Component, OnInit, EventEmitter } from '@angular/core';
import { CommonDataService } from './../../common-data.service';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-nicescroll',
  templateUrl: './nicescroll.component.html',
  styleUrls: ['./nicescroll.component.scss']
})
export class NicescrollComponent implements OnInit {

	public scrollbarX = { axis: 'x', theme: 'minimal-dark'}
    public scrollbarY = { axis: 'y', theme: 'minimal-dark'}

    constructor(public _commondata: CommonDataService) { }

    ngOnInit() {
        this._commondata.setExpandDiv('elements');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

}
