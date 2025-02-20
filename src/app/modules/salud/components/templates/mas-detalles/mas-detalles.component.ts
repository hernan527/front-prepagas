import { Component, Inject, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLinkActive, Routes } from '@angular/router';

import {DialogData1} from '../../../components/molecules/product-land/product-land.component';
import {DialogData2} from '../../../components/molecules/product-card/product-card.component';
import { MatButtonModule } from '@angular/material/button';
import { ClinicasListGroupComponent } from './clinicas-list-group/clinicas-list-group.component';
import { MatTabsModule } from '@angular/material/tabs';






@Component({
    selector: 'app-mas-detalles',
    templateUrl: './mas-detalles.component.html',
    styleUrls: ['./mas-detalles.component.css'],
    standalone: true,
    imports: [
        MatDialogModule,
        MatTabsModule,
        ClinicasListGroupComponent,
        MatButtonModule,
    ],
})
export class MasDetallesComponent implements OnInit, OnDestroy {
  selectedIndex;
  matTabLabels = ['Clinicas y Sanatorios','Folleto'];
  product: any;
  public pdfSrc : string;
folleto: string;
  navLinks = [];
  selectedIndexChange(val: number) {
    this.selectedIndex = val;
    console.log('this is selected index: ', val);
  }

  isViewInitialized = false;
    myObject = {
    'key1': 'value1',
    'key2': 'value2'
  };

  title: any;
 
  
  constructor(public dialogRef: MatDialogRef<MasDetallesComponent>,private route: ActivatedRoute,
    
    private router: Router,
    private changeDetector: ChangeDetectorRef,
       @Inject(MAT_DIALOG_DATA) public data1: DialogData1,
       @Inject(MAT_DIALOG_DATA) public data2: DialogData2
      //  ,
      //  @Inject(MAT_DIALOG_DATA) public data2: DialogData2,
   ) { 
   }


  mySortingFunction = (a, b) => {
    return a.key > b.key ? -1 : 1;
  }

  map = new Map([['mapKey1', 'mapValue1'], ['mapKey2', 'mapValue2']]);
  
    openTab = 1;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }

  ngOnInit(): void {
   if (this.data1){
      console.log(this.data1.id),
    console.log(this.data1.name),
    console.log(this.data1.price),
    console.log(this.data1.category),
    console.log(this.data1.rating),
    console.log(this.data1.clinicas),
    console.log(this.data1.producto),
    console.log("pdfSrc");
    this.product= this.data1.producto;
    this.folleto= 'assets/archivos/' + this.product.folleto[2] + '/beneficios/' + this.product.folleto[2]
    this.pdfSrc = this.data1.folleto[0];
    }else
     if(this.data2){    
      console.log(this.data2.id),
      console.log(this.data2.name),
      console.log(this.data2.price),
      console.log(this.data2.category),
      console.log(this.data2.rating),
      console.log(this.data2.clinicas),
      console.log(this.data2.producto),
    this.product= this.data2.producto;
    this.folleto= 'assets/archivos/' + this.product.folleto[2] + '/beneficios/'
    + this.product.folleto[2]
    this.pdfSrc = this.data2.folleto[0];
  }
    
    
    

    
    this.navLinks = (
      this.route.routeConfig && this.route.routeConfig.children ?
        this.buildNavItems(this.route.routeConfig.children) :
        []
    );
    console.warn('----nav links founded: ', this.navLinks);
  };

    onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnDestroy() {
    console.warn('---- Dialog was destroyed ----');
    // this.router.navigate(['']);
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  buildNavItems(routes: Routes) {
    return (routes)
      .filter(route => route.data)
      .map(({ path = '', data }) => ({
        path: path,
        label: data.label,
        icon: data.icon
      }));
  }

  // isLinkActive(rla: RouterLinkActive): boolean {
  //   const routerLink = rla.linksWithHrefs.first;

  //   return this.router.isActive(routerLink.urlTree, false);
  // }
}
