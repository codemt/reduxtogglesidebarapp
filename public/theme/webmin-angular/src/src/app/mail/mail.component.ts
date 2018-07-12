import { Component, OnInit, EventEmitter } from '@angular/core';
import { CommonDataService } from './../common-data.service';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})

export class MailComponent implements OnInit {

  public editorValue: string = '<html><head><title></title></head><body><p>Hello, This is a default text set</p></body></html>';

  public scrollbarY = { axis: 'y', theme: 'minimal-dark'}

  constructor(private _commondata: CommonDataService) { }

  ngOnInit() {
	setTimeout(_ => this._commondata.showLoader(false), 200);
  }

  GetValue()
    {
        alert(this.editorValue);
    }

     OpenMenu(sectionName, Wrapdiv) {
        var CurrentCls = document.getElementById(sectionName).getAttribute("class");
        if (CurrentCls == "dropdown-menu")
        {
            document.getElementById(sectionName).setAttribute("class", "dropdown-menu show");
            document.getElementById(sectionName).previousElementSibling.setAttribute("aria-expanded", "true");
            document.getElementById(Wrapdiv).setAttribute("class", "btn-group info-drop show ml-3");
        }
        else {
            document.getElementById(sectionName).setAttribute("class", "dropdown-menu");
            document.getElementById(sectionName).previousElementSibling.setAttribute("aria-expanded", "false");
            document.getElementById(Wrapdiv).setAttribute("class", "btn-group info-drop ml-3");
        }
}
}
