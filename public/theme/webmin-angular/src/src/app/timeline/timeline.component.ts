import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../common-data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

    constructor(private _commondata: CommonDataService) { }

    ngOnInit() {
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
