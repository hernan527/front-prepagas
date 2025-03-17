import { Component, Inject, OnInit, VERSION } from '@angular/core';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData2} from '../../../../components/molecules/product-card/product-card.component';
import {DialogData1} from '../../../../components/molecules/product-land/product-land.component';








@Component({
    selector: 'app-clinicas-list',
    templateUrl: './clinicas-list.component.html',
    styleUrls: ['./clinicas-list.component.css'],
    standalone: true
})
export class ClinicasListComponent implements OnInit {
  product: any;
  public pdfSrc : string;
folleto: string;


// Users: USERS[] = UsersJson;

  constructor(
    public dialogRef: MatDialogRef<ClinicasListComponent>,@Inject(MAT_DIALOG_DATA) public data1: DialogData1,@Inject(MAT_DIALOG_DATA)public data2: DialogData2
   ) {
}





  ngOnInit(): void {
    if (this.data1){
      console.log(this.data1.id),
    console.log(this.data1.name),
    console.log(this.data1.price),
    console.log(this.data1.category),
    console.log(this.data1.rating),
    console.log(this.data1.clinicas),
    console.log(this.data1.producto),
    console.log("pdfSrc");
    this.product= this.data1.producto;
    this.folleto= 'assets/archivos/' + this.product.folleto[2] + '/beneficios/' + this.product.folleto[2]
    this.pdfSrc = this.data1.folleto[0];
    }else
     if(this.data2){    
      console.log(this.data2.id),
      console.log(this.data2.name),
      console.log(this.data2.price),
      console.log(this.data2.category),
      console.log(this.data2.rating),
      console.log(this.data2.clinicas),
      console.log(this.data2.producto),
    this.product= this.data2.producto;
    this.folleto= 'assets/archivos/' + this.product.folleto[2] + '/beneficios/'
    + this.product.folleto[2]
    this.pdfSrc = this.data2.folleto[0];
  }

}

}