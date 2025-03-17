import { Component, Input, OnInit } from '@angular/core';
import { NgIf, NgFor } from "@angular/common";
import { ServicioDeCompararService } from "./../../../../../services/servicio-de-comparar.service";
import { ComparaAttributesComponent } from "./../../../components/templates/compara-item/compara-attributes/compara-attributes.component";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-carrito-compara',
  imports: [NgIf, NgFor, ComparaAttributesComponent,DialogModule,ButtonModule],
  templateUrl: './carrito-compara.component.html',
  styleUrls: ['./carrito-compara.component.css','carrito-compara.component.scss']
})
export class CarritoComparaComponent implements OnInit{
  @Input() clinicasVal: any;
  @Input() productos: any;
  @Input() items: any;
  @Input() listaComparar!: any[];
  compareList = this.obtenerListaComparar();
  display: boolean = false;
  displayDialog: boolean = false;


  constructor(
   
    private servicioComparar: ServicioDeCompararService,
  ) {}

  listaIterarComparar(){
  return this.servicioComparar.compareList;
  }
ngOnInit(): void {
  console.log('listaComparar carrito 26')
  console.log(this.listaComparar) 
}

obtenerListaComparar() {
  console.log(this.servicioComparar.compareList);
  return this.servicioComparar.compareList; 
}
openDialog() {
  this.displayDialog = true;
}

closeDialog() {
  this.displayDialog = false;
}
toggleCompare(product: any) {
  product.compare = !product.compare;

}
onPrint() {
  window.print();  
  
  
}
}

