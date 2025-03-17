import { Component,Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogService } from './../../../../../services/dialog.service';
import { FormularioComponent } from "./../formulario/formulario.component";
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: 'app-form-banner',
    templateUrl: './form-banner.component.html',
    styleUrls: ['./form-banner.component.css'],
    imports: [
      FormsModule,CommonModule,
      FormularioComponent,
      DialogModule]
})
export class FormBannerComponent implements OnInit{
  @Input() isSmallScreen = false;
  visible = false;
  constructor(   
     private dialogService: DialogService,
  ){}

  async ngOnInit(): Promise<void> {
  
    this.dialogService.visible$.subscribe((value) => {
      console.log("Valor actual de visible$: ", value);
      this.visible = value; // Asigna el valor a una propiedad del componente
    });
        
  
  
  
  }





  showFormDialog() {
    // this.visible = true;

    this.dialogService.toggleVisibility('results');
  }
}
