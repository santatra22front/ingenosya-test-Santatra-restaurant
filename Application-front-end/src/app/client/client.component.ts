import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { ModalAchatComponent } from './modal-achat/modal-achat.component';
import { ModalPanierComponent } from './modal-panier/modal-panier.component';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private dialog:MatDialog, private clientService:ClientService) { }

  repas: any = [];

  ngOnInit(): void {
    this.readRepas();
  }

  readRepas(){
    this.clientService.readRepas().subscribe(res =>{
      this.repas = res;
    });
  }

  openModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="40%";
    dialogConfig.height="50%";
      this.dialog.open(ModalAchatComponent,dialogConfig);
  }

  openPanier(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="80%";
    dialogConfig.height="90%";
      this.dialog.open(ModalPanierComponent,dialogConfig);
  }


}
