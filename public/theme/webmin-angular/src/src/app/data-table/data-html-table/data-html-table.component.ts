import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';

declare var require: any;
const data: any = require('../../../assets/json/datatable.json');

@Component({
  selector: 'app-data-table',
  templateUrl: './data-html-table.component.html',
  styleUrls: ['./data-html-table.component.scss']
})
export class DataHtmlTableComponent implements OnInit {

    rows = [];
    filterrows = [];
    selectrows = [];
    sortrows = [];

    loadingIndicator: boolean = true;
    reorderable: boolean = true;

    // DataTable Content Titles
    columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company' }
    ];

    
    editing = {};

    temp = [];
    selected: any[] = [];
    constructor(private _commondata: CommonDataService) {
        this.temp = [...data];
        this.rows = data;
        this.filterrows = data;
        this.selectrows = data;
        this.sortrows = data;
        setTimeout(() => { this.loadingIndicator = false; }, 1500);
    }

    ngOnInit() {
        this._commondata.setExpandDiv('Table');
setTimeout(_ => this._commondata.showLoader(false), 200);
    }

    updateValue(event, cell, rowIndex) {

        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }


    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.filterrows = temp;
        // Whenever the filter changes, always go back to the first page
        //this.table.offset = 0;
    }


    //  On select of dataTable's data row
    onSelect(event) {
        //your code here
    }

    //  On Activation of dataTable's data row
    onActivate(event) {
        //your code here
    }
}
