import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

	public isCollapsed = false;

    constructor(private _commondata: CommonDataService) { }

    ngOnInit() {
        this._commondata.setExpandDiv('custom-page');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

  expandCollpse(sectionName) {
        var CurrentCls = document.getElementById(sectionName).getAttribute("class");
        if (CurrentCls == "acd-des collapse" || CurrentCls == "acd-des collapse hide")
        {
            document.getElementById(sectionName).setAttribute("class", "acd-des collapse show");
            document.getElementById(sectionName).previousElementSibling.setAttribute("aria-expanded", "true");
        }
        else {
            document.getElementById(sectionName).setAttribute("class", "acd-des collapse hide");
            document.getElementById(sectionName).previousElementSibling.setAttribute("aria-expanded", "false");
        }
  }

}
