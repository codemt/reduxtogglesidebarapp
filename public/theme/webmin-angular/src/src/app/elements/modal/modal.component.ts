import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

import { ModalService } from '../../shared/_services/index';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    constructor(private _commondata: CommonDataService, private modalService: ModalService) { }

    ngOnInit() {
        this._commondata.setExpandDiv('elements');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }


    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}
