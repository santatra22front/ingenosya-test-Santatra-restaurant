import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  afficheRepas(){
    return this.httpClient.get('http://127.0.0.1:8000/api/repas');
  }
  ajouteRepas(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/ajouteRepas',data);
  }

  suprimerRepas(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/suprimerRepas/'+id);
  }
  afficheUnRepas(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/unRepas/'+id);
  }
  modifierRepas(id:any,data:any){
    return this.httpClient.put('http://127.0.0.1:8000/api/modifierRepas/'+id,data);
  }

}
