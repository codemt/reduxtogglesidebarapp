import { Component, OnInit , ViewChild } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators, NgForm,FormsModule } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { CommonDataService } from './../../common-data.service';


@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

signupForm: FormGroup;
private passwordValid: boolean = false;
private Ischeck: boolean = false;
private formloadAtfirst = 0;


signupIconForm: FormGroup;
private passwordIconValid: boolean = false;
private IscheckIcon: boolean = false;
private formloadIconAtfirst = 0;

signupUIForm: FormGroup;
private passwordUIValid: boolean = false;
private IscheckUI: boolean = false;
private formloadUIAtfirst = 0;


  constructor(private frmbuilder:FormBuilder, private _commondata: CommonDataService) { 
    this.signupForm=frmbuilder.group({  
                firstname:new FormControl(null, [Validators.required]),
                lastname:new FormControl(null, [Validators.required]),
                username:new FormControl(null, [Validators.required,Validators.minLength(2)]),
                email: new FormControl(null, [Validators.required, Validators.email]),
                password:new FormControl(null, [Validators.required,Validators.minLength(5)]),
                confirmPassword:new FormControl(null, [Validators.required,Validators.minLength(5)]),
                //agreeTerms:[false, Validators.requiredTrue],
                agreeTerms:new FormControl(null, [Validators.required]),
            });  

            this.signupIconForm=frmbuilder.group({  
                firstname1:new FormControl(null, [Validators.required]),
                lastname1:new FormControl(null, [Validators.required]),
                username1:new FormControl(null, [Validators.required,Validators.minLength(2)]),
                email1: new FormControl(null, [Validators.required, Validators.email]),
                password1:new FormControl(null, [Validators.required,Validators.minLength(5)]),
                confirmPassword1:new FormControl(null, [Validators.required,Validators.minLength(5)]),
                //agreeTerms:[false, Validators.requiredTrue],
                agreeIconTerms:new FormControl(null, [Validators.required]),
            });  

            this.signupUIForm=frmbuilder.group({  
                firstname2:new FormControl(null, [Validators.required]),
                lastname2:new FormControl(null, [Validators.required]),
                username2:new FormControl(null, [Validators.required,Validators.minLength(2)]),
                email2: new FormControl(null, [Validators.required, Validators.email]),
                password2:new FormControl(null, [Validators.required,Validators.minLength(5)]),
                confirmPassword2:new FormControl(null, [Validators.required,Validators.minLength(5)]),
                //agreeTerms:[false, Validators.requiredTrue],
                agreeUITerms:new FormControl(null, [Validators.required]),
            });  
  }

  ngOnInit() {
    this._commondata.setExpandDiv('Form');
setTimeout(_ => this._commondata.showLoader(false), 200);
  }
          
   isFieldValid(field: string) {
    return !this.signupForm.get(field).valid && this.signupForm.get(field).touched;
  }
   
  isUIFieldValid(field: string) {
    return !this.signupUIForm.get(field).valid && this.signupUIForm.get(field).touched;
  }

  isminlengthValid(field: string) {
       return !this.signupUIForm.get(field).hasError('minlength')
  }

  isRequiredValid(field: string) {
       return !this.signupUIForm.get(field).hasError('required')
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  displayUIFieldCss(field: string) {
    return {
      'error': this.isUIFieldValid(field)
    };
  }

  onSubmit() {
       this.formloadAtfirst = 1;
      if (this.signupForm.valid) {
            console.log('form submitted');
            this.formloadAtfirst = 0;
            this.signupForm.reset();
      } else {
            this.validateAllFormFields(this.signupForm);
      }
  }

  onSubmit1() {
       this.formloadIconAtfirst = 1;
      if (this.signupIconForm.valid) {
            console.log('form submitted');
            this.formloadIconAtfirst = 0;
            this.signupIconForm.reset();
      } else {
            this.validateAllFormFields(this.signupIconForm);
      }
  }

  onSubmit2() {
       this.formloadUIAtfirst = 1;
      if (this.signupUIForm.valid) {
            console.log('form submitted');
            this.formloadUIAtfirst = 0;
            this.signupUIForm.reset();
      } else {
            this.validateAllFormFields(this.signupUIForm);
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


checkPasswords(field1: string,field2: string) { // here we have the 'passwords' group
  let pass = this.signupForm.controls[field1].value;
  let confirmPass = this.signupForm.controls[field2].value;
  if(pass == confirmPass){
        this.passwordValid = false;
  }else{
        this.passwordValid = true;
  }
  return this.passwordValid;
}

checkIconPasswords(field1: string,field2: string) { // here we have the 'passwords' group
  let pass = this.signupIconForm.controls[field1].value;
  let confirmPass = this.signupIconForm.controls[field2].value;
  if(pass == confirmPass){
        this.passwordIconValid = false;
  }else{
        this.passwordIconValid = true;
  }
  return this.passwordIconValid;
}

checkUIPasswords(field1: string,field2: string) { // here we have the 'passwords' group
  let pass = this.signupUIForm.controls[field1].value;
  let confirmPass = this.signupUIForm.controls[field2].value;
  if(pass == confirmPass){
        this.passwordUIValid = false;
  }else{
        this.passwordUIValid = true;
  }
  return this.passwordUIValid;
}

oncheckTerms(field1: string) { 
    if(this.formloadAtfirst == 1){
          if(this.signupForm.get('agreeTerms').value){
                this.Ischeck = false;
          }else{
                this.Ischeck = true;
          }
      }
      return this.Ischeck;
}

oncheckIconTerms(field1: string) { 
    if(this.formloadIconAtfirst == 1){
          if(this.signupIconForm.get('agreeIconTerms').value){
                this.IscheckIcon = false;
          }else{
                this.IscheckIcon = true;
          }
      }
      return this.IscheckIcon;
}

oncheckUITerms(field1: string) { 
    if(this.formloadUIAtfirst == 1){
          if(this.signupUIForm.get('agreeUITerms').value){
                this.IscheckUI = false;
          }else{
                this.IscheckUI = true;
          }
      }
      return this.IscheckUI;
}

}
