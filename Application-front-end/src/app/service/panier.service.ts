import { Injectable } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }

  form:FormGroup=new FormGroup({
   $key:new FormControl(null),
   nom: new FormControl('',Validators.required),
   prenom: new FormControl('',Validators.required),
   email: new FormControl('',Validators.required),
 });

 initializeFormGroup(){
   this.form.setValue({
     $key:null,
     nom:'',
     prenom:'',
     email:'',
   });

}
}
