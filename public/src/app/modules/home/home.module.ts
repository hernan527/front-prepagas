import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { ModalModule } from '../../_modal';
import {MatTabsModule} from '@angular/material/tabs';
// import { NgParticlesModule } from 'ng-particles';
import {ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {components} from "./components";










@NgModule({
    declarations: [
        HomeComponent,
        ...components,
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
    ]
})
export class HomeModule {}
