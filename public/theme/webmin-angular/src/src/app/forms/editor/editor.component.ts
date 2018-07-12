import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

    public editorValue: string = '<html><head><title></title></head><body><p>Hello, This is a default text set</p></body></html>';

    constructor(private _commondata: CommonDataService) { }

    ngOnInit() {
        this._commondata.setExpandDiv('Form');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

    GetValue()
    {
        alert(this.editorValue);
    }
}
