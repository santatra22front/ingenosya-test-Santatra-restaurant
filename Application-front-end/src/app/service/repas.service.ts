import { Injectable } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepasService {
  constructor(private httpClient:HttpClient) { }

  readRepas() {
    return this.httpClient.get('http://127.0.0.1:8000/api/repas');
  }

  form:FormGroup=new FormGroup({
    $key:new FormControl(null),
    repas: new FormControl('',Validators.required),
    prixEmballage: new FormControl('',Validators.required),
    prixServiette: new FormControl('',Validators.required),
    prixCouvert: new FormControl('',Validators.required),
    prixRepas: new FormControl('',Validators.required),
  });

  initializeFormGroup(){
    this.form.setValue({
      $key:null,
      repas:'',
      prixEmballage:'',
      prixServiette:'',
      prixCouvert:'',
      prixRepas:'',
    });
  }




}
