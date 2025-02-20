import { Component, Inject, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog'; // Agrega DynamicDialogRef y DynamicDialogConfig
import { NgFor } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';


/**
 * @title Basic use of the tab group
 */

@Component({
    selector: 'app-clinicas-list-group-p',
    templateUrl: './clinicas-list-group-p.component.html',
    styleUrls: ['./clinicas-list-group.component.css'],
    standalone: true,
    imports: [TabViewModule, NgFor]
})
export class ClinicasListGroupPrimengComponent implements OnInit {
  product: any;

  selectedClinicas: any;
  primeTabLabels = [{title:'TODAS'},{title:'CABA'},{title: 'GBA-Sur'},{title: 'GBA-Norte'},{title: 'GBA-Oeste'},{title:'La Plata'}];
  
  displayedColumns: string[] = ['Nombre', 'Barrio/Localidad'];
  data: any;
  activeIndex: number = 0;

  scrollableTabs: any[] = ['TODAS','CABA', 'GBA-Sur', 'GBA-Norte', 'GBA-Oeste','La Plata'];
 
  constructor(
  private ref: DynamicDialogRef, // Agrega DynamicDialogRef
  private config: DynamicDialogConfig // Agrega DynamicDialogConfig
  ) {

}


  ngOnInit() {
    if (this.config.data && this.config.data.product) {
      this.product = this.config.data.product;
      console.log('Received product data in ClinicasListGroupPrimengComponent:', this.product);
      // Resto de la lógica
      this.selectedClinicas = this.config.data.product.clinicas;
      console.log(this.selectedClinicas)
    }
    
 
  }
  tabChanged(event: any) {
    console.log(event);
    const filterText = this.scrollableTabs[event.index];
    console.log(filterText)
    if (filterText !== 'TODAS') {
      
      this.selectedClinicas = this.config.data.product.clinicas.filter((clinica: any) => {
        return clinica.ubicacion.region === filterText;
      });
      console.log(this.selectedClinicas);
    } else {
      this.selectedClinicas = this.config.data.product.clinicas;
    }
  }
}
