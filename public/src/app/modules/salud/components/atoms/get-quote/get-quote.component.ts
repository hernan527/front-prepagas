import { Options } from '@angular-slider/ngx-slider';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, Input, ElementRef, Renderer2, ViewChild, Inject  } from '@angular/core';
import {FormGroup, FormBuilder, Validators,  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ServcioRetornoPrecioService} from '../../../../../services/servcio-retorno-precio.service';
import $ from 'jquery';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {SplitButtonModule} from 'primeng/splitbutton';


@Component({
  selector: 'app-get-quote',
  standalone: true,
  imports: [CommonModule,ButtonModule,RippleModule,DialogModule,SplitButtonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {
  @ViewChild('campoNombre') campoNombre: ElementRef;
    checkedmon: boolean;
  checkedaf: boolean;
  checkedsupras: boolean;
  checkedseg: boolean;
  checkedseg1: boolean;
  checkedagree: boolean;

  showDiv : boolean;
  showDiv2 : boolean;
  formCotizar: FormGroup;
  cotizar: FormGroup;
  formPersonalData : FormGroup;
  submitted = false;
  options: Options = {
  floor: 0,
  ceil: 100
};
  
preciosToHome=[];
selectedPlanType: string = ''; // Inicializa con un valor numérico
selectedHijosType: string = '';
selectedGrupoType: string = '';
selectedVolverType: string = '';
selectedAportesType: string = '';
selectedZonaType: string = '';
valorSueldo: number = 0;
selectedContactoType: string = '';
formularioEnviado: boolean = false;
selectedType: string = '';
selectedGroup: number = 0;
scrollGroup: boolean;
  // declare variables
edad_1: string = '';
edad_2: string = '';
edadesHijos: string = '';
edades_Hijos: string = '';
sueldo: string = '';
showTipo: boolean;
name: string = '';
phone: string = '';
email: string = '';
region: string = '';
 constructor(
  private formBuilder: FormBuilder,
  private retornarService: ServcioRetornoPrecioService,
  private router: Router,
  private renderer: Renderer2,
  private el: ElementRef,
  @Inject(DOCUMENT) private document: Document,
  
  ) {  
    this.buildForm();
    // this.buildFormGroups();
   

  } 





  




  


save(){
  console.log('Estado del formulario:', this.formCotizar.status);
  if(this.formCotizar.valid){
    console.log('Formulario en metodo save');
    this.retornarService.setFormularioData(this.formCotizar.value)

    console.log(this.formCotizar.value);
  } else {
    console.log('Formulario inválido. Detalles:', this.formCotizar.errors);
    this.formCotizar.markAllAsTouched();  // Esto marcará todos los campos como tocados para mostrar mensajes de error.
  };

  
this.router.navigate(['/salud/results']);
this.formularioEnviado = true;
this.formCotizar.reset();
}
salvar(event: any){
  if(this.formPersonalData.valid){
    // console.log('Formulario en metodo save');
    // this.retornarService.setFormularioData(this.formCotizar.value)

    // console.log(this.formCotizar.value);
  } else {
    // console.log('formulario invalido');

    this.formPersonalData.markAllAsTouched();
  };
this.router.navigate(['/salud/results']);

}

private buildForm(){
  this.formCotizar =this.formBuilder.group({
   _id: '',
   group: [''],
   empresa_prepaga: ['0'],
   edad_1: [18],
   edad_2: [0],
   numkids: [0],
   plan_type:[''],
   
   tipo: [''],
   agree: [true],
   aporteOS: [''],
   sueldo: [0],
   aporte: [0],
   monoadic: [0],
   cantAport: [0],
   afinidad: [''],
   bonAfinidad: [0],
   supras: [false],
   segvida: [false],
   segvida1: [false],
   name: [''],
   email: [''],
   phone: [''],
   region: [''],     
   });
 }
ngOnInit(): void

  {
   
    this.formCotizar.valueChanges
    .subscribe(value => {
    });
    this.onChanges();

    this.scrollGroup = false;
    this.showTipo= false;

  
  }
  

  getNameValue() {
    // console.log(this.nameField.value);
  }

  // Declarar una propiedad en tu componente para almacenar el tipo de plan seleccionado

// Función para cambiar el tipo de plan cuando se hace clic en un botón
selectZonaType(type: string) {
  this.selectedZonaType = type;
  console.log(this.selectedZonaType)
  if( this.selectedZonaType === 'CABA'){
    this.formCotizar.get('personalData').get('region').setValue("CABA");
  } else if (this.selectedZonaType === 'GBA Norte'){
    this.formCotizar.get('personalData').get('region').setValue("GBA Norte");
  } else if ( this.selectedZonaType === 'GBA Sur'){
    this.formCotizar.get('personalData').get('region').setValue("GBA Sur");
  } else if ( this.selectedZonaType === 'GBA Oeste'){
    this.formCotizar.get('personalData').get('region').setValue("GBA Oeste");
  }
  const regionValue = this.formCotizar.get('personalData').get('region').value;
  // console.log('Valor de region:', regionValue);
  this.selectedVolverType='';
}

selectPlanType(type: string) {
    this.selectedPlanType = type;
    if(this.selectedPlanType === 'empresa' ){
      this.selectedGrupoType = 'empresa'
    } else {
      this.selectedGrupoType = this.selectedPlanType + this.selectedHijosType;
    }
  // Actualiza el valor del campo "grupo" en el formulario
  this.selectedVolverType = '';
  this.formCotizar.get('group').setValue(this.selectedGrupoType);
    // console.log("Adultos :" + this.selectedPlanType);
    // console.log("Hijos :" + this.selectedHijosType);
    // console.log("Grupo :" + this.selectedGrupoType);
    // console.log("Volver :"  + this.selectedVolverType);

  }


  selectHijosType(type: string) {
    this.selectedHijosType = type;
    if(this.selectedPlanType === 'empresa' ){
      this.selectedGrupoType = 'empresa'
    } else {
      this.selectedGrupoType = this.selectedPlanType + this.selectedHijosType;
    
  // Actualiza el valor del campo "grupo" en el formulario
  if( this.selectedGrupoType === 'adulto individual sin hijos'){
    this.formCotizar.get('group').setValue(1);


  } else if (this.selectedGrupoType === 'adulto individual con hijos'){
    this.formCotizar.get('group').setValue(2);
  
  } else if ( this.selectedGrupoType === 'adulto pareja sin hijos'){
    this.formCotizar.get('group').setValue(3);
  } else if ( this.selectedGrupoType === 'adulto pareja con hijos'){
    this.formCotizar.get('group').setValue(4);
  }}
  this.selectedVolverType = '';
    // console.log("Adultos :" + this.selectedPlanType);
    // console.log("Hijos :" + this.selectedHijosType);
    // console.log("Grupo :" + this.selectedGrupoType);
    // console.log("Volver :"  + this.selectedVolverType)
    const groupValue = this.formCotizar.get('group').value;
    // console.log('Valor de grupo:', groupValue);


  }

  selectVolverType(type: string){
    this.selectedVolverType = type;
    if(type === 'group'){
      this.selectedPlanType = '';
      this.selectedHijosType ='';
      this.selectedGrupoType = '';
      this.selectedVolverType = '';
      this.selectedAportesType = '';
      this.valorSueldo = 0;
      this.formCotizar.get('edad_1').reset();
      this.formCotizar.get('edad_2').reset();
      this.formCotizar.get('numkids').reset();
      this.formCotizar.get('sueldo').reset();
    }
 
    // console.log("Volver :"  + this.selectedVolverType)

  }
  validateInput() {
    const control = this.formCotizar.get('edad_1');
    if (control.invalid && control.dirty) {
      control.markAsTouched();
    }
  }
  selectAportesType(type: string){
    this.selectedAportesType = type;
    console.log(this.selectedAportesType)
    if(this.selectedAportesType == 'P'){
    this.formCotizar.get('sueldo').setValue("100000");
    }
    this.formCotizar.get('tipo').setValue(type);
    const tipoValue = this.formCotizar.get('tipo').value;
    console.log('Valor de tipo:', tipoValue);
  }

  actualizarSueldo(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.valorSueldo = parseInt(valor); // Otra opción es utilizar parseInt para obtener un número entero
  // console.log(valor)
  }

  selectContactoType(type: string) {
    this.selectedContactoType = type;
    if (this.selectedContactoType === 'phone') {
      this.formPersonalData.get('medioContacto').setValue('phone');
    } else if (this.selectedContactoType === 'whatsapp') {
      this.formPersonalData.get('medioContacto').setValue(type);
    }
  
    const tipoValue = this.formCotizar.get('tipo').value;
  
    setTimeout(() => {
      this.router.navigate(['/salud/results']); // Ruta a la siguiente página después de 4 segundos
    }, 4000);
  }
  checkValue(value: number) {
    const groupValue = this.formCotizar.get('group').value;
    console.log(`groupValue: ${groupValue}`);
    return groupValue === value;
  }

  
  

  get grupoField (){
    console.log(this.formCotizar.get('group').value)
    return this.formCotizar.get('group');
  }
  get prepagaField(){
    return this.formCotizar.get('empresa_prepaga');
  }

  get age1Field(){
    return this.formCotizar.get('edad_1');
  }
  get age2Field(){
    return this.formCotizar.get('edad_2');
  }

get hijosField(){
  console.log(this.formCotizar.get('numkids').value)
  return this.formCotizar.get('numkids');
}
get tipoField(){
  return this.formCotizar.get('tipo');
}
get ingresoField(){
  return this.formCotizar.get('sueldo');
}

get aporteosField(){
  return this.formCotizar.get('aporteOS');
}

get sueldoField(){
  return this.formCotizar.get('sueldo');
}
get aporteField(){
  return this.formCotizar.get('sueldo');
}
get regionField(){
  return this.formCotizar.get('region');
}
get monoadicField (){
  return this.formCotizar.get('monoadic');
}
get cantAport(){
  return this.formCotizar.get('cantAport');
}
get afinidadField (){
  return this.formCotizar.get('afinidad');
}
get bonAfinidadField (){
  return this.formCotizar.get('bonAfinidad');
}
get segvida(){
  return this.formCotizar.get('segvida');
}
get segvida1(){
  return this.formCotizar.get('segvida1');
}

get nameField(){
  return this.formCotizar.get('personalData.name');
  }

get emailField(){
  return this.formCotizar.get('personalData.email');
}
get phoneField(){
  return this.formCotizar.get('personalData.phone');
}

get agreeField(){
  return this.formCotizar.get('agree');
}
  get isNameFieldValid(){
    return this.nameField.touched && this.nameField.valid;
  }
  get isNameFieldInvalid(){
    return this.nameField.touched && this.nameField.invalid;
  }

cambiarValor(type:string) {
  this.formCotizar.get('grupos').setValue(type);
  }

  mostrarCampoEdad() {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.campo-edad'), 'display', 'block');
    // Puedes aplicar animaciones CSS aquí si es necesario
  }

  ocultarCampoEdad() {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.campo-edad'), 'display', 'none');
    // Puedes aplicar animaciones CSS aquí si es necesario
  }

  
  scrollToElement() {
    console.log('scroll');
    const element = this.el.nativeElement.querySelector('.campo-edad');
  
    if (element) {
      this.renderer.setProperty(window, 'scroll', 0);
  
      // Calcula el desplazamiento para centrar el elemento en la ventana
      const windowHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;
      const offset = Math.max(0, (windowHeight - elementHeight) / 2);
  
      // Espera un breve momento antes de desplazar
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }, 50); // Puedes ajustar el tiempo según sea necesario
    }
  }
  

  selectGroup(type: number) {
    this.scrollToElement()
    this.formCotizar.get('group').setValue(type);

    this.selectedGroup = type;
    console.log(this.selectedType)
    if(this.scrollGroup = false){
    
    this.scrollGroup = true;
    } else{return}
    


  }
  onChanges(): void {
  this.formCotizar.get('group').valueChanges.subscribe(groupValue => {
    if ( groupValue === 1  ){
      
      this.formCotizar.get('edad_2').reset();
      this.formCotizar.get('numkids').reset();
      this.edad_2 = '';
      this.edadesHijos = '';
      this.edades_Hijos = '';
    }
    else if( groupValue === 2 ){
       this.formCotizar.get('edad_2').reset();
      this.edad_2 = '';
      this.edadesHijos = '';
    }else if( groupValue === 3   ){
      
      this.formCotizar.get('numkids').reset();
      this.edadesHijos = '';
      this.edades_Hijos = '';
    }else{
      this.showTipo = false                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    
    }

      console.log('grupo onChanges: ' + groupValue)
});
  }
  onInputChange(event: any, fieldName: string) {
    const groupValue = this.formCotizar.get('group').value;
    console.log('grupo onInputChange: ' + groupValue);
const edad1Value = this.formCotizar.get('edad_1').value;
const edad2Value = this.formCotizar.get('edad_2').value;
const numKidsValue = this.formCotizar.get('numkids').value;
const edad1Numero = parseInt(edad1Value, 10); // 10 es la base numérica, generalmente se usa 10 para decimal
const edad2Numero = parseInt(edad2Value, 10); // 10 es la base numérica, generalmente se usa 10 para decimal
const numKidsNumero = parseInt(numKidsValue, 10); // 10 es la base numérica, generalmente se usa 10 para decimal
console.log('grupo :' + groupValue)


    const valorCampo = event.target.value;
    console.log(`Carácter actual en ${fieldName}:`, valorCampo);

    // Actualiza el valor en el formulario reactivo según el campo específico
    if (fieldName === 'edad_1') {
      this.formCotizar.get('edad_1').setValue(valorCampo);
    } else if (fieldName === 'edad_2') {
      this.formCotizar.get('edad_2').setValue(valorCampo);
    } else if (fieldName === 'sueldo') {
      this.formCotizar.get('sueldo').setValue(valorCampo);
  } else if(groupValue === 4 &&  fieldName === 'edades_Hijos' ){
    this.formCotizar.get('numkids').setValue(valorCampo);
  }else if(groupValue === 2 &&  fieldName === 'edadesHijos' ){
    this.formCotizar.get('numkids').setValue(valorCampo);
  } else if(fieldName === 'name'){
    this.formCotizar.get('name').setValue(valorCampo);
  }else if(fieldName === 'phone'){
    this.formCotizar.get('phone').setValue(valorCampo);
  }else if(fieldName === 'email'){
    this.formCotizar.get('email').setValue(valorCampo);
  }

  if (groupValue === 4) {
    this.showTipo = edad1Numero > 17 && edad2Numero > 17 && numKidsNumero >= 1;
  } else if (groupValue === 1) {
    this.showTipo = edad1Numero > 17;
  } else if (groupValue === 2) {
    this.showTipo = edad1Numero > 17 && numKidsNumero >= 1;
  } else if (groupValue === 3) {
    this.showTipo = edad1Numero > 17 && edad2Numero > 17;
  } else {
    // Manejar caso else si es necesario
    this.showTipo = false;
  }
  if (groupValue === 4) {
    this.showTipo = edad1Numero !> 17 || edad2Numero !> 17 || numKidsNumero !>= 1;
  } else if (groupValue === 1) {
    this.showTipo = edad1Numero !> 17;
  } else if (groupValue === 2) {
    this.showTipo = edad1Numero !> 17  || numKidsNumero !>= 1;
  } else if (groupValue === 3) {
    this.showTipo = edad1Numero !> 17 || edad2Numero !> 17;
  } else {
    // Manejar caso else si es necesario
    this.showTipo = false;
  }

  if (groupValue === 4) {
    this.showTipo = this.edad_1 === '' || this.edad_2  === '' || this.edadesHijos  === '' ;
  } else if (groupValue === 1) {
    this.showTipo = this.edad_1 === '';
  } else if (groupValue === 2) {
    this.showTipo = this.edad_1 === ''  || this.edades_Hijos === '';
  } else if (groupValue === 3) {
    this.showTipo = this.edad_1 === '' || this.edad_2 === '';
  } else {
    // Manejar caso else si es necesario
    this.showTipo = false;
  }
 
  // Invertir el valor de showTipo
  this.showTipo = !this.showTipo;
  console.log('showTipo:', this.showTipo);

}
// Puedes agregar console.log para depuración si es necesario
}
