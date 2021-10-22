import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RepasService } from 'src/app/service/repas.service';
@Component({
  selector: 'app-modifier-repas',
  templateUrl: './modifier-repas.component.html',
  styleUrls: ['./modifier-repas.component.css']
})
export class ModifierRepasComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ModifierRepasComponent>,public service:RepasService) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogRef.close();
  }
}
