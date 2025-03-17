import { Component, OnInit, Input } from '@angular/core';
import { ComparaAttributesComponent } from './compara-attributes/compara-attributes.component';
import { ComparaClinicasComponent } from './compara-clinicas/compara-clinicas/compara-clinicas.component';
import { NgIf } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'app-compara-item',
    templateUrl: './compara-item.component.html',
    styleUrls: ['./compara-item.component.css'],
    standalone: true,
    imports: [
      NgIf,
      ComparaClinicasComponent,
      ComparaAttributesComponent,
      MatDialogModule]
})
export class ComparaItemComponent implements OnInit {
  @Input() compareList: any;
  @Input() clinicasVal: any;
  @Input() productos: any;
  @Input() items: any;
 
  constructor() { }
  showDiv1 = false;
  showDiv2 = true;
  
  filter(value: string) {
    if (value === 'attributes') {
      this.showDiv1 = true;
      this.showDiv2 = false;
    } else if (value === 'clinicas') {
      this.showDiv1 = false;
      this.showDiv2 = true;
    } else {
      this.showDiv1 = false;
      this.showDiv2 = false;
    }
  }
  
    onPrint() {
      window.print();  
      
      
    }
  ngOnInit(): void {
  }

}
