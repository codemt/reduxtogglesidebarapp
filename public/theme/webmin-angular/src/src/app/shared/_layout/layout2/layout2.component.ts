import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDataService } from './../../../common-data.service';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-layout2',
  templateUrl: './layout2.component.html',
  styleUrls: ['./layout2.component.scss']
})
export class Layout2Component implements OnInit {

    isSearchActive:boolean = false;
    isSlideMenu:boolean = false;

    public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark'}

  constructor(public _commondata: CommonDataService) { }

  ngOnInit() {
  	this._commondata.showLoader(true);
  }

  toggleSearch(){
      this.isSearchActive = !this.isSearchActive;
    }
    toggleMenu(){
      this.isSlideMenu = !this.isSlideMenu;
    }

    expandCollpse(sectionName) {
        var CurrentCls = document.getElementById(sectionName).getAttribute("class");
        if (CurrentCls == "collapse" || CurrentCls == "collapse hide")
        {
            document.getElementById(sectionName).setAttribute("class", "collapse show");
            document.getElementById(sectionName).previousElementSibling.setAttribute("aria-expanded", "true");
        }
        else {
            document.getElementById(sectionName).setAttribute("class", "collapse hide");
            document.getElementById(sectionName).previousElementSibling.setAttribute("aria-expanded", "false");
        }
  }
  toggleFullscreen(elem) {
    elem = elem || document.documentElement;
    if (!document.fullscreenElement && !document['mozFullScreenElement'] &&
        !document.webkitFullscreenElement && !document['msFullscreenElement']) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element['ALLOW_KEYBOARD_INPUT']);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document['msExitFullscreen']) {
            document['msExitFullscreen']();
        } else if (document['mozCancelFullScreen']) {
            document['mozCancelFullScreen']();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}
}
