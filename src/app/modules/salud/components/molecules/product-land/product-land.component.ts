import { Component, Input, OnInit,ChangeDetectionStrategy, ViewChild,  ElementRef  } from '@angular/core';
import { ModalService } from '../../../../../_modal';
import { MasDetallesComponent } from '../../templates/mas-detalles/mas-detalles.component';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ServicioDeCompararService} from '../../../../../services/servicio-de-comparar.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


export interface DialogData1 {
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
    selector: 'app-product-land',
    templateUrl: './insurance-card.component.html',
    styleUrls: ['./product-land.component.scss'],
    standalone: true
})



export class ProductLandComponent implements OnInit{
  @Input() product: any;
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
  public comparar:any = 'Comparar';
  public productList : any ;
  public filterCategory : any
  public iconStyles = { '--fa-secondary-opacity': 0.6 };


  constructor(
    private modalService: ModalService,
    public dialog: MatDialog,
    private servicioComparar: ServicioDeCompararService,
    private breakpointObserver: BreakpointObserver
    ) { 
      this.isLargeScreen = breakpointObserver.isMatched(Breakpoints.Large);
  }

  
  // @ViewChild("compararButon") compararButon: ElementRef;
   //https://bit.ly/Replacement_ElementRef
   toggleCompare() {
  console.log(this.product)
    this.product.compare = !this.product.compare;
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
  
  

}