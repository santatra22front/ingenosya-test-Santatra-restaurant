import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IngredientService } from 'src/app/service/ingredient.service';
@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.css']
})
export class ListIngredientComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ListIngredientComponent>,public ingredientService:IngredientService) { }

  ingredients: any = [];

  ngOnInit(): void {
    this.readIngredientsId();
  }

  readIngredientsId(){
    this.ingredientService.readIngredientsId().subscribe(res =>{
      this.ingredients = res;
    });
  }
}
