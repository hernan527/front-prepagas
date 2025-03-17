import { Component,NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectItem } from 'primeng/api';
import { FormControl, ReactiveFormsModule,FormGroup,FormBuilder } from '@angular/forms';
import { ProductsService } from '../../../../../services/products.service';
import * as planes from "../../../../../../../public/products.json";
import { ItemsService } from '../../../../../services/items.service';

declare var addProp:any;
declare var desectItem:any;
declare var showandHide:any;


export class ListHeaderComponent {
    dropdownClinica: SelectItem[] = [];
    selectedClinica: any[] = [];
    view = 'grid';
    limitSelection = false;
    dropdownSettings: {};
    
    SortbyParam: string = 'empresa'; // Valor por defecto
    formFilter: FormGroup;
    private formBuilder: FormBuilder;
    public productosFiltrados:any[];
    tempArrayShow:any=[];
    tempArrayHide:any=[];
    selectedClinicaControl = new FormControl([]);
    ShowFilter = false;
    public products: any = (planes as any).default;
    SortDirection = 'asc';
    SearchEmpresa = '';
    empresa: FormControl = new FormControl('');
    showandHide:any;
    newArray = [];
    constructor(


      private productoService:ProductsService,

      public itemsService: ItemsService,

      ) {
        this.buildForm();
       
      }
onItemSelect(selectedClinica: any){
    console.log('onItemSelect', selectedClinica);
    //  console.log(this.tempArrayShow);
    //  console.log(this.tempArrayHide);
    
    
  
   
    
    console.log('list-header 56');

    this.productosFiltrados = this.products;
  
  // console.log(this.products)
    var seleccion = this.selectedClinica
    for( let i=0;i<seleccion.length;i++){
      // console.log(seleccion[i])
    }
    console.log('list-header 65');

    var planes = this.productosFiltrados;
    console.log('list-header 68');

    this.showandHide = this.productosFiltrados;
  // planes = this.tempArrayHide.concat(this.tempArrayShow);
    var clinicas_seleccionadas = seleccion.map(function (selectas, index, array) {
      return selectas.nombre; 
  });
  if ( seleccion.length === 0 ){
    for (let j in planes  ){
      console.log('list-header 77');

      this.productosFiltrados[j].validacionclinica = 'show'
    }
   
  
  } else {
  for (let j in planes  ) {
    var clinicas = planes[j].clinicas 
  var clinicas_del_plan = clinicas.map(function (clinicas_list, index, array) {
    return clinicas_list.nombre; 
  });
  var validation = 0
  clinicas_seleccionadas.forEach( item => { 
    if (clinicas_del_plan.includes(item) == true){
      validation = validation + 1 ;
    }
  })
  if ( validation == clinicas_seleccionadas.length){
    planes[j].validacionclinica = 'show'
  }else {
    planes[j].validacionclinica = 'hide'
  }};
  }
  
  // console.log(planes)
  this.tempArrayHide  = planes.filter((e:any)=> e.validacionclinica != "show");
  this.tempArrayShow  = planes.filter((e:any)=> e.validacionclinica == "show");
  // console.log(this.tempArrayShow)
  // console.log(this.tempArrayHide)
  console.log('list-header 107');

  this.productosFiltrados = this.tempArrayShow;
  console.log('list-header 110');
  this.actualizarProductos(this.productosFiltrados)
  
  this.newArray = this.tempArrayShow.concat(this.tempArrayHide);
  this.productoService.activarFuncionEnComponenteB();
  
  
  }   
  onItemDeSelect(item: any){
    // console.log('onItemSelect', item);
    //  console.log(this.tempArrayShow);
    //  console.log(this.tempArrayHide);
    
   
  
    let newArray = [];
    
    console.log('list-header 127');
    this.productosFiltrados = this.productosFiltrados;
  
  // console.log(this.products)
    var seleccion = this.selectedClinica
    for( let i=0;i<seleccion.length;i++){
      // console.log(seleccion[i])
    }
    console.log('list-header 135');
    var planes = this.productosFiltrados;
    console.log('list-header 137');
    this.showandHide = this.productosFiltrados;
  // planes = this.tempArrayHide.concat(this.tempArrayShow);
    var clinicas_seleccionadas = seleccion.map(function (selectas, index, array) {
      return selectas.nombre; 
  });
  if ( seleccion.length = 0 ){
    for (let j in planes  ){
      console.log('list-header 145');
      this.productosFiltrados[j].validacionclinica = 'show'
    }
   
  
  } else {
  for (let j in planes  ) {
    var clinicas = planes[j].clinicas 
  var clinicas_del_plan = clinicas.map(function (clinicas_list, index, array) {
    return clinicas_list.entity; 
  });
  var validation = 0
  clinicas_seleccionadas.forEach( item => { 
    if (clinicas_del_plan.includes(item) == true){
      validation = validation + 1 ;
    }
  })
  if ( validation == clinicas_seleccionadas.length){
    planes[j].validacionclinica = 'show'
  }else {
    planes[j].validacionclinica = 'hide'
  }};
  }
  // console.log(planes)
  this.tempArrayHide  = planes.filter((e:any)=> e.validacionclinica != "show");
  this.tempArrayShow  = planes.filter((e:any)=> e.validacionclinica == "show");
  // console.log(this.tempArrayShow)
  // console.log(this.tempArrayHide)
  console.log('list-header 173');
  this.productosFiltrados = this.tempArrayShow;
  console.log('list-header 175');
  this.actualizarProductos(this.productosFiltrados)
  
  this.newArray = this.tempArrayShow.concat(this.tempArrayHide);
  this.productoService.activarFuncionEnComponenteB();
  
  
  }   
  
filtrarPorClinicasExistente(productosFiltrados: any[], seleccion: any[]): any[] {
  console.log('list-header 185');

  let planes = productosFiltrados.slice(); // Copia de los productos filtrados existentes
  let clinicas_seleccionadas = seleccion.map(selectas => selectas.nombre);

  if (seleccion.length === 0) {
    for (let j in planes) {
      planes[j].validacionclinica = 'show';
    }
  } else {
    for (let j in planes) {
      let clinicas = planes[j].clinicas;
      let clinicas_del_plan = clinicas.map((clinicas_list: { nombre: any; }) => clinicas_list.nombre);
      let validation = 0;

      clinicas_seleccionadas.forEach(item => {
        if (clinicas_del_plan.includes(item)) {
          validation++;
        }
      });

      if (validation === clinicas_seleccionadas.length) {
        planes[j].validacionclinica = 'show';
      } else {
        planes[j].validacionclinica = 'hide';
      }
    }
  }

  let tempArrayHide = planes.filter(e => e.validacionclinica !== 'show');
  let tempArrayShow = planes.filter(e => e.validacionclinica === 'show');

  return tempArrayShow;
}



