import { Component, OnInit,Input,ChangeDetectorRef, EventEmitter,Output  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from '../../../../../services/products.service';
import {ServcioRetornoPrecioService} from '../../../../../services/servcio-retorno-precio.service';

 @Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css'],
    standalone: true
})
export class PaginationComponent implements OnInit  {

  ngOnInit(): void {
 
    }
     }