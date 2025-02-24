import { Options } from '@angular-slider/ngx-slider';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, Input, ElementRef, Renderer2, ViewChild, Inject,HostListener   } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ServcioRetornoPrecioService} from '../../../../../services/servcio-retorno-precio.service';
import { filter } from 'rxjs/operators';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { FormBannerComponent } from '../form-banner/form-banner.component';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.css'],
    imports: [FormBannerComponent]
})
export class  SearchFormComponent  {

  @ViewChild('campoNombre') campoNombre: ElementRef;

 constructor(

  
  ) {  
    // this.buildForm();
    // this.buildFormGroups();
   

  } 





  




  


ngOnInit(): void

  {
 
  }
  

  
}

