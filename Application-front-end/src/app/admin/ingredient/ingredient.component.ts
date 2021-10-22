import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { AjouteIngredientComponent } from './ajoute-ingredient/ajoute-ingredient.component';
import { ListIngredientComponent } from './list-ingredient/list-ingredient.component';
import { RepasService } from 'src/app/service/repas.service';
@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

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
    dialogConfig.height="60%";
      this.dialog.open(AjouteIngredientComponent,dialogConfig);
  }
  openIngredient(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="40%";
    dialogConfig.height="55%";
      this.dialog.open(ListIngredientComponent,dialogConfig);
  }
}
