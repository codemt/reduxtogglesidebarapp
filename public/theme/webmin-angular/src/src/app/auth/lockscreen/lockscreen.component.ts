import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonDataService } from './../../common-data.service';
import { FormBuilder,FormControl, FormGroup, Validators, NgForm,FormsModule } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.scss']
})
export class LockscreenComponent implements OnInit {

lockScreenForm: FormGroup;
private passwordValid: boolean = false;
private formloadAtfirst = 0;

    constructor(private frmbuilder:FormBuilder, private _commondata: CommonDataService, private router: Router,
        private route: ActivatedRoute) { 
    	this.lockScreenForm=frmbuilder.group({  
                password:new FormControl(null, [Validators.required,Validators.minLength(5)]),
            });  
    }

    isFieldValid(field: string) {
    return !this.lockScreenForm.get(field).valid && this.lockScreenForm.get(field).touched;
  }

  isminlengthValid(field: string) {
       return !this.lockScreenForm.get(field).hasError('minlength')
  }

  isRequiredValid(field: string) {
       return !this.lockScreenForm.get(field).hasError('required')
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

    onSubmit() {
    	this.formloadAtfirst = 1;
      if (this.lockScreenForm.valid) {
            console.log('form submitted');
            this.formloadAtfirst = 0;
            this.router.navigate([''], { relativeTo: this.route.parent });
      } else {
            this.validateAllFormFields(this.lockScreenForm);
      }
       
    }

     validateAllFormFields(formGroup: FormGroup) {        
      Object.keys(formGroup.controls).forEach(field => { 
        const control = formGroup.get(field);            
        if (control instanceof FormControl) {            
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {       
          this.validateAllFormFields(control);           
        }
      });
}


    ngOnInit() {
setTimeout(_ => this._commondata.showLoader(false), 200);
  }

}
