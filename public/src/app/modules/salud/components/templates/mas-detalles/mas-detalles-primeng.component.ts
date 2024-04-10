import { Component, Inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-mas-detalles-primeng',
  templateUrl: './mas-detalles-primeng.component.html',
  styleUrls: ['./mas-detalles.component.css'],
})
export class MasDetallesPrimengComponent implements OnInit {
  product: any;
  selectedIndex: number = 0; // Agrega la definición de selectedIndex
  tabLabels: string[] = ['Tab 1', 'Tab 2'];
  activeIndex: number = 0;
  constructor(
    private changeDetector: ChangeDetectorRef,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    if (this.config.data && this.config.data.product) {
      this.product = this.config.data.product;
      console.log('Received product data in MasDetallesPrimengComponent:', this.product);
      // Resto de la lógica
    }

    this.changeDetector.detectChanges(); // Detectar cambios iniciales
  }

  toggleTabs($tabNumber: number) {
    this.selectedIndex = $tabNumber;
  }

  onNoClick(): void {
    this.ref.close(); // Cerrar el diálogo
  }
}
