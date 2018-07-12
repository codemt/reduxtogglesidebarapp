import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../common-data.service';
import { BrowserModule } from '@angular/platform-browser';
import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxVectorMapModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { ViewportCoordinate, Service } from './../VectorService';

@Component({
  selector: 'app-maps',
  providers: [Service],
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

    constructor(private _commondata: CommonDataService, service: Service) {
    this.viewportData = service.getCoordinates();
     }

    ngOnInit() {
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

  	worldMap: any = mapsData.world;
    zoomFactorValue: string;
    centerValue: string;
    viewportData: ViewportCoordinate[];

   
    zoomChanged(e) {
        this.zoomFactorValue = e.zoomFactor.toFixed(2);
    }

    centerChanged(e) {
        this.centerValue = e.center[0].toFixed(3) +
            ", " + e.center[1].toFixed(3);
    }
}
