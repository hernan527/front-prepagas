import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compara-item',
  templateUrl: './compara-item.component.html',
  styleUrls: ['./compara-item.component.css']
})
export class ComparaItemComponent implements OnInit {
  @Input() compareList: any;
  @Input() clinicasVal: any;
  @Input() productos: any;
  @Input() items: any;
 
  constructor() { }
  showDiv1 = false;
  showDiv2 = true;
  
  filter(value: string) {
    if (value === 'attributes') {
      this.showDiv1 = true;
      this.showDiv2 = false;
    } else if (value === 'clinicas') {
      this.showDiv1 = false;
      this.showDiv2 = true;
    } else {
      this.showDiv1 = false;
      this.showDiv2 = false;
    }
  }
  
    onPrint() {
      window.print();  
      
      
    }
  ngOnInit(): void {
  }

}
