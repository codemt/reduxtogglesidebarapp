import { Component, OnInit, EventEmitter } from '@angular/core';
import { CommonDataService } from './../../common-data.service';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

     public editorValue: string = '';

    public scrollbarY = { axis: 'y', theme: 'minimal-dark'}

    constructor(private _commondata: CommonDataService) { }

    ngOnInit() {
        this._commondata.setExpandDiv('custom-page');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }
OpenMenu(sectionName, Wrapdiv) {
        var CurrentCls = document.getElementById(sectionName).getAttribute("class");
        if (CurrentCls == "dropdown-menu")
        {
            document.getElementById(sectionName).setAttribute("class", "dropdown-menu show");
            document.getElementById(sectionName).previousElementSibling.setAttribute("aria-expanded", "true");
            document.getElementById(Wrapdiv).setAttribute("class", "btn-group info-drop show");
        }
        else {
            document.getElementById(sectionName).setAttribute("class", "dropdown-menu");
            document.getElementById(sectionName).previousElementSibling.setAttribute("aria-expanded", "false");
            document.getElementById(Wrapdiv).setAttribute("class", "btn-group info-drop");
        }
}
}
