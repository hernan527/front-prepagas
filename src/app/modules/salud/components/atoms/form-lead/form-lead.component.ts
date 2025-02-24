import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ServcioRetornoPrecioService} from '../../../../../services/servcio-retorno-precio.service';

@Component({
    selector: 'app-form-lead',
    templateUrl: './form-lead.component.html',
    styleUrls: ['./form-lead.component.css'],
    imports: [FormsModule, ReactiveFormsModule]
})
export class FormLeadComponent {

  formLead: FormGroup;
  name: string = '';
  phone: string = '';
  email: string = '';
  region: string = '';
  formularioEnviado: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private retornarService: ServcioRetornoPrecioService

    
    ) {  
      this.buildForm();
      // this.buildFormGroups();
     
  
    } 


    private buildForm(){
      this.formLead =this.formBuilder.group({
       _id: '',
      
       name: [''],
       email: [''],
       phone: [''],
       region: [''],     
       });
     }
    ngOnInit(): void
    
      {
       
        this.formLead.valueChanges
        .subscribe(value => {
        });
       
    
      
      }
      








  save(){
    console.log('Estado del formulario:', this.formLead.status);
    if(this.formLead.valid){
      console.log('Formulario en metodo save');
  
      console.log(this.formLead.value);
    } else {
      console.log('Formulario inválido. Detalles:', this.formLead.errors);
      this.formLead.markAllAsTouched();  // Esto marcará todos los campos como tocados para mostrar mensajes de error.
    };
  
    
  this.formularioEnviado = true;
  this.formLead.reset();
  }


}
