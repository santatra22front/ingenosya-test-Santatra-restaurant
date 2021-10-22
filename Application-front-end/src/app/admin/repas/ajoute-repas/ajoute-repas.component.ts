import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RepasService } from 'src/app/service/repas.service';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-ajoute-repas',
  templateUrl: './ajoute-repas.component.html',
  styleUrls: ['./ajoute-repas.component.css']
})
export class AjouteRepasComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AjouteRepasComponent>,public service:RepasService) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogRef.close();
  }
}
