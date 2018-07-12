import { Component, OnInit } from '@angular/core';
import { AppModule } from './../../app.module';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private _commondata: CommonDataService) { }

    ngOnInit() {
        
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

}
