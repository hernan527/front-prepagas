import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../../../../../../_modal';
import { MatTabsModule } from '@angular/material/tabs';
import { NgIf, NgFor, KeyValuePipe } from '@angular/common';


var  check: any;
var items:any;
@Component({
    selector: 'app-compara-clinicas',
    templateUrl: './compara-clinicas.component.html',
    styleUrls: ['./compara-clinicas.component.scss'],
    standalone: true,
    imports: [NgIf, MatTabsModule, NgFor, KeyValuePipe]
})
export class ComparaClinicasComponent implements OnInit {
  @Input() clinicasVal: any;
  @Input() productos: any;
  @Input() items: any;
 

 closeModal(id: string) {
 
  this.modalService.close('custom-modal-2');
}

  
 constructor(

  private modalService: ModalService,
 ) {   }

 showDiv1 = false;
showDiv2 = true;

filter(value: string) {
  if (value === 'basico') {
    this.showDiv1 = true;
    this.showDiv2 = false;
  } else if (value === 'intermedio') {
    this.showDiv1 = false;
    this.showDiv2 = true;
  } else {
    this.showDiv1 = false;
    this.showDiv2 = false;
  }
}
propKey: string = '';

  onPrint() {
    window.print();  
    
    
  }
  ngOnInit() {

    console.log(this.clinicasVal);

    console.log(this.productos);
    
    console.log(this.items);
  }

  findEmpresaById(itemId: any): any {
    const planes = this.productos.find((item: { item_id: any; }) => item.item_id === itemId);
    return planes ? planes.empresa : ''; // Devuelve el "name" si se encuentra, de lo contrario, una cadena vacía.
  }

  findNameById(itemId: any): any {
    const planes = this.productos.find((item: { item_id: any; }) => item.item_id === itemId);
    return planes ? planes.name : ''; // Devuelve el "name" si se encuentra, de lo contrario, una cadena vacía.
  }

  
};

