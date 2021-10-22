import { Injectable } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor() { }

  form:FormGroup=new FormGroup({
   $key:new FormControl(null),
   validation: new FormControl('',Validators.required),
   reponseValidation: new FormControl('',Validators.required),
 });

 initializeFormGroup(){
   this.form.setValue({
     $key:null,
     validation:'',
     reponseValidation:'',
   });
 }
}
