import {Component, inject, OnInit, Input, ElementRef, Renderer2, ViewChild, Inject,HostListener  } from '@angular/core';
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ServcioRetornoPrecioService} from '../../../../../services/servcio-retorno-precio.service';
import { Options } from '@angular-slider/ngx-slider';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-form-material',
  templateUrl: './form-material.component.html',
  styleUrls: ['./form-material.component.css']
})
export class FormMaterialComponent {
  @ViewChild('campoNombre') campoNombre: ElementRef;

  dialog = inject(Dialog);

  animal: string | undefined;
  name: string;
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

openDialogs: readonly DialogRef<any, any>[]
showTipoFieldP: boolean = false;
showTipoFieldD: boolean  = false;
 // Define los grupos
 groups: number[] = [1, 2, 3, 4];
  
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
edadTitular = 0;
edadConyuge = 0;
cantidadHijos = 0;

showEdadConyuge: boolean = false;
showCantidadHijos:boolean = false;
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
  openDialog(): void {
    const dialogRef = this.dialog.open<string>(AgregarDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  
save(){
 
}
salvar(event: any){


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
   });
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
 ngOnInit(): void

  {
   
    this.formCotizar.valueChanges
    .subscribe(value => {
    });
    this.onChanges();

    this.scrollGroup = false;
    this.showTipo= false;

  
  }
  
}

@Component({
  selector: 'app-agregar-dialog',
  templateUrl: 'agregar-dialog.html',
  styleUrls: ['agregar-dialog.css'],
})
export class AgregarDialog {
  dialogRef = inject<DialogRef<string>>(DialogRef<string>);
  data = inject(DIALOG_DATA);
}



