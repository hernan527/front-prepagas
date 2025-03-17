import { Directive, Component,Inject, Input, OnInit,ChangeDetectorRef ,ChangeDetectionStrategy, ViewChild,  ElementRef,EventEmitter, Output  } from '@angular/core';
import { NxPlainButtonComponent } from '@aposin/ng-aquila/button';
import { NxSelectableCardComponent, NxCardComponent, NxCardHeaderComponent } from '@aposin/ng-aquila/card';
import { NxCopytextComponent } from '@aposin/ng-aquila/copytext';
import { NxIconComponent } from '@aposin/ng-aquila/icon';
import {
    NxPopoverComponent,
    NxPopoverTriggerDirective,
} from '@aposin/ng-aquila/popover';
import { NxErrorComponent } from '@aposin/ng-aquila/base';
import { NxHeadlineComponent } from '@aposin/ng-aquila/headline';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NxButtonComponent } from '@aposin/ng-aquila/button';
import { ModalService } from '../../../../../_modal';
import { MasDetallesComponent } from '../../templates/mas-detalles/mas-detalles.component';
import {MatDialog, MatDialogModule,MatDialogRef,MatDialogTitle,MAT_DIALOG_DATA,MatDialogContent,} from '@angular/material/dialog';
import {ServicioDeCompararService} from '../../../../../services/servicio-de-comparar.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { DeviceDetectorService } from 'ngx-device-detector';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-card-grid',
  imports: [
    NxPlainButtonComponent,
    NxSelectableCardComponent,
    NxCopytextComponent,
    NxIconComponent,
    NxPopoverComponent,
    NxPopoverTriggerDirective,
    MatCheckboxModule,
    PopoverModule,
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    MatTooltipModule,
    NxCardHeaderComponent,
    NxCardComponent,
    NxErrorComponent,
    NxSelectableCardComponent,
    NxHeadlineComponent,
    FormsModule,
    ReactiveFormsModule,
    NxButtonComponent  
],
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent {

  @Input() product: any;
  @Input() compareList: any;
  @Output() showProduct = new EventEmitter<string>();
  readonly formGroup = this.fb.group({
    card: [false, Validators.requiredTrue],
});


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
    private deviceService: DeviceDetectorService,
    private readonly fb: FormBuilder
    ) { 
      this.isLargeScreen = breakpointObserver.isMatched(Breakpoints.Large);
      this.formGroup.markAllAsTouched();
  }


  onShowDetail() {
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







