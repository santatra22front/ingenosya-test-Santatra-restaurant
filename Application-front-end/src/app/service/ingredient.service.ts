import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private httpClient:HttpClient) { }

  readIngredients() {
    return this.httpClient.get('http://127.0.0.1:8000/api/readIngredients');
  }

  readIngredientsId() {
    return this.httpClient.get('http://127.0.0.1:8000/api/readIngredientsID');
  }

  form:FormGroup=new FormGroup({
    $key:new FormControl(null),
    repas: new FormControl(''),
    nomIngredient: new FormControl('',Validators.required),
    quantiteIngredient: new FormControl('',Validators.required),
  });

  initializeFormGroup(){
    this.form.setValue({
      $key:null,
      repas:'',
      nomIngredient:'',
      quantiteIngredient:'',
    });
  }
}
