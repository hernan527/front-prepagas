import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormQueplanComponent } from './../../atoms/form-queplan/form-queplan.component';
@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent  implements OnInit {
  constructor(public dialogRef: MatDialogRef<ModalFormComponent>) {}

  ngOnInit(): void {}

  cerrarModal(): void {
    this.dialogRef.close();
  }

}
