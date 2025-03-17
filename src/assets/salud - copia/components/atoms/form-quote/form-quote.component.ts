import { Options } from '@angular-slider/ngx-slider';
import { Router } from '@angular/router';
import { Component, OnInit, Input, ElementRef, ViewChild  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ServcioRetornoPrecioService} from '../../../../../services/servcio-retorno-precio.service';
import { CoeficientesService } from '../../../../../services/coeficientes.service'; // Asegúrate de importar el servicio
import { NgIf } from '@angular/common';




@Component({
    selector: 'app-form-quote',
    templateUrl: './form-quote.component.html',
    styleUrls: ['./form-quote.component.css'],
    imports: [NgIf, FormsModule, ReactiveFormsModule]
})
export class FormQuoteComponent {
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

 constructor(
  private formBuilder: FormBuilder,
  private retornarService: ServcioRetornoPrecioService,
  private coeficientesService: CoeficientesService, // Inyecta el servicio
  private router: Router
  ) { 
    this.buildForm();
    this.buildFormGroups()

  } 


private buildFormGroups(){
  this.formPersonalData =this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      medioContacto: [''],


  });

}

private buildForm(){
  

}


  


save(event: any){
  if(this.formCotizar.valid){
    // console.log('Formulario en metodo save');
    this.retornarService.setFormularioData(this.formCotizar.value)

    // console.log(this.formCotizar.value);
  } else {
    // console.log('formulario invalido');

    this.formCotizar.markAllAsTouched();
  };

  
// this.router.navigate(['/salud/results']);
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
ngOnInit()

  {
    this.formCotizar =this.formBuilder.group({
      _id: '',
      group: [0],
      empresa_prepaga: ['0'],
      edad_1: [18, [Validators.required, Validators.min(18), Validators.max(64)]],
      edad_2: [18, [Validators.required,Validators.min(18), Validators.max(64)]],
      numkids: [1, [Validators.required,Validators.min(0), Validators.max(5)]],
      plan_type:[''],
      
      tipo: [''],
      agree: [true],
      aporteOS: [''],
      sueldo: [100000, [Validators.required,Validators.min(100000), Validators.max(1000000)]],
      aporte: [0],
      monoadic: [0],
      cantAport: [0],
      afinidad: [''],
      bonAfinidad: [0],
      supras: [false],
      segvida: [false],
      segvida1: [false],
      region: [''],   
    });
    this.nameField.valueChanges
    .subscribe(value => {
         }      )
    this.formCotizar.valueChanges
    .subscribe(value => {
    });
    this.onChanges();
  }
  onChanges(): void {
    this.formCotizar.get('group').valueChanges.subscribe(val => {
});
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
    if(this.selectedAportesType == 'P'){
    this.formCotizar.get('sueldo').setValue("100000");
    }
    this.formCotizar.get('tipo').setValue(type);
    const tipoValue = this.formCotizar.get('tipo').value;
    // console.log('Valor de tipo:', tipoValue);
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
  

  
  

  get grupoField (){
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

}


