import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PanierService } from 'src/app/service/panier.service';
@Component({
  selector: 'app-modal-panier',
  templateUrl: './modal-panier.component.html',
  styleUrls: ['./modal-panier.component.css']
})
export class ModalPanierComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ModalPanierComponent>,public service:PanierService) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogRef.close();
  }
}
