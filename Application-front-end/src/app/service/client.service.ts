import { Injectable } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient:HttpClient) { }

  readRepas() {
    return this.httpClient.get('http://127.0.0.1:8000/api/repas');
  }

  createRepas() {
    // return this.httpClient.post('http://127.0.0.1:8000/api/createRepas', createRepas);
  }

  form:FormGroup=new FormGroup({
    $key:new FormControl(null),
    id:new FormControl(0),
    emballage: new FormControl(false),
    serviette: new FormControl(false),
    couvert: new FormControl(false),
  });

  initializeFormGroup(){
    this.form.setValue({
      $key:null,
      id:0,
      emballage:false,
      serviette:false,
      couvert:false,
    });
  }




}
