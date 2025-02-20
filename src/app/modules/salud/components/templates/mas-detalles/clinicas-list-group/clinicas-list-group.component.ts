import { Component, Inject, OnInit, VERSION } from '@angular/core';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import {DialogData2} from './../../../molecules/product-card/product-card.component';
import {DialogData1} from './../../../molecules/product-land/product-land.component';
import {DialogData2} from './../../../molecules/product-card/product-card.component';
import { SortPipe } from '../../../../../../../pipes/sort.pipe';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';



/**
 * @title Basic use of the tab group
 */

@Component({
    selector: 'app-clinicas-list-group',
    templateUrl: './clinicas-list-group.component.html',
    styleUrls: ['./clinicas-list-group.component.css'],
    standalone: true,
    imports: [MatTabsModule, NgFor, FormsModule, InputTextModule, SortPipe]
})
export class ClinicasListGroupComponent implements OnInit {
  selectedClinicas: any;
  matTabLabels: string[] = [];
   SortbyParam = '';
  SortDirection = 'asc';
  displayedColumns: string[] = ['Nombre', 'Barrio/Localidad'];
  searchText: string = '';
  filteredProducts: any[] = [];
 
  constructor(
    public dialogRef: MatDialogRef<ClinicasListGroupComponent>,@Inject(MAT_DIALOG_DATA) 
    public data1: DialogData1,@Inject(MAT_DIALOG_DATA) 
    public data2: DialogData2,
  
  ) {  

}


  ngOnInit() {
    if(this.data1){
    this.selectedClinicas = this.data1.clinicas;
    this.filterProducts();
    console.log(this.data1.clinicas)
  this.populateMatTabLabels();
    }else if(this.data2){
      this.selectedClinicas = this.data2.clinicas;
    this.filterProducts();
    console.log(this.data2.clinicas)
  this.populateMatTabLabels();
    }
  }
  

  tabChanged(event: any) {
    console.log(event);
    if (event.index != 0) {
      const filterText = event.tab.textLabel;
      if(this.data1){
      this.selectedClinicas = this.data1.clinicas.filter((clinicas: any) => {
        return clinicas.ubicacion.region === filterText;
      });
      console.log(this.selectedClinicas);
    } if(this.data2){
      this.selectedClinicas = this.data2.clinicas.filter((clinicas: any) => {
        return clinicas.ubicacion.region === filterText;
      });
      console.log(this.selectedClinicas);
    } else if (this.data1){
      this.selectedClinicas = this.data2.clinicas;
    }else {
      this.selectedClinicas = this.data2.clinicas;

    }}
  }

  populateMatTabLabels(): void {

    let clinicas: any[];
    if (this.data1){
      clinicas = this.data1.clinicas.map((clinica: any) => clinica.ubicacion.region)
    } else if (this.data2){
      clinicas =  this.data2.clinicas.map((clinica: any) => clinica.ubicacion.region)
    }
    const regions: string[] = clinicas;
    const uniqueRegions: string[] = Array.from(new Set(regions));
    this.matTabLabels = ['TODAS', ...uniqueRegions];
  }
  
  filterProducts() {
    this.filteredProducts = this.selectedClinicas.filter((clinica: { nombre: string; }) =>
      clinica.nombre.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
