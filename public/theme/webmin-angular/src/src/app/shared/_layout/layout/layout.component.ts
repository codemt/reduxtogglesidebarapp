import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDataService } from './../../../common-data.service';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';


declare var document: any;

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    isSearchActive:boolean = false;
    isSlideMenu:boolean = false;

    public scrollbarOptions = { axis: 'yx', theme: 'minimal'}

    constructor(public _commondata: CommonDataService) {
    }
    
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
