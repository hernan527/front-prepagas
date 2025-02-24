import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {SplitButtonModule} from 'primeng/splitbutton';
import {FormGroup, FormBuilder } from '@angular/forms';
import {ServcioRetornoPrecioService} from '../../../../../services/servcio-retorno-precio.service';
import { CoeficientesService } from '../../../../../services/coeficientes.service'; // Asegúrate de importar el servicio


@Component({
    selector: 'app-get-quote',
    imports: [CommonModule, ButtonModule, RippleModule, DialogModule, SplitButtonModule],
    templateUrl: './get-quote.component.html',
    styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {
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

  
// options: Options = {
//   floor: 0,
//   ceil: 100
// };
  
preciosToHome=[];
  display: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private retornarService: ServcioRetornoPrecioService,
    private coeficientesService: CoeficientesService // Inyecta el servicio
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
        coeficientes: [this.coeficientesService.coeficientes], // Agrega la propiedad coeficientes
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
    
    ngOnInit()
  {
    // this.nameField.valueChanges
    // .subscribe(value => {
    //      }      )
    this.formCotizar.valueChanges
    .subscribe(value => {
    });
    this.onChanges();


  }
  onChanges(): void {
    this.formCotizar.get('grupo').valueChanges.subscribe(val => {
});
  }

  
  showDialog() {
      this.display = true;
  }

}
