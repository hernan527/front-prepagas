import { Directive, Component,Inject, Input, OnInit,ChangeDetectorRef ,ChangeDetectionStrategy, ViewChild,  ElementRef,EventEmitter, Output  } from '@angular/core';
import { ModalService } from '../../../../../_modal';
import { productsDB } from '../../../../../data/constants/mock/products';
import { MasDetallesComponent } from '../../templates/mas-detalles/mas-detalles.component';
import {MatDialog, MatDialogModule,MatDialogRef,MatDialogTitle,MAT_DIALOG_DATA,MatDialogContent,} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ServicioDeCompararService} from '../../../../../services/servicio-de-comparar.service';
import { CommonModule } from '@angular/common';  // <-- Importa CommonModule
import {MatButtonModule} from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

export interface DialogData2 {
  name: string;
  price: Number;
  id:any;
  category: string;
  rating:Number;
  clinicas: any;
  clinicasArrayObjets: any;
  clinicasmap:any;
  entidades: any;
  producto: any;
  folleto:any;
}

@Component({
    selector: 'app-product-card',
    templateUrl: './product-cardQP.component.html',
    styleUrls: ['./product-card.component.scss'],
    standalone: true,
    imports: [MatCheckboxModule,PopoverModule,MatButtonModule,MatDialogModule,CommonModule,MatTooltipModule]
})

  

export class ProductCardComponent implements OnInit{
  @Input() product: any;
  @Input() compareList: any;
  @Output() showProduct = new EventEmitter<string>();
  
bodyText: string;
  name: string;
  price: Number;
  id:Number;
  category: string;
  rating:Number;
  clinicas: any;
  clinicasArrayObjets: any;
  clinicasmap:any;
  entidades: any;
  producto: any;
  folleto:any;
  searchKey:string ="";
  isLargeScreen: boolean;
  dialogRef: MatDialogRef<MasDetallesComponent>;
  closeTimeout: any;

  public comparar:any = 'Comparar';
  public productList : any ;
  public filterCategory : any
  public iconStyles = { '--fa-secondary-opacity': 0.6 };
  html = `<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>`;
  public triggerEvent: string = 'mouseenter:mouseleave'; // Default trigger for desktop
  constructor(
    public dialog: MatDialog,
    private servicioComparar: ServicioDeCompararService,
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private deviceService: DeviceDetectorService
    ) { 
      this.isLargeScreen = breakpointObserver.isMatched(Breakpoints.Large);
  }


  onShowDetail() {
    console.log("product-card this.product.item_id: ",this.product.item_id)
    this.showProduct.emit(this.product.item_id)
  }      
  // @ViewChild("compararButon") compararButon: ElementRef;
  //https://bit.ly/Replacement_ElementRef
  toggleCompare() {
    console.log('product-land 83 this.product')
  console.log(this.product)
    this.product.compare = !this.product.compare;;
    console.log('product.land 85 this.compareList')
    console.log(this.compareList)
    
    // this.compararButon.nativeElement.innerHTML = "REMOVER";
  //   if(this.product.compare)  
  //   this.comparar  = "Remover";
  // else
  //   this.comparar = "Comparar";
}



agregarcomparar(){
  console.log(this.comparar)
  this.servicioComparar.servicioComparar.emit({data:this.comparar});
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Large])
    .subscribe(result => {
      this.isLargeScreen = result.matches;
    });
  console.log(this.product)
  this.setPopoverTrigger();
  }

  openDialog(
    // enterAnimationDuration: string, exitAnimationDuration: string,
    product?: { name: any; id: any; price: any; category: any; rating: any; clinicas: any; clinicasArrayObjets: any; clinicasmap: any; entidades: any; folleto: any; }) : void {
      const dialogRef = this.dialog.open(MasDetallesComponent, {
      // enterAnimationDuration,
      // exitAnimationDuration,
      data: { name: product ? product.name : '',
      id : product ? product.id : '', 
      price : product ? product.price : '',
      category : product ? product.category : '',
      rating : product ? product.rating : '',
      clinicas : product ? product.clinicas : '', 
      clinicasArrayObjets : product ? product.clinicasArrayObjets : '',
      clinicasmap: product ? product.clinicasmap : '', 
      entidades: product ? product.entidades : '',
      users: product ? product.clinicas : '',
      folleto: product ? product.folleto :'',
      producto: product
      },
      maxWidth: '100vw',
      maxHeight: '95vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal',
    disableClose: false
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  }
 
  
    getFormattedProductName(): string {
      // Dividir la cadena por espacios o guiones bajos y omitir el primer elemento
      const parts = this.product.name.split(/[ _]/).slice(1);
      // Volver a unir los elementos con un espacio en blanco
      return parts.join(' ');
    }
  
  
setPopoverTrigger(): void {
  const isMobile = this.deviceService.isMobile();
  if (isMobile) {
    this.triggerEvent = 'click';  // Change to click trigger on mobile
  } else {
    this.triggerEvent = 'mouseenter:mouseleave';  // Default hover trigger on desktop
  }
}

}
