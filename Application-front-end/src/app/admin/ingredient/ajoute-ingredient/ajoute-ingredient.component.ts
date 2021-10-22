import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IngredientService } from 'src/app/service/ingredient.service';
@Component({
  selector: 'app-ajoute-ingredient',
  templateUrl: './ajoute-ingredient.component.html',
  styleUrls: ['./ajoute-ingredient.component.css']
})
export class AjouteIngredientComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AjouteIngredientComponent>,public service:IngredientService) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogRef.close();
  }

}
