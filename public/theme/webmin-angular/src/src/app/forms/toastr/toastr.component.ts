import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../common-data.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var toast123: any;


@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss'],
})
export class ToastrComponent implements OnInit {

    constructor(private _commondata: CommonDataService, public toastr: ToastsManager) {

    }

    ngOnInit() {
        this._commondata.setExpandDiv('elements');
setTimeout(_ => this._commondata.showLoader(false), 200);
    }
    

    showToast()
    {
        

        var shortCutFunction = (<HTMLInputElement>document.querySelector('.rd:checked')).value;
        //var shortCutFunction = document.querySelector('.rd:checked').value; 
        var msg = (<HTMLInputElement>document.getElementById('message')).value;
        var title = (<HTMLInputElement>document.getElementById('title')).value || '';
        var $showDuration = (<HTMLInputElement>document.getElementById('showDuration')).value;
       
        
        

        var customHTML = (<HTMLInputElement>document.getElementById('customHTML')).checked;
        var options = {};
        options = {
            showCloseButton: (<HTMLInputElement>document.getElementById('closeButton')).checked,
            //newestOnTop: (<HTMLInputElement>document.getElementById('newestOnTop')).checked,
            //positionClass: (<HTMLInputElement>document.querySelector('.rd1:checked')).value || 'toast-top-right',
            toastLife: ($showDuration.length)?parseInt($showDuration):2000,
            titleClass: ((<HTMLInputElement>document.getElementById('TitleClass')).checked) ? "h3" : "",
            messageClass: ((<HTMLInputElement>document.getElementById('MessageClass')).checked) ? "text-uppercase" : "",
            enableHTML: (customHTML)?true:false
        };

        //this.toastr.options = options;

        if (shortCutFunction == "success")
        {
            this.toastr.success(msg, title, options);
        }

        if (shortCutFunction == "info")
        {
            this.toastr.info(msg, title, options);
        }

        if (shortCutFunction == "warning") {
            this.toastr.warning(msg, title, options);
        }

        if (shortCutFunction == "error") {
            this.toastr.error(msg, title, options);
        }

        //this.toastr.onClickToast()
        //    .subscribe(toast => {
                
        //        if ((<HTMLInputElement>document.getElementById('addBehaviorOnToastClick')).checked) {

        //            alert('You can perform some custom action while click on Toast!');

                    
        //            }
                
        //    });

       

       
      

      
      
        document.getElementById('toastrOptions').innerHTML =
            'Command: toastr["'
            + shortCutFunction
            + '"]("'
            + msg
            + (title ? '", "' + title : '')
            + '")\n\ntoastr.options = '
            + JSON.stringify(options, null, 2)

        //toast123 = this.toastr[shortCutFunction](msg, title, options); // Wire up an event handler to a button in the toast, if it exists

        
       
       
        
    }

    clearAllToasts()
    {
        this.toastr.clearAllToasts()
    }

    //clearToast()
    //{
    //    debugger;
    //    this.toastr.options.dismiss = 'controlled';
    //    this.toastr.dismissToast(toast123.__zone_symbol__value);
    //    this.toastr.clearToast(toast123.__zone_symbol__value);
    //}
};


    


