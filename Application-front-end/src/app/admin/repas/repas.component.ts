import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { AjouteRepasComponent } from './ajoute-repas/ajoute-repas.component';
import { ModifierRepasComponent } from './modifier-repas/modifier-repas.component';
import { RepasService } from 'src/app/service/repas.service';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.css']
})
export class RepasComponent implements OnInit {

  constructor(private dialog:MatDialog, private repasService:RepasService) { }

  rep: any = [];

  ngOnInit(): void {
    this.readRepas();
  }

  readRepas(){
    this.repasService.readRepas().subscribe(res =>{
      this.rep = res;
    });
  }

  openInsert(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="40%";
    dialogConfig.height="85%";
      this.dialog.open(AjouteRepasComponent,dialogConfig);
  }
  openModifier(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="40%";
    dialogConfig.height="85%";
      this.dialog.open(ModifierRepasComponent,dialogConfig);
  }
}
