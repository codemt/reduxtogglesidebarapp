import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})
export class AccordionsComponent implements OnInit {

    constructor(private _commondata: CommonDataService) { }

    ngOnInit() {
        this._commondata.setExpandDiv('elements');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

 OpenAccordion(sectionName, Wrapdiv) {
        var CurrentCls = document.getElementById(sectionName).getAttribute("class");
        if (CurrentCls == "acd-des")
        {
            document.getElementById(sectionName).setAttribute("class", "acd-des show");
            document.getElementById(Wrapdiv).setAttribute("class", "acd-group acd-active");
        }
        else {
            document.getElementById(sectionName).setAttribute("class", "acd-des");
            document.getElementById(Wrapdiv).setAttribute("class", "acd-group");
        }
}
}
