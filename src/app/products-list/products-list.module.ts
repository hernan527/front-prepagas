import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {ProductLandComponent} from './product-land/product-land.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCardPrimengComponent } from './product-card/product-card-p.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FilterPipe } from './pipes/filter.pipe';
import { RatingFilterPipe } from './pipes/rating.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ClinicasPipe } from './pipes/clinicas.pipe';
import { ModalModule } from '../_modal';
import { HomeModule } from '../home/home.module';
import { ComparaItemModule } from './compara-item/compara-item.module';
import { ComparaSelectComponent } from './compara-select/compara-select.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule} from 'ng2-pdf-viewer';
import { PdfViewerComponent} from './pdf-viewer/pdf-viewer.component';
// import { HeroFormComponent } from '../hero-form/hero-form.component';
import { FiltroClinica } from './pipes/clinica.pipe'
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ComparatorComponent } from './comparator/comparator.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { DialogService } from 'primeng/dynamicdialog';
import { RatingModule } from 'primeng/rating';
// import { NgSelectModule } from '@ng-select/ng-select';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PaginatorModule } from 'primeng/paginator';
import {SidebarModule} from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from "primeng/dataview";
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import { FiltersProductsComponent } from './filters-products/filters-products.component';
import { TooltipModule } from 'primeng/tooltip';
import {SliderModule} from 'primeng/slider';
import { DividerModule } from 'primeng/divider';
import { ProductsService } from './products.service';

const publicApi = [
  ProductsListComponent,
  ProductLandComponent,
  ProductCardComponent
];

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  }
];

@NgModule({
    declarations: [
        publicApi,
        ProductsListComponent,
        ProductCardComponent,
        ProductLandComponent,
        ProductDetailsComponent,
        FilterPipe,
        SortPipe,
        ClinicasPipe,
        ComparaSelectComponent,
        FiltroClinica,
        PdfViewerComponent,
        ComparatorComponent,
        InputSearchComponent,
        ProductCardPrimengComponent,
        RatingFilterPipe,
        FiltersProductsComponent
    ],
    exports: [publicApi],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule,
        // NgxSkeletonLoaderModule,
        ModalModule,
        ReactiveFormsModule,
        HomeModule,
        MatTabsModule,
        FormsModule,
        PdfViewerModule,
        ScrollingModule,
        RouterModule.forChild(routes),
        ComparaItemModule,
        MultiSelectModule,
        ChipModule,
        CardModule,
        RatingModule,
        ButtonModule,
        RippleModule,
        SplitButtonModule,
        ToggleButtonModule,
        PaginatorModule,
        SidebarModule,
        DialogModule,
        DataViewModule,
        InputTextModule,
        PanelModule,
        TooltipModule,
        SliderModule,
        DividerModule
        
        // NgSelectModule
        
    ],
    providers: [DialogService,ProductsService]
})
export class ProductsListModule {
  
}


 