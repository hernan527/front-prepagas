import { Component } from '@angular/core';
import { ItemsService } from "./../../../../../services/items.service";
declare var showandHide: any;

@Component({
  selector: 'app-multiselect-clinicas',
  imports: [],
  templateUrl: './multiselect-clinicas.component.html',
  styleUrl: './multiselect-clinicas.component.css'
})
export class MultiselectClinicasComponent {

  constructor(
    public itemsService: ItemsService,
  ) {}



  //   onItemSelect(selectedClinica: any) {
  //     // // console.log('onItemSelect', selectedClinica);
  //     //  // // console.log(this.tempArrayShow);
  //     //  // // console.log(this.tempArrayHide);
  
  //     let newArray = [];
  // // console.log('this.productosFiltrados 1')
  //     this.productosFiltrados = this.products;
  
  //     // // console.log(this.products)
  //     var seleccion = this.selectedClinica;
  //     for (let i = 0; i < seleccion.length; i++) {
  //       // // console.log(seleccion[i])
  //     }
  //     // console.log('this.productosFiltrados 2')
  
  //     var planes = this.productosFiltrados;
  //     // console.log('this.productosFiltrados 3')
  
  //     this.showandHide = this.productosFiltrados;
  //     // planes = this.tempArrayHide.concat(this.tempArrayShow);
  //     var clinicas_seleccionadas = seleccion.map(function (
  //       selectas,
  //       index,
  //       array
  //     ) {
  //       return selectas.nombre;
  //     });
  //     if (seleccion.length === 0) {
  //       for (let j in planes) {
  //         // console.log('this.productosFiltrados 4')
  
  //         this.productosFiltrados[j].validacionclinica = "show";
  //       }
  //     } else {
  //       for (let j in planes) {
  //         var clinicas = planes[j].clinicas;
  //         var clinicas_del_plan = clinicas.map(function (
  //           clinicas_list,
  //           index,
  //           array
  //         ) {
  //           return clinicas_list.nombre;
  //         });
  //         var validation = 0;
  //         clinicas_seleccionadas.forEach((item) => {
  //           if (clinicas_del_plan.includes(item) == true) {
  //             validation = validation + 1;
  //           }
  //         });
  //         if (validation == clinicas_seleccionadas.length) {
  //           planes[j].validacionclinica = "show";
  //         } else {
  //           planes[j].validacionclinica = "hide";
  //         }
  //       }
  //     }
  
  //     // // console.log(planes)
  //     this.tempArrayHide = planes.filter(
  //       (e: any) => e.validacionclinica != "show"
  //     );
  //     this.tempArrayShow = planes.filter(
  //       (e: any) => e.validacionclinica == "show"
  //     );
  //     // // console.log(this.tempArrayShow)
  //     // // console.log(this.tempArrayHide)
  //     // console.log('this.productosFiltrados 5')
  
  //     this.productosFiltrados = this.tempArrayShow;
  //     // console.log('this.productosFiltrados 6')
  
  //     this.actualizarProductos(this.productosFiltrados);
  
  //     this.newArray = this.tempArrayShow.concat(this.tempArrayHide);
  //     this.productoService.activarFuncionEnComponenteB();
  //   }
  
  //   onItemDeSelect(item: any) {
  //     // // console.log('onItemSelect', item);
  //     //  // // console.log(this.tempArrayShow);
  //     //  // // console.log(this.tempArrayHide);
  
  //     let newArray = [];
  //     // console.log('this.productosFiltrados 7')
  
  //     this.productosFiltrados = this.productosFiltrados;
  
  //     // // console.log(this.products)
  //     var seleccion = this.selectedClinica;
  //     for (let i = 0; i < seleccion.length; i++) {
  //       // // console.log(seleccion[i])
  //     }
  //     // console.log('this.productosFiltrados 8')
  
  //     var planes = this.productosFiltrados;
  //     // console.log('this.productosFiltrados 9')
  
  //     this.showandHide = this.productosFiltrados;
  //     // planes = this.tempArrayHide.concat(this.tempArrayShow);
  //     var clinicas_seleccionadas = seleccion.map(function (
  //       selectas,
  //       index,
  //       array
  //     ) {
  //       return selectas.nombre;
  //     });
  //     if ((seleccion.length = 0)) {
  //       for (let j in planes) {
  //         // console.log('this.productosFiltrados[j].validacionclinica = "show";')
  //         this.productosFiltrados[j].validacionclinica = "show";
  //       }
  //     } else {
  //       for (let j in planes) {
  //         var clinicas = planes[j].clinicas;
  //         var clinicas_del_plan = clinicas.map(function (
  //           clinicas_list: { entity: any; },
  //           index: any,
  //           array: any
  //         ) {
  //           return clinicas_list.entity;
  //         });
  //         var validation = 0;
  //         clinicas_seleccionadas.forEach((item) => {
  //           if (clinicas_del_plan.includes(item) == true) {
  //             validation = validation + 1;
  //           }
  //         });
  //         if (validation == clinicas_seleccionadas.length) {
  //           planes[j].validacionclinica = "show";
  //         } else {
  //           planes[j].validacionclinica = "hide";
  //         }
  //       }
  //     }
  //     // // console.log(planes)
  //     this.tempArrayHide = planes.filter(
  //       (e: any) => e.validacionclinica != "show"
  //     );
  //     this.tempArrayShow = planes.filter(
  //       (e: any) => e.validacionclinica == "show"
  //     );
  //     // // console.log(this.tempArrayShow)
  //     // // console.log(this.tempArrayHide)
  //         // console.log('results 619 this.productosFiltrados = this.tempArrayShow;')
  
  //     this.productosFiltrados = this.tempArrayShow;
  
  //     this.actualizarProductos(this.productosFiltrados);
  
  //     this.newArray = this.tempArrayShow.concat(this.tempArrayHide);
  //     this.productoService.activarFuncionEnComponenteB();
  //   }
  
}
