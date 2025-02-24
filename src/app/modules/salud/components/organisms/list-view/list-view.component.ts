import { Component, Output, EventEmitter, Input,OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import { NgIf } from '@angular/common';
@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrl: './list-view.component.css',
    standalone: true,
    imports: [MatIconModule,MatButtonToggleModule,MatSelectModule] // <--- Add MatButtonModule here    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListViewComponent implements OnInit, OnChanges {
    view: string = "list";
    @Output() messageEvent = new EventEmitter<string>();
    layout: string = 'list';
    @Input() productosFiltrados: any;
    @Input() products: any;
    SortDirection = "asc";
    cadena: any
  definirLength(){
if(this.productosFiltrados){
this.cadena = this.productosFiltrados.length
} else {
  this.cadena = this.products.length
}
  }

  ngOnInit(): void {
    this.definirLength()


  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productosFiltrados'] || changes['products']) {
      this.definirLength();
    }
  }
    sendMessage(string) {
        this.view = string;
        this.messageEvent.emit(this.view);
      }
   
  onSortDirection() {
    if (this.SortDirection === "desc") {
      this.SortDirection = "asc";
    } else {
      this.SortDirection = "desc";
    }
  }

}
