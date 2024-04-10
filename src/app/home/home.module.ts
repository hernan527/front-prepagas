import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeProductsComponent } from './home-products/home-products.component';
import { MaterialModule } from '../material/material.module';
import { ModalModule } from '../_modal';
import { CompareComponent } from './compare/compare.component';
import { CompareItemComponent } from './compare-item/compare-item.component';
import {MatTabsModule} from '@angular/material/tabs';
// import { NgParticlesModule } from 'ng-particles';
import { PrepagasComponent } from './prepagas/prepagas.component';
import { CotizarFormComponent } from './cotizar-form/cotizar-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { CompararSelectComponent } from './comparar-select/comparar-select.component';
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';









@NgModule({
  declarations: [
    HomeComponent,
    HomeProductsComponent,
    CompareComponent,
    CompareItemComponent,
    PrepagasComponent,
    CotizarFormComponent,
    CompararSelectComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    ModalModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatRadioModule,
    // NgxSkeletonLoaderModule 

    // ,     NgParticlesModule
],
exports: [CotizarFormComponent,CompareComponent,CompararSelectComponent,CompareItemComponent] //
})
export class HomeModule {}
