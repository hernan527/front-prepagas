import { Component, Inject, OnInit, VERSION } from '@angular/core';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import {DialogData} from '../../home/home-products/home-products.component';
import {DialogData1} from './../../../../components/molecules/product-land/product-land.component';
import {DialogData2} from './../../../../components/molecules/product-card/product-card.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
// import {DialogData2} from './../../../../components/molecules/result/result.component';




@Component({
    selector: 'app-pdf-viewer',
    template: `
  <pdf-viewer [src]= "pdfSrc"
  [render-text]="true"
  [original-size]="false"
  style="width: 100%; height: 100%"
  ></pdf-viewer>
  `,
    standalone: true,
    imports: [PdfViewerModule],
})
export class PdfViewerComponent implements OnInit {
  public pdfSrc : string;
  constructor(
    // public dialogRef: MatDialogRef<PdfViewerComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData,
  public dialogRef1: MatDialogRef<PdfViewerComponent>,@Inject(MAT_DIALOG_DATA) public data1: DialogData1,
  public dialogRef2: MatDialogRef<PdfViewerComponent>,@Inject(MAT_DIALOG_DATA) public data2: DialogData2
  ) { }
 
  ngOnInit() {
    if (this.data1){
      console.log(this.data1.name);
    console.log(this.data1.folleto[0]);
    console.log("pdfSrc");
    this.pdfSrc = this.data1.folleto[0];
    }
    else if(this.data2){    
    console.log(this.data2.name);
    console.log(this.data2.folleto[0]);
    console.log("pdfSrc");
    this.pdfSrc = this.data2.folleto[0];
  }
    
    
  }
  
  
}


