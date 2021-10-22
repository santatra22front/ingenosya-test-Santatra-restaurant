import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientService } from 'src/app/service/client.service';
@Component({
  selector: 'app-modal-achat',
  templateUrl: './modal-achat.component.html',
  styleUrls: ['./modal-achat.component.css']
})
export class ModalAchatComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ModalAchatComponent>,public service:ClientService) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogRef.close();
  }
}
