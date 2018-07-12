import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

constructor(private _commondata: CommonDataService) { }

ngOnInit() {
    this._commondata.setExpandDiv('Form');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

}