  actualizarProductos(nuevosProductos: any): void {
    console.log('list-header 223');
    this.productoService.setProductosFiltrados(nuevosProductos);
  }

  SortbyParamControl = new FormControl(this.SortbyParam);
  public productosActualizados:Array<any> = []
  private buildForm(){

    this.formFilter =this.formBuilder.group({
      buscaClinica: [''],
      empresa_prepaga: ['0'],
      selectedRating:0,
    });
  }
  toogleShowFilter() {
    this.ShowFilter = !this.ShowFilter;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
}

handleLimitSelection() {
    if (this.limitSelection) {
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
    } else {
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
    }
}

onSortDirection() {
  if (this.SortDirection === 'desc') {
    this.SortDirection = 'asc';
  } else {
    this.SortDirection = 'desc';
  }
}

onEmpresaFilter() {
  // Obtener el valor del FormControl y asignarlo a SearchEmpresa
  this.SearchEmpresa = this.empresa.value;
}

removeSelectedItem(item:any) {
  this.itemsService.removeSelection(item);{
    console.log('ok')
  }
}

removeSelection(item: any) {
  const index = this.selectedClinica.indexOf(item);
  if (index !== -1) {
    this.selectedClinica.splice(index, 1);
  }
  // this.productoService.activarFuncionEnComponenteB();

  this.onItemSelect(this.selectedClinica);
  // this.productoService.activarFuncionEnComponenteB();

}

}