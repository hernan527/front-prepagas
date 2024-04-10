import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormBuilder } from '@angular/forms';

import {ServcioRetornoPrecioService} from '../../../../../services/servcio-retorno-precio.service';




  @Component({
    selector: 'app-cotizar-form',
    templateUrl: './cotizar-form.component.html',
    styleUrls: ['./cotizar-form.component.scss']
})
export class CotizarFormComponent implements OnInit {
   
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

  
options: Options = {
  floor: 0,
  ceil: 100
};
  
preciosToHome=[];



 constructor(
  private formBuilder: FormBuilder,
  private retornarService: ServcioRetornoPrecioService,
  ) { 
    this.buildForm();

  } 


private buildForm(){
  this.formCotizar =this.formBuilder.group({
    grupo: [''],
    empresa_prepaga: ['0'],
    // edad_1: ['18', [Validators.required, Validators.min(18), Validators.max(64)]],
    // edad_2: ['0', [Validators.min(18), Validators.max(64)]],
    // numkids: ['0', [Validators.min(0), Validators.max(5)]],
    
    edad_1: [19],
    edad_2: [0],
    numkids: [0],
    
    
    
    tipo: [''],
    agree: [''],
    aporteOS: [''],
    sueldo: [''],
    aporte: [''],
    monoadic: [''],
    cantAport: [0],
    afinidad: [''],
    bonAfinidad: [0],
    supras: [false],
    segvida: [false],
    segvida1: [false],
    region: [''],
    personalData: this.formBuilder.group({
      // name: ['',[Validators.required, Validators.maxLength(10),Validators.pattern(/^[a-zA-Z/s]*$/)]],
      // email: ['',[Validators.required,Validators.email]],
      // phone: ['',Validators.required],
      // region: [''],
      name: [''],
      email: [''],
      phone: [''],
      region: [''],
    })
    
  });

}




  


save(event: any){
  if(this.formCotizar.valid){
    console.log('Formulario en metodo save');

    console.log(this.formCotizar.value);
  } else {
    console.log('formulario invalido');

    this.formCotizar.markAllAsTouched();
  };

  

this.retornarService.disparadorDePrecio.emit(this.formCotizar.value);
console.log('Enviando datos...',this.formCotizar.value);
this.formCotizar.reset();
}



 
  


ngOnInit()
  {
    this.nameField.valueChanges
    .subscribe(value => {
         }      )
    this.formCotizar.valueChanges
    .subscribe(value => {
    });
    this.onChanges();


  }
  onChanges(): void {
    this.formCotizar.get('grupo').valueChanges.subscribe(val => {
});
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  get grupoField (){
    return this.formCotizar.get('grupo');
  }

  get hijoField (){
    return this.formCotizar.get('hijos');
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


