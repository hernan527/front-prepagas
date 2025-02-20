import { NgModule } from '@angular/core';
import { SaludRoutingModule } from './salud-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';
import { ModalModule } from './../../_modal'
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
// atoms


import { MatSelectModule } from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
// pages 
import { DefaultComponent } from './pages/default/default.component';
import { ResultsOriginalComponent } from './pages/results/results-original.component';

import { ResultsComponent } from './pages/results/results.component';
import { DetailsComponent } from './pages/details/details.component';
import { CompareComponent } from './pages/compare/compare.component';
// import { DialogModule } from 'primeng/dialog';
import { FilterPipe } from './../../../pipes/filter.pipe';
import { SortPipe } from './../../../pipes/sort.pipe'
import { MaterialModule } from '../../material/material.module';
import {Dialog, DialogRef, DIALOG_DATA,DialogModule} from '@angular/cdk/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DividerModule } from 'primeng/divider';

// molecules
import { ProductLandComponent } from './components/molecules/product-land/product-land.component';
import { ProductCardComponent } from './components/molecules/product-card/product-card.component';
// organisms






import { DialogService } from 'primeng/dynamicdialog';
import { ProductsService } from './../../services/products.service';

import { ReactiveFormsModule } from '@angular/forms';
import { components } from './components';
import { modules } from './components';



import { PdfViewerModule} from 'ng2-pdf-viewer';
import {FormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { BannerListComponent } from './components/organisms/banner-list/banner-list.component';
import { FormBannerComponent } from './components/atoms/form-banner/form-banner.component';
import { FormMaterialComponent } from './components/atoms/form-material/form-material.component';


const publicApi = [
	ResultsComponent,
	ProductLandComponent,
	ProductCardComponent
  ];

@NgModule({
    exports: [
        publicApi
    ],
    imports: [
        SharedModule,
        SaludRoutingModule,
        DividerModule,
        ReactiveFormsModule,
        PdfViewerModule,
        // NgxSkeletonLoaderModule,
        ReactiveFormsModule,
        ScrollingModule,
        NgSelectModule,
        ModalModule,
        MatFormFieldModule,
        DialogModule,
        MatIconModule,
        MatDialogModule,
        MatListModule,
        MatTabsModule,
        TabViewModule,
        ButtonModule,
        TableModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
        MaterialModule,
        MatAutocompleteModule,
        FormsModule,
        ...modules,
        publicApi,
        DefaultComponent,
        DetailsComponent,
        ResultsComponent,
        ResultsOriginalComponent,
        CompareComponent,
        FilterPipe,
        SortPipe,
        EmpresasComponent,
        ...components
    ],
    providers: [
        DialogService,
        ProductsService
    ]
})
export class SaludModule {}
